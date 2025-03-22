import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCardIcon, HeartIcon, ShieldIcon, MicroscopeIcon, RepeatIcon, QrCodeIcon, CopyIcon, CheckIcon, SmartphoneIcon, TreePineIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
type PaymentMethod = 'credit' | 'debit' | 'pix' | 'boleto';
type DonationType = 'single' | 'monthly';
interface DonationOption {
  valor: number;
  descricao: string;
  impacto: string;
  icon: React.ReactNode;
}
export const DoacaoPage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit');
  const [donationType, setDonationType] = useState<DonationType>('single');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [pixCopied, setPixCopied] = useState(false);
  const doacaoOpcoes: DonationOption[] = [{
    valor: 50,
    descricao: 'Plante 5 árvores na floresta equatorial',
    impacto: 'Sequestra até 1 tonelada de CO₂ por ano',
    icon: <TreePineIcon className="w-6 h-6" />
  }, {
    valor: 100,
    descricao: 'Proteja 1 hectare de floresta por um mês',
    impacto: 'Preserva habitat para dezenas de espécies',
    icon: <ShieldIcon className="w-6 h-6" />
  }, {
    valor: 200,
    descricao: 'Apoie pesquisas de conservação',
    impacto: 'Contribui para estudos vitais de preservação',
    icon: <MicroscopeIcon className="w-6 h-6" />
  }];
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
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCustomAmount(value);
    setSelectedAmount(null);
  };
  const copyPixKey = () => {
    navigator.clipboard.writeText('joaounesantos@gmail.com');
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 2000);
  };
  return <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Apoie a <span className="text-green-300">Floresta Equatorial</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sua doação ajuda a proteger um dos ecossistemas mais importantes do
            planeta e garante um futuro sustentável para as próximas gerações.
          </p>
        </motion.div>

        <div className="bg-[#0a170d] rounded-xl p-8 mb-8">
          <div className="flex justify-center gap-4 mb-8">
            <button onClick={() => setDonationType('single')} className={`px-6 py-3 rounded-lg flex items-center gap-2 ${donationType === 'single' ? 'bg-green-600 text-white' : 'bg-[#0d2010] text-gray-300 hover:bg-[#162918]'}`}>
              <HeartIcon size={20} />
              Doação Única
            </button>
            <Link to="/doacao-mensal" className="px-6 py-3 rounded-lg flex items-center gap-2 bg-[#0d2010] text-gray-300 hover:bg-[#162918]">
              <RepeatIcon size={20} />
              Conheça Nosso Programa Mensal
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {doacaoOpcoes.map((opcao, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} onClick={() => setSelectedAmount(opcao.valor)} className={`cursor-pointer p-6 rounded-xl transition-all ${selectedAmount === opcao.valor ? 'bg-green-600 text-white' : 'bg-[#0d2010] hover:bg-[#162918]'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${selectedAmount === opcao.valor ? 'bg-green-500/20' : 'bg-green-600/20'}`}>
                    {opcao.icon}
                  </div>
                  <div className="text-2xl font-bold">R$ {opcao.valor}</div>
                </div>
                <p className="text-sm mb-2">{opcao.descricao}</p>
                <p className={`text-xs ${selectedAmount === opcao.valor ? 'text-green-100' : 'text-gray-400'}`}>
                  {opcao.impacto}
                </p>
              </motion.div>)}
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">
              Outro Valor
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-400">R$</span>
              <input type="text" value={customAmount} onChange={handleCustomAmountChange} className="w-full bg-[#0d2010] rounded-lg py-2 px-4 pl-10 text-white" placeholder="Digite um valor personalizado" />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Forma de Pagamento</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button onClick={() => setPaymentMethod('credit')} className={`p-4 rounded-lg flex flex-col items-center gap-2 ${paymentMethod === 'credit' ? 'bg-green-600 text-white' : 'bg-[#0d2010] hover:bg-[#162918]'}`}>
                <CreditCardIcon size={24} />
                <span>Cartão de Crédito</span>
              </button>
              <button onClick={() => setPaymentMethod('debit')} className={`p-4 rounded-lg flex flex-col items-center gap-2 ${paymentMethod === 'debit' ? 'bg-green-600 text-white' : 'bg-[#0d2010] hover:bg-[#162918]'}`}>
                <CreditCardIcon size={24} />
                <span>Cartão de Débito</span>
              </button>
              <button onClick={() => setPaymentMethod('pix')} className={`p-4 rounded-lg flex flex-col items-center gap-2 ${paymentMethod === 'pix' ? 'bg-green-600 text-white' : 'bg-[#0d2010] hover:bg-[#162918]'}`}>
                <QrCodeIcon size={24} />
                <span>PIX</span>
              </button>
              <button onClick={() => setPaymentMethod('boleto')} className={`p-4 rounded-lg flex flex-col items-center gap-2 ${paymentMethod === 'boleto' ? 'bg-green-600 text-white' : 'bg-[#0d2010] hover:bg-[#162918]'}`}>
                <SmartphoneIcon size={24} />
                <span>Boleto Bancário</span>
              </button>
            </div>
          </div>

          {paymentMethod === 'credit' || paymentMethod === 'debit' ? <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Número do Cartão
                </label>
                <div className="relative">
                  <input type="text" value={cardNumber} onChange={handleCardNumberChange} className="w-full bg-[#0d2010] rounded-lg py-2 px-4 pl-10 text-white" placeholder="1234 5678 9012 3456" maxLength={19} />
                  <CreditCardIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nome no Cartão
                </label>
                <input type="text" value={cardName} onChange={e => setCardName(e.target.value)} className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white" placeholder="Nome como está no cartão" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Data de Validade
                  </label>
                  <input type="text" value={expiryDate} onChange={handleExpiryDateChange} className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white" placeholder="MM/AA" maxLength={5} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVV</label>
                  <input type="text" value={cvv} onChange={handleCvvChange} className="w-full bg-[#0d2010] rounded-lg py-2 px-4 text-white" placeholder="123" maxLength={4} />
                </div>
              </div>
            </div> : paymentMethod === 'pix' ? <div className="text-center space-y-6">
              <div className="bg-[#0d2010] p-8 rounded-lg inline-block">
                <QrCodeIcon size={150} className="mx-auto mb-4" />
                <p className="text-sm text-gray-300 mb-4">
                  Escaneie o código QR com seu aplicativo de pagamento
                </p>
                <div className="flex items-center justify-center gap-2">
                  <input type="text" value="joaounesantos@gmail.com" readOnly className="bg-[#162918] rounded-lg py-2 px-4 text-white text-sm" />
                  <button onClick={copyPixKey} className="bg-green-600 hover:bg-green-700 p-2 rounded-lg">
                    {pixCopied ? <CheckIcon size={20} /> : <CopyIcon size={20} />}
                  </button>
                </div>
              </div>
            </div> : <div className="text-center space-y-6">
              <p className="text-gray-300">
                Clique abaixo para gerar um boleto bancário para sua doação.
              </p>
              <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg inline-flex items-center gap-2">
                <SmartphoneIcon size={20} />
                Gerar Boleto
              </button>
            </div>}

          {paymentMethod !== 'pix' && <button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 px-4 transition-colors font-medium flex items-center justify-center gap-2">
              <HeartIcon size={20} />
              {donationType === 'monthly' ? 'Iniciar Doação Mensal' : 'Doar Agora'}
            </button>}
        </div>
      </div>
    </div>;
};