import { motion } from 'framer-motion';
import { Users2Icon, HeartIcon, CalendarIcon, MapPinIcon, ArrowRightIcon, ActivityIcon } from 'lucide-react';
interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  localizacao: string;
  dataInicio: string;
  voluntarios: number;
  impacto: string;
  imagem: string;
}
export const ProjetosConservacaoPage = () => {
  const projetos: Projeto[] = [{
    id: 1,
    titulo: 'Reflorestamento da Amazônia Oriental',
    descricao: 'Projeto de restauração florestal que visa plantar 1 milhão de árvores nativas...',
    localizacao: 'Pará, Brasil',
    dataInicio: '2024-01',
    voluntarios: 250,
    impacto: '500 hectares restaurados',
    imagem: 'https://i.pinimg.com/736x/af/b0/d6/afb0d6469ae3d84cf2b9d053ac87ea2a.jpg'
  }, {
    id: 2,
    titulo: 'Proteção de Espécies Ameaçadas',
    descricao: 'Programa de monitoramento e proteção de espécies em risco de extinção...',
    localizacao: 'Amazonas, Brasil',
    dataInicio: '2023-08',
    voluntarios: 180,
    impacto: '15 espécies protegidas',
    imagem: 'https://images.unsplash.com/photo-1535338454770-8be927b5a00b'
  }, {
    id: 3,
    titulo: 'Corredor Ecológico Verde',
    descricao: 'Criação de conexões entre fragmentos florestais para permitir o fluxo de fauna...',
    localizacao: 'Rondônia, Brasil',
    dataInicio: '2023-11',
    voluntarios: 120,
    impacto: '200 km de corredor',
    imagem: 'https://i.pinimg.com/736x/fd/06/33/fd06339400740112261f162cfeaa8549.jpg'
  }];
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
            Projetos de <span className="text-green-300">Conservação</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conheça nossos projetos ativos de conservação e proteção da floresta
            equatorial e saiba como você pode participar.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map(projeto => <motion.div key={projeto.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-[#0a170d] rounded-xl overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{
            backgroundImage: `url(${projeto.imagem})`
          }} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{projeto.titulo}</h3>
                <p className="text-gray-300 mb-4">{projeto.descricao}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-400">
                    <MapPinIcon size={18} className="mr-2" />
                    {projeto.localizacao}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <CalendarIcon size={18} className="mr-2" />
                    Início:{' '}
                    {new Date(projeto.dataInicio).toLocaleDateString('pt-BR', {
                  month: 'long',
                  year: 'numeric'
                })}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users2Icon size={18} className="mr-2" />
                    {projeto.voluntarios} voluntários
                  </div>
                  <div className="flex items-center text-gray-400">
                    <ActivityIcon size={18} className="mr-2" />
                    {projeto.impacto}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                    <HeartIcon size={20} />
                    Participar
                  </button>
                  <button className="text-green-300 hover:text-green-400 transition-colors flex items-center gap-2">
                    Saiba mais
                    <ArrowRightIcon size={20} />
                  </button>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </div>;
};
