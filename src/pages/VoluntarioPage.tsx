import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  HeartIcon,
  TreePineIcon,
  BookOpenIcon,
  CameraIcon,
  ClipboardCheckIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  CheckCircleIcon,
  ChevronDownIcon,
} from 'lucide-react';

interface Opportunity {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  location: string;
  requirements: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

export const VoluntarioPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    availability: '',
    experience: '',
    motivation: '',
    selectedOpportunity: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);

  const opportunities: Opportunity[] = [
    {
      id: 1,
      title: 'Conservação em Campo',
      description:
        'Trabalhe diretamente na floresta auxiliando em projetos de conservação, monitoramento de espécies e restauração de habitats.',
      icon: <TreePineIcon className="w-6 h-6" />,
      duration: '1-6 meses',
      location: 'Várias localidades na Amazônia',
      requirements: [
        'Boa condição física',
        'Disponibilidade para trabalho em campo',
        'Conhecimento básico de biologia (desejável)',
      ],
    },
    {
      id: 2,
      title: 'Educação Ambiental',
      description:
        'Desenvolva e conduza programas educacionais para comunidades locais e escolas sobre a importância da conservação.',
      icon: <BookOpenIcon className="w-6 h-6" />,
      duration: '3-12 meses',
      location: 'Centros urbanos próximos à floresta',
      requirements: ['Experiência com educação', 'Boa comunicação', 'Conhecimento sobre meio ambiente'],
    },
    {
      id: 3,
      title: 'Documentação e Mídia',
      description:
        'Ajude a documentar nossa vida selvagem e projetos através de fotografia, vídeo e narrativas escritas.',
      icon: <CameraIcon className="w-6 h-6" />,
      duration: '1-3 meses',
      location: 'Várias localidades',
      requirements: ['Experiência com fotografia/vídeo', 'Habilidade de escrita', 'Equipamento próprio'],
    },
  ];

  const faqs: FAQ[] = [
    {
      question: 'Preciso ter experiência prévia?',
      answer:
        'A necessidade de experiência varia de acordo com o programa. Alguns projetos aceitam voluntários sem experiência, enquanto outros podem exigir conhecimentos específicos.',
    },
    {
      question: 'O programa oferece acomodação?',
      answer:
        'Sim, fornecemos acomodação básica e alimentação para voluntários em projetos de campo. Para programas urbanos, podemos ajudar a encontrar opções de hospedagem.',
    },
    {
      question: 'Posso escolher a duração do voluntariado?',
      answer:
        'Cada programa tem uma duração mínima recomendada, mas podemos discutir flexibilidade dependendo do projeto e sua disponibilidade.',
    },
    {
      question: 'Existe algum custo para participar?',
      answer:
        'Existe uma taxa de programa que cobre acomodação, alimentação e custos operacionais. Bolsas podem estar disponíveis para candidatos qualificados.',
    },
  ];

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

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

  const formatName = (value: string) => {
    return value
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  useEffect(() => {
    if (formData.location.length >= 3) {
      fetchLocationSuggestions(formData.location);
    } else {
      setLocationSuggestions([]);
    }
  }, [formData.location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert('Por favor, insira um email válido.');
      return;
    }
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        availability: '',
        experience: '',
        motivation: '',
        selectedOpportunity: '',
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'phone') {
      formattedValue = formatPhone(value);
    } else if (name === 'name') {
      formattedValue = formatName(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Seja <span className="text-green-300">Voluntário</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Junte-se a nós na missão de proteger e preservar a floresta equatorial. Sua dedicação pode fazer a diferença.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#0a170d] rounded-xl p-6"
            >
              <div className="bg-green-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {opportunity.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
              <p className="text-gray-300 mb-4">{opportunity.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-400">
                  <CalendarIcon size={16} className="mr-2" />
                  {opportunity.duration}
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPinIcon size={16} className="mr-2" />
                  {opportunity.location}
                </div>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <h4 className="font-semibold mb-2">Requisitos:</h4>
                <ul className="space-y-1">
                  {opportunity.requirements.map((req, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-400">
                      <span className="text-green-400 mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#0a170d] rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ClipboardCheckIcon className="mr-2 text-green-300" />
            Formulário de Inscrição
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0d2010] rounded-lg py-2 px-4 pl-10 text-white"
                    placeholder="Seu nome"
                  />
                  <UserIcon className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0d2010] rounded-lg py-2 px-4 pl-10 text-white"
                    placeholder="seu@email.com"
                  />
                  <MailIcon className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0d2010] rounded-lg py-2 px-4 pl-10 text-white"
                    placeholder="(00) 00000-0000"
                  />
                  <PhoneIcon className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Localização</label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0d2010] rounded-lg py-2 px-4 pl-10 text-white"
                    placeholder="Cidade, Estado"
                  />
                  <MapPinIcon className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
                {locationSuggestions.length > 0 && (
                  <ul className="mt-2 bg-[#0d2010] rounded-lg">
                    {locationSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="p-2 text-gray-300 hover:bg-[#162918] cursor-pointer"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, location: suggestion }));
                          setLocationSuggestions([]);
                        }}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Programa de Interesse</label>
              <select
                name="selectedOpportunity"
                value={formData.selectedOpportunity}
                onChange={handleChange}
                required
                className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white"
              >
                <option value="">Selecione um programa</option>
                {opportunities.map((opp) => (
                  <option key={opp.id} value={opp.id}>
                    {opp.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Disponibilidade</label>
              <input
                type="text"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
                className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white"
                placeholder="Período disponível para voluntariado"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Experiência Relevante</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={3}
                className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white resize-none"
                placeholder="Descreva suas experiências relevantes"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Motivação</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white resize-none"
                placeholder="Por que você quer ser voluntário?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 px-4 transition-colors flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <CheckCircleIcon size={20} />
                  Inscrição Enviada!
                </>
              ) : (
                <>
                  <HeartIcon size={20} />
                  Enviar Inscrição
                </>
              )}
            </button>
          </form>
        </div>

        <div className="bg-[#0a170d] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-800 last:border-0">
                <button
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                  className="w-full py-4 flex justify-between items-center text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDownIcon
                    className={`transform transition-transform ${selectedFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {selectedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pb-4 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};