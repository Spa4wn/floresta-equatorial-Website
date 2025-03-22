import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ZoomInIcon, DownloadIcon } from 'lucide-react';
interface Foto {
  id: number;
  titulo: string;
  categoria: string;
  fotografo: string;
  descricao: string;
  url: string;
  data: string;
}
export const GaleriaFotosPage = () => {
  const [selectedImage, setSelectedImage] = useState<Foto | null>(null);
  const [activeCategory, setActiveCategory] = useState('todas');
  const categorias = [{
    id: 'todas',
    nome: 'Todas'
  }, {
    id: 'fauna',
    nome: 'Fauna'
  }, {
    id: 'flora',
    nome: 'Flora'
  }, {
    id: 'paisagens',
    nome: 'Paisagens'
  }, {
    id: 'aereas',
    nome: 'Aéreas'
  }];
  const fotos: Foto[] = [{
    id: 1,
    titulo: 'Arara-azul em Voo',
    categoria: 'fauna',
    fotografo: 'Maria Silva',
    descricao: 'Arara-azul (Anodorhynchus hyacinthinus) fotografada na região amazônica.',
    url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3',
    data: '2024-01-15'
  }, {
    id: 2,
    titulo: 'Bromélia da Mata',
    categoria: 'flora',
    fotografo: 'João Santos',
    descricao: 'Bromélia epífita encontrada no dossel da floresta.',
    url: 'https://i.pinimg.com/736x/be/0e/f2/be0ef28c95e0bac46124b0be1629afb0.jpg',
    data: '2024-01-20'
  }, {
    id: 3,
    titulo: 'Vista Aérea da Floresta',
    categoria: 'aereas',
    fotografo: 'Pedro Costa',
    descricao: 'Vista aérea mostrando a extensão da floresta equatorial.',
    url: 'https://d36nqgmw98q4v5.cloudfront.net/images/news/ImageForNews_28002_16651335598127288.jpg',
    data: '2024-02-01'
  }, {
    id: 4,
    titulo: 'Cachoeira na Mata',
    categoria: 'paisagens',
    fotografo: 'Ana Oliveira',
    descricao: 'Cachoeira cercada pela vegetação densa da floresta.',
    url: 'https://i.pinimg.com/736x/f9/e9/29/f9e9292ea23f175960cb57b91b6e1a08.jpg',
    data: '2024-02-10'
  }];
  const fotosFiltradas = fotos.filter(foto => activeCategory === 'todas' || foto.categoria === activeCategory);
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
            Galeria de <span className="text-green-300">Fotos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore imagens deslumbrantes da floresta equatorial e sua
            biodiversidade, capturadas por fotógrafos especializados.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-4">
          {categorias.map(categoria => <button key={categoria.id} onClick={() => setActiveCategory(categoria.id)} className={`px-6 py-2 rounded-lg transition-colors whitespace-nowrap
                ${activeCategory === categoria.id ? 'bg-green-600 text-white' : 'bg-[#0a170d] text-gray-300 hover:bg-[#0d2010]'}`}>
              {categoria.nome}
            </button>)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotosFiltradas.map(foto => <motion.div key={foto.id} layout initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="relative group">
              <div className="aspect-square overflow-hidden rounded-xl bg-[#0a170d]">
                <img src={foto.url} alt={foto.titulo} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a170d] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold mb-1">{foto.titulo}</h3>
                    <p className="text-sm text-gray-300">
                      por {foto.fotografo}
                    </p>
                  </div>
                </div>
                <button onClick={() => setSelectedImage(foto)} className="absolute top-4 right-4 bg-green-600/80 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomInIcon size={20} />
                </button>
              </div>
            </motion.div>)}
        </div>

        <AnimatePresence>
          {selectedImage && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
              <div className="max-w-5xl w-full bg-[#0a170d] rounded-xl overflow-hidden" onClick={e => e.stopPropagation()}>
                <div className="relative">
                  <img src={selectedImage.url} alt={selectedImage.titulo} className="w-full object-cover" />
                  <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 bg-black/50 p-2 rounded-lg hover:bg-black/70 transition-colors">
                    <XIcon size={24} />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {selectedImage.titulo}
                      </h3>
                      <p className="text-gray-400">
                        Fotografado por {selectedImage.fotografo} •{' '}
                        {new Date(selectedImage.data).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                      <DownloadIcon size={20} />
                      Baixar
                    </button>
                  </div>
                  <p className="text-gray-300">{selectedImage.descricao}</p>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </div>;
};
