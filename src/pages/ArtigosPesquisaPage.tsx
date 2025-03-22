import { useState } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, BookOpenIcon, FilterIcon, DownloadIcon } from 'lucide-react';
interface Artigo {
  id: number;
  titulo: string;
  autor: string;
  data: string;
  categoria: string;
  resumo: string;
  link: string;
}
export const ArtigosPesquisaPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const categorias = [{
    id: 'todos',
    nome: 'Todos'
  }, {
    id: 'biodiversidade',
    nome: 'Biodiversidade'
  }, {
    id: 'conservacao',
    nome: 'Conservação'
  }, {
    id: 'clima',
    nome: 'Clima'
  }, {
    id: 'ecologia',
    nome: 'Ecologia'
  }];
  const artigos: Artigo[] = [{
    id: 1,
    titulo: 'Análise da Biodiversidade na Floresta Amazônica',
    autor: 'Dr. João Silva',
    data: '2024-02-15',
    categoria: 'biodiversidade',
    resumo: 'Este estudo examina a diversidade de espécies em diferentes regiões da Floresta Amazônica...',
    link: '#'
  }, {
    id: 2,
    titulo: 'Impactos das Mudanças Climáticas nas Florestas Equatoriais',
    autor: 'Dra. Maria Santos',
    data: '2024-02-10',
    categoria: 'clima',
    resumo: 'Uma análise abrangente dos efeitos das mudanças climáticas na estrutura e função das florestas equatoriais...',
    link: '#'
  }, {
    id: 3,
    titulo: 'Estratégias de Conservação para Espécies Ameaçadas',
    autor: 'Dr. Pedro Costa',
    data: '2024-02-05',
    categoria: 'conservacao',
    resumo: 'Este artigo apresenta novas estratégias para a conservação de espécies ameaçadas nas florestas equatoriais...',
    link: '#'
  }, {
    id: 4,
    titulo: 'Interações Ecológicas na Floresta Equatorial',
    autor: 'Dra. Ana Oliveira',
    data: '2024-01-30',
    categoria: 'ecologia',
    resumo: 'Um estudo detalhado das complexas interações entre diferentes espécies no ecossistema da floresta...',
    link: '#'
  }];
  const filteredArtigos = artigos.filter(artigo => {
    const matchesSearch = artigo.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || artigo.autor.toLowerCase().includes(searchTerm.toLowerCase()) || artigo.resumo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || artigo.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });
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
            Artigos de <span className="text-green-300">Pesquisa</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore nossa coleção de artigos científicos sobre a floresta
            equatorial e suas descobertas mais recentes.
          </p>
        </motion.div>
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input type="text" placeholder="Pesquisar artigos..." className="w-full bg-[#0a170d] rounded-lg py-3 px-4 pl-12 text-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <SearchIcon className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
          <div className="flex gap-2">
            {categorias.map(categoria => <button key={categoria.id} onClick={() => setSelectedCategory(categoria.id)} className={`px-4 py-2 rounded-lg transition-colors ${selectedCategory === categoria.id ? 'bg-green-600 text-white' : 'bg-[#0a170d] text-gray-300 hover:bg-[#0d2010]'}`}>
                {categoria.nome}
              </button>)}
              <button className="px-4 py-2 rounded-lg bg-[#0a170d] text-gray-300 hover:bg-[#0d2010] transition-colors flex items-center gap-2">
      <FilterIcon size={20} />
      Filtrar
    </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArtigos.map(artigo => <motion.div key={artigo.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-[#0a170d] rounded-xl p-6 hover:bg-[#0d2010] transition-colors">
              <div className="flex items-start justify-between"> 
                <div>
                  <h3 className="text-xl font-bold mb-2">{artigo.titulo}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {artigo.autor} •{' '}
                    {new Date(artigo.data).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <span className="bg-green-600/20 text-green-400 text-sm px-3 py-1 rounded-full">
                  {categorias.find(c => c.id === artigo.categoria)?.nome}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{artigo.resumo}</p>
              <div className="flex justify-between items-center">
                <a href={artigo.link} className="text-green-300 hover:text-green-400 transition-colors flex items-center gap-2">
                  <BookOpenIcon size={20} />
                  Ler artigo
                </a>
                <button className="bg-[#0d2010] hover:bg-green-600/20 text-green-300 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <DownloadIcon size={20} />
                  PDF
                </button>
              </div>
            </motion.div>)}
        </div>
      </div>
    </div>;
};