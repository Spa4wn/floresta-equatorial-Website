import { useState, Component } from 'react'; 
import { motion } from 'framer-motion';
import { Share2Icon, CopyIcon, CheckIcon, TwitterIcon, FacebookIcon, LinkedinIcon, AlertTriangleIcon } from 'lucide-react';

// Interface para os fatos compartilháveis
interface ShareableFact {
  id: number;
  title: string;
  description: string;
  image: string;
  source: string;
}

// Componente de classe para exibir um fato adicional
class AdditionalFact extends Component<{ fact: ShareableFact }> {
  render() {
    const { fact } = this.props;
    return (
      <div className="bg-[#0a170d] rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{fact.description}</p>
        <p className="text-gray-400 text-xs">Fonte: {fact.source}</p>
      </div>
    );
  }
}

export const ConscientizacaoPage = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const shareableFacts: ShareableFact[] = [
    {
      id: 1,
      title: 'Perda de Floresta Alarmante',
      description:
        'A cada minuto, perdemos o equivalente a 40 campos de futebol de floresta equatorial. Isso representa mais de 20 milhões de hectares por ano.',
      image: 'https://i.pinimg.com/736x/6d/4c/cc/6d4ccc2558e280aebb024cdeb02ce3a4.jpg',
      source: 'Instituto de Pesquisas Amazônicas',
    },
    {
      id: 2,
      title: 'Biodiversidade em Risco',
      description:
        'As florestas equatoriais abrigam mais de 50% das espécies terrestres do planeta, mas estima-se que 137 espécies são perdidas diariamente.',
      image: 'https://images.unsplash.com/photo-1535338454770-8be927b5a00b',
      source: 'Conservação Internacional',
    },
    {
      id: 3,
      title: 'Impacto no Clima Global',
      description:
        'As florestas equatoriais armazenam 250 bilhões de toneladas de carbono. Sua destruição libera mais CO2 que todos os carros do mundo juntos.',
      image: 'https://i.pinimg.com/736x/58/bf/fb/58bffbef0a99445c6266dd257611d671.jpg',
      source: 'Painel Intergovernamental sobre Mudanças Climáticas',
    },
  ];

  const acoesIndividuais = [
    {
      title: 'Reduza seu Consumo',
      items: [
        'Evite produtos com óleo de palma não sustentável',
        'Compre madeira certificada FSC',
        'Prefira produtos locais e orgânicos',
        'Minimize o uso de papel',
      ],
    },
    {
      title: 'Eduque e Compartilhe',
      items: [
        'Compartilhe informações nas redes sociais',
        'Participe de grupos de conservação',
        'Organize eventos de conscientização',
        'Apoie jornalismo ambiental',
      ],
    },
    {
      title: 'Apoie a Conservação',
      items: [
        'Doe para organizações de conservação',
        'Participe de projetos de reflorestamento',
        'Apoie comunidades indígenas',
        'Voluntarie-se em projetos ambientais',
      ],
    },
  ];

  const copyToClipboard = (fact: ShareableFact) => {
    const text = `${fact.title}\n\n${fact.description}\n\nFonte: ${fact.source}\n\nSaiba mais em: www.florestaequatorial.org`;
    navigator.clipboard.writeText(text);
    setCopiedId(fact.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const shareOnSocial = (platform: string, fact: ShareableFact) => {
    const text = encodeURIComponent(`${fact.title}\n${fact.description}\n\nSaiba mais em: www.florestaequatorial.org`);
    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${text}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=www.florestaequatorial.org&quote=${text}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/shareArticle?mini=true&url=www.florestaequatorial.org&title=${encodeURIComponent(fact.title)}&summary=${text}`;
        break;
    }
    window.open(url, '_blank');
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
            Espalhe a <span className="text-green-300">Conscientização</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ajude a proteger as florestas equatoriais compartilhando informações e tomando ações conscientes no seu dia a
            dia.
          </p>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Share2Icon className="mr-2 text-green-300" />
            Compartilhe Estes Fatos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shareableFacts.map((fact) => (
              <motion.div
                key={fact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#0a170d] rounded-xl overflow-hidden"
              >
                <div className="h-48 relative">
                  <img src={fact.image} alt={fact.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a170d] to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{fact.description}</p>
                  <p className="text-gray-400 text-xs mb-4">Fonte: {fact.source}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <button
                        onClick={() => shareOnSocial('twitter', fact)}
                        className="p-2 bg-[#0d2010] hover:bg-[#162918] rounded-lg transition-colors"
                      >
                        <TwitterIcon size={20} />
                      </button>
                      <button
                        onClick={() => shareOnSocial('facebook', fact)}
                        className="p-2 bg-[#0d2010] hover:bg-[#162918] rounded-lg transition-colors"
                      >
                        <FacebookIcon size={20} />
                      </button>
                      <button
                        onClick={() => shareOnSocial('linkedin', fact)}
                        className="p-2 bg-[#0d2010] hover:bg-[#162918] rounded-lg transition-colors"
                      >
                        <LinkedinIcon size={20} />
                      </button>
                    </div>
                    <button
                      onClick={() => copyToClipboard(fact)}
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                    >
                      {copiedId === fact.id ? (
                        <>
                          <CheckIcon size={20} />
                          Copiado!
                        </>
                      ) : (
                        <>
                          <CopyIcon size={20} />
                          Copiar
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-[#0a170d] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <AlertTriangleIcon className="mr-2 text-green-300" />
            Ações Individuais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {acoesIndividuais.map((acao, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#0d2010] p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-green-300">{acao.title}</h3>
                <ul className="space-y-3">
                  {acao.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Exemplo de uso do componente de classe */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-8">Fato Adicional</h2>
          <AdditionalFact
            fact={{
              id: 4,
              title: 'Importância das Florestas Equatoriais',
              description:
                'As florestas equatoriais são essenciais para a regulação do clima global e a manutenção da biodiversidade.',
              image: 'https://i.pinimg.com/736x/58/bf/fb/58bffbef0a99445c6266dd257611d671.jpg',
              source: 'Organização Mundial de Conservação',
            }}
          />
        </div>
      </div>
    </div>
  );
};