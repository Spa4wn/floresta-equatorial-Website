import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, CodeIcon, VideoIcon, DownloadIcon, PlayCircleIcon, FileTextIcon, GraduationCapIcon } from 'lucide-react';
interface Material {
  id: number;
  titulo: string;
  tipo: 'video' | 'documento' | 'codigo' | 'curso';
  nivel: 'iniciante' | 'intermediario' | 'avancado';
  descricao: string;
  duracao?: string;
  autor: string;
  thumbnail?: string;
  link: string;
}
export const MateriaisEducacionaisPage = () => {
  const [filtroTipo, setFiltroTipo] = useState<string>('todos');
  const [filtroNivel, setFiltroNivel] = useState<string>('todos');
  const materiais: Material[] = [{
    id: 1,
    titulo: 'Introdução à Programação com Dados Ambientais',
    tipo: 'curso',
    nivel: 'iniciante',
    descricao: 'Aprenda a analisar dados ambientais usando Python com exemplos práticos da floresta equatorial.',
    duracao: '4 horas',
    autor: 'Dra. Ana Silva',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    link: '#'
  }, {
    id: 2,
    titulo: 'Visualização de Dados de Biodiversidade',
    tipo: 'codigo',
    nivel: 'intermediario',
    descricao: 'Código-fonte e tutorial para criar visualizações interativas de dados de biodiversidade.',
    autor: 'João Pedro Santos',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    link: '#'
  }, {
    id: 3,
    titulo: 'Monitoramento de Desmatamento via Satélite',
    tipo: 'video',
    nivel: 'avancado',
    descricao: 'Vídeo tutorial sobre como processar imagens de satélite para detectar desmatamento.',
    duracao: '45 minutos',
    autor: 'Dr. Carlos Mendes',
    thumbnail: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8',
    link: '#'
  }, {
    id: 4,
    titulo: 'Guia de Conservação Digital',
    tipo: 'documento',
    nivel: 'iniciante',
    descricao: 'Manual completo sobre ferramentas digitais para conservação ambiental.',
    autor: 'Equipe FlorestaTech',
    thumbnail: 'https://images.unsplash.com/photo-1499244571948-7ccddb3583f1',
    link: '#'
  }];
  const tipos = [{
    id: 'todos',
    nome: 'Todos',
    icon: BookOpenIcon
  }, {
    id: 'video',
    nome: 'Vídeos',
    icon: VideoIcon
  }, {
    id: 'documento',
    nome: 'Documentos',
    icon: FileTextIcon
  }, {
    id: 'codigo',
    nome: 'Código',
    icon: CodeIcon
  }, {
    id: 'curso',
    nome: 'Cursos',
    icon: GraduationCapIcon
  }];
  const niveis = [{
    id: 'todos',
    nome: 'Todos os níveis'
  }, {
    id: 'iniciante',
    nome: 'Iniciante'
  }, {
    id: 'intermediario',
    nome: 'Intermediário'
  }, {
    id: 'avancado',
    nome: 'Avançado'
  }];
  const materiaisFiltrados = materiais.filter(material => {
    const matchTipo = filtroTipo === 'todos' || material.tipo === filtroTipo;
    const matchNivel = filtroNivel === 'todos' || material.nivel === filtroNivel;
    return matchTipo && matchNivel;
  });
  const IconeTipo = ({
    tipo
  }: {
    tipo: string;
  }) => {
    const tipoConfig = tipos.find(t => t.id === tipo);
    const Icon = tipoConfig?.icon || BookOpenIcon;
    return <Icon size={24} />;
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
            Materiais <span className="text-green-300">Educacionais</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recursos educacionais para desenvolvedores interessados em
            conservação ambiental e tecnologias verdes.
          </p>
        </motion.div>
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {tipos.map(tipo => <button key={tipo.id} onClick={() => setFiltroTipo(tipo.id)} className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap
                  ${filtroTipo === tipo.id ? 'bg-green-600 text-white' : 'bg-[#0a170d] text-gray-300 hover:bg-[#0d2010]'}`}>
                <tipo.icon size={20} />
                {tipo.nome}
              </button>)}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {niveis.map(nivel => <button key={nivel.id} onClick={() => setFiltroNivel(nivel.id)} className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap
                  ${filtroNivel === nivel.id ? 'bg-green-600 text-white' : 'bg-[#0a170d] text-gray-300 hover:bg-[#0d2010]'}`}>
                {nivel.nome}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materiaisFiltrados.map(material => <motion.div key={material.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-[#0a170d] rounded-xl overflow-hidden hover:bg-[#0d2010] transition-colors">
              <div className="h-48 bg-cover bg-center relative" style={{
            backgroundImage: `url(${material.thumbnail})`
          }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a170d] to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="bg-green-600/20 p-2 rounded-lg">
                    <IconeTipo tipo={material.tipo} />
                  </div>
                  <span className="bg-[#0a170d]/80 px-3 py-1 rounded-full text-sm">
                    {niveis.find(n => n.id === material.nivel)?.nome}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{material.titulo}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  por {material.autor}
                  {material.duracao && ` • ${material.duracao}`}
                </p>
                <p className="text-gray-300 mb-6">{material.descricao}</p>
                <div className="flex justify-between items-center">
                  <a href={material.link} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                    {material.tipo === 'video' ? <PlayCircleIcon size={20} /> : material.tipo === 'documento' ? <DownloadIcon size={20} /> : material.tipo === 'codigo' ? <CodeIcon size={20} /> : <GraduationCapIcon size={20} />}
                    {material.tipo === 'video' ? 'Assistir' : material.tipo === 'documento' ? 'Baixar' : material.tipo === 'codigo' ? 'Ver código' : 'Começar curso'}
                  </a>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </div>;
};