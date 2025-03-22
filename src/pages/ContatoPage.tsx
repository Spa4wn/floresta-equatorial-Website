import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CheckCircleIcon } from 'lucide-react';

declare global {
  interface Window {
    onCaptchaChange: (token: string) => void;
  }
}

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  endereco: string;
}

export const ContatoPage = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
    endereco: '',
  });
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Função para formatar o telefone
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  };

  // Função para validar o e-mail usando AbstractAPI
  const validateEmail = async (email: string) => {
    try {
      const response = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=64df6f27aef34ba4a436e45d30b381c5&email=${email}`
      );
      const data = await response.json();
      return data.is_valid_format.value && data.is_mx_found.value && data.is_smtp_valid.value;
    } catch (error) {
      console.error('Erro ao validar e-mail:', error);
      return false;
    }
  };

  // Função para buscar sugestões de localização
  const fetchLocationSuggestions = async (query: string) => {
    if (query.length < 3) return;
    try {
      const response = await fetch(
        `https://api.locationiq.com/v1/autocomplete?key=pk.aafc33a810ef2c175a5bd31c023b4628&q=${query}&format=json`
      );
      const data = await response.json();
      setLocationSuggestions(data.map((item: any) => item.display_name));
    } catch (error) {
      console.error('Erro ao buscar localizações:', error);
    }
  };

  // Função para obter a localização do usuário
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://api.locationiq.com/v1/reverse?key=pk.aafc33a810ef2c175a5bd31c023b4628&lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            setFormData((prev) => ({
              ...prev,
              endereco: data.display_name,
            }));
          } catch (error) {
            console.error('Erro ao buscar endereço:', error);
          }
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
        }
      );
    } else {
      alert('Geolocalização não é suportada pelo seu navegador.');
    }
  };

  // Função para enviar o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Por favor, complete o reCAPTCHA.');
      return;
    }

    if (!(await validateEmail(formData.email))) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    setEnviando(true);

    // Enviar via EmailJS
    try {
      const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_3m6gfbk',
          template_id: 'template_1l872in',
          user_id: 'Pq8xt-1317NRNVYsy',
          template_params: {
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone,
            assunto: formData.assunto,
            mensagem: formData.mensagem,
            endereco: formData.endereco,
            'g-recaptcha-response': captchaToken, // Envie o token do reCAPTCHA
          },
        }),
      });

      if (!emailResponse.ok) {
        throw new Error('Erro ao enviar e-mail.');
      }

      // Enviar via WhatsApp
      const whatsappMessage = `Nome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\nAssunto: ${formData.assunto}\nMensagem: ${formData.mensagem}\nEndereço: ${formData.endereco}`;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=79988639489&text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      setEnviado(true);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
        endereco: '',
      });
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setEnviando(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'telefone') {
      formattedValue = formatPhone(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    if (name === 'endereco') {
      fetchLocationSuggestions(value);
    }
  };

  // Inicializar reCAPTCHA
  useEffect(() => {
    window.onCaptchaChange = (token: string) => {
      setCaptchaToken(token);
    };

    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contatoInfo = [
    {
      icon: MailIcon,
      title: 'Email',
      content: 'contato@florestaequatorial.org',
      link: 'mailto:contato@florestaequatorial.org',
    },
    {
      icon: PhoneIcon,
      title: 'Telefone',
      content: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999',
    },
    {
      icon: MapPinIcon,
      title: 'Endereço',
      content: 'Av. Amazônia, 1000 - Manaus, AM',
      link: 'https://maps.google.com',
    },
  ];

  const assuntos = ['Dúvidas gerais', 'Parcerias', 'Voluntariado', 'Doações', 'Denúncias', 'Outros'];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-green-300">Contato</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos aqui para ouvir suas dúvidas, sugestões e contribuir com a preservação das florestas equatoriais.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contatoInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#0a170d] rounded-xl p-6 hover:bg-[#0d2010] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-600/20 p-3 rounded-lg">
                  <info.icon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                  <p className="text-gray-300">{info.content}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="bg-[#0a170d] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Endereço</label>
                <input
                  type="text"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white"
                  placeholder="Digite seu endereço"
                />
                {locationSuggestions.length > 0 && (
                  <ul className="mt-2 bg-[#0d2010] rounded-lg">
                    {locationSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="p-2 text-gray-300 hover:bg-[#162918] cursor-pointer"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, endereco: suggestion }));
                          setLocationSuggestions([]);
                        }}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  type="button"
                  onClick={getUserLocation}
                  className="mt-2 text-sm text-green-400 hover:text-green-300"
                >
                  Usar minha localização atual
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assunto</label>
              <select
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
                className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white"
              >
                <option value="">Selecione um assunto</option>
                {assuntos.map((assunto) => (
                  <option key={assunto} value={assunto}>
                    {assunto}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white resize-none"
                placeholder="Digite sua mensagem aqui..."
              />
            </div>
            <div className="g-recaptcha" data-sitekey="6LcrbvwqAAAAAN-CB7Z6QNMaZX2zFyXtolxvjvo4"></div>
            <button
              type="submit"
              disabled={enviando || enviado}
              className={`w-full rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-colors ${
                enviado ? 'bg-green-600 cursor-default' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {enviado ? (
                <>
                  <CheckCircleIcon size={20} />
                  Mensagem Enviada!
                </>
              ) : (
                <>
                  <SendIcon size={20} />
                  {enviando ? 'Enviando...' : 'Enviar Mensagem'}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};