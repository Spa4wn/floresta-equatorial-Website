import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldIcon, GlobeIcon, CheckIcon, StarIcon, LeafIcon, BadgeCheckIcon, HeartIcon, CreditCardIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MembershipTier {
  id: string;
  name: string;
  price: number;
  icon: React.ReactNode;
  description: string;
  impact: string;
  benefits: string[];
  color: string;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  avatar: string;
  membershipType: string;
  duration: string;
}

export const DoacaoMensalPage = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const formatExpiryDate = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length >= 2) {
      return numbers.slice(0, 2) + '/' + numbers.slice(2, 4);
    }
    return numbers;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value);
    if (formattedValue.length <= 19) {
      setCardNumber(formattedValue);
    }
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatExpiryDate(e.target.value);
    if (formattedValue.length <= 5) {
      setExpiryDate(formattedValue);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, '');
    if (numbers.length <= 4) {
      setCvv(numbers);
    }
  };
  const membershipTiers: MembershipTier[] = [
    {
      id: 'guardiao',
      name: 'Guardião da Floresta',
      price: 25,
      icon: <LeafIcon className="w-6 h-6" />,
      description: 'Proteja a floresta e sua biodiversidade',
      impact: 'Preserva 1/4 hectare de floresta por mês',
      benefits: ['Newsletter mensal exclusiva', 'Certificado digital de guardião', 'Atualizações sobre projetos', 'Nome no mural de guardiões'],
      color: 'green-600',
    },
    {
      id: 'protetor',
      name: 'Protetor da Vida Selvagem',
      price: 50,
      icon: <ShieldIcon className="w-6 h-6" />,
      description: 'Amplie seu impacto na conservação',
      impact: 'Protege 1/2 hectare e monitora espécies ameaçadas',
      benefits: ['Todos os benefícios do Guardião', 'Relatórios detalhados de conservação', 'Fotos exclusivas da vida selvagem', 'Convites para webinars mensais'],
      color: 'green-600',
    },
    {
      id: 'embaixador',
      name: 'Embaixador da Natureza',
      price: 100,
      icon: <GlobeIcon className="w-6 h-6" />,
      description: 'Seja um líder na conservação',
      impact: 'Mantém 1 hectare e apoia pesquisas científicas',
      benefits: ['Todos os benefícios do Protetor', 'Encontros virtuais com pesquisadores', 'Nome em publicações científicas', 'Visita guiada anual à floresta*'],
      color: 'green-600',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ana Silva',
      location: 'São Paulo, SP',
      content: 'Como Guardiã da Floresta, recebo atualizações mensais que me fazem sentir verdadeiramente conectada com a conservação da floresta.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      membershipType: 'Guardiã da Floresta',
      duration: '1 ano',
    },
    {
      id: 2,
      name: 'Carlos Santos',
      location: 'Rio de Janeiro, RJ',
      content: 'Os relatórios detalhados e webinars mensais me ajudam a entender o verdadeiro impacto que minha contribuição tem na preservação.',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
      membershipType: 'Protetor da Vida Selvagem',
      duration: '2 anos',
    },
    {
      id: 3,
      name: 'Marina Costa',
      location: 'Manaus, AM',
      content: 'A experiência de visitar a floresta e conhecer os pesquisadores pessoalmente foi incrível. Vale cada centavo do programa Embaixador.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      membershipType: 'Embaixadora da Natureza',
      duration: '3 anos',
    },
  ];

  const scrollToPayment = (tierId: string) => {
    setSelectedTier(tierId);
    setShowPayment(true);
    setTimeout(() => {
      document.getElementById('payment-section')?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
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
            Torne-se um <span className="text-green-300">Membro Mensal</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Faça parte de uma comunidade comprometida com a preservação contínua da floresta equatorial e receba benefícios
            exclusivos.
          </p>
        </motion.div>

        <div className="bg-[#0a170d] rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-green-300 mb-2">2,500+</div>
              <p className="text-gray-300">Membros mensais ativos</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-300 mb-2">1,200</div>
              <p className="text-gray-300">Hectares protegidos</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-300 mb-2">50+</div>
              <p className="text-gray-300">Projetos apoiados</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Link to="/doar" className="px-6 py-3 rounded-lg flex items-center gap-2 bg-[#0d2010] text-gray-300 hover:bg-[#162918]">
            <HeartIcon size={20} />
            Doação Única
          </Link>
          <button className="px-6 py-3 rounded-lg flex items-center gap-2 bg-green-600 text-white">
            <StarIcon size={20} />
            Programa Mensal
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {membershipTiers.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-[#0a170d] rounded-xl p-6 cursor-pointer border-2 ${
                selectedTier === tier.id ? `border-${tier.color}` : 'border-transparent'
              }`}
              onClick={() => setSelectedTier(tier.id)}
            >
              <div className={`bg-${tier.color}/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {tier.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">R$ {tier.price}</span>
                <span className="text-gray-400 ml-2">/mês</span>
              </div>
              <p className="text-gray-300 mb-4">{tier.description}</p>
              <div className="bg-[#0d2010] p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-300">{tier.impact}</p>
              </div>
              <div className="space-y-3">
                {tier.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToPayment(tier.id);
                }}
                className={`w-full mt-6 bg-${tier.color} hover:bg-${tier.color}/90 text-white rounded-lg py-3 px-4 transition-colors flex items-center justify-center gap-2`}
              >
                <HeartIcon size={20} />
                Tornar-se Membro
              </button>
            </motion.div>
          ))}
        </div>

        {showPayment && (
          <motion.div
            id="payment-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0a170d] rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">
              {selectedTier && (
                <>
                  Iniciar {membershipTiers.find((t) => t.id === selectedTier)?.name}
                  <span className="block text-lg font-normal text-gray-400 mt-2">
                    R$ {membershipTiers.find((t) => t.id === selectedTier)?.price}/mês
                  </span>
                </>
              )}
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Número do Cartão</label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    className="w-full bg-[#0d2010] rounded-lg py-2 px-4 pl-10 text-white"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                  <CreditCardIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Data de Validade</label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white"
                    placeholder="MM/AA"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={handleCvvChange}
                    className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white"
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 px-4 transition-colors flex items-center justify-center gap-2">
                <HeartIcon size={20} />
                Confirmar Assinatura
              </button>
            </div>
          </motion.div>
        )}

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">O que nossos membros dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#0a170d] rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                  <BadgeCheckIcon className="w-5 h-5 text-green-400 ml-2" />
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{testimonial.membershipType}</span>
                  <span>Membro há {testimonial.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};