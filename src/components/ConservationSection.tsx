import React from 'react';
import { AlertTriangleIcon, TrendingDownIcon, ShieldIcon } from 'lucide-react';
export const ConservationSection = () => {
  return <section id="conservacao" className="py-20 px-4 bg-[#0b1c0f]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-green-300">Conservação</span> e Desafios
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-300">
          As florestas equatoriais enfrentam numerosas ameaças que colocam em
          risco seus ecossistemas únicos e os serviços que prestam ao nosso
          planeta.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#0a170d] rounded-xl overflow-hidden">
            <div className="h-48 relative">
              <img src="https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg" alt="Desmatamento" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-red-500/80 p-2 rounded-full z-20">
                <AlertTriangleIcon size={24} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Desmatamento</h3>
              <p className="text-gray-300 mb-4">
                Aproximadamente 17% da Floresta Amazônica foi destruída nos
                últimos 50 anos, principalmente para expansão agrícola, extração
                de madeira e desenvolvimento de infraestrutura.
              </p>
              <div className="flex items-center">
                <TrendingDownIcon size={20} className="text-red-400 mr-2" />
                <span className="text-red-400 font-semibold">
                  Taxa de perda: 26.000 km² por ano
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#0a170d] rounded-xl overflow-hidden">
            <div className="h-48 relative">
              <img src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg" alt="Mudanças Climáticas" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-red-500/80 p-2 rounded-full z-20">
                <AlertTriangleIcon size={24} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Mudanças Climáticas</h3>
              <p className="text-gray-300 mb-4">
                O aumento das temperaturas e alterações nos padrões de
                precipitação estão causando mudanças na distribuição das
                espécies e aumentando a vulnerabilidade a secas e incêndios
                florestais.
              </p>
              <div className="flex items-center">
                <TrendingDownIcon size={20} className="text-red-400 mr-2" />
                <span className="text-red-400 font-semibold">
                  Possível perda de 30% das espécies até 2050
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#0a170d] rounded-xl overflow-hidden">
            <div className="h-48 relative">
              <img src="https://images.pexels.com/photos/4846296/pexels-photo-4846296.jpeg" alt="Extração de Recursos" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-red-500/80 p-2 rounded-full z-20">
                <AlertTriangleIcon size={24} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Extração de Recursos</h3>
              <p className="text-gray-300 mb-4">
                Mineração, extração de petróleo e colheita insustentável de
                produtos florestais causam fragmentação do habitat, poluição e
                perturbam as comunidades indígenas.
              </p>
              <div className="flex items-center">
                <TrendingDownIcon size={20} className="text-red-400 mr-2" />
                <span className="text-red-400 font-semibold">
                  Mais de 80.000 km de novas estradas anualmente
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-900/30 to-green-700/30 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <div className="bg-green-600/20 p-4 rounded-full">
              <ShieldIcon size={48} className="text-green-400" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Soluções de Conservação
              </h3>
              <p className="text-lg text-gray-300">
                Proteger as florestas equatoriais requer esforços coordenados em
                níveis local, nacional e global.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0a170d] p-5 rounded-lg">
              <h4 className="font-bold text-xl mb-2 text-green-300">
                Áreas Protegidas
              </h4>
              <p className="text-gray-300">
                O estabelecimento e gestão adequada de áreas protegidas e
                territórios indígenas tem se mostrado eficaz na redução das
                taxas de desmatamento em até 80%.
              </p>
            </div>
            <div className="bg-[#0a170d] p-5 rounded-lg">
              <h4 className="font-bold text-xl mb-2 text-green-300">
                Práticas Sustentáveis
              </h4>
              <p className="text-gray-300">
                Promover agricultura sustentável, extração responsável de
                madeira e ecoturismo fornece alternativas econômicas às práticas
                destrutivas.
              </p>
            </div>
            <div className="bg-[#0a170d] p-5 rounded-lg">
              <h4 className="font-bold text-xl mb-2 text-green-300">
                Reforma de Políticas
              </h4>
              <p className="text-gray-300">
                Implementar e fazer cumprir políticas que valorizem os serviços
                do ecossistema florestal e apoiem os direitos indígenas cria
                incentivos para a conservação.
              </p>
            </div>
            <div className="bg-[#0a170d] p-5 rounded-lg">
              <h4 className="font-bold text-xl mb-2 text-green-300">
                Educação e Conscientização
              </h4>
              <p className="text-gray-300">
                Aumentar a conscientização sobre a importância das florestas
                equatoriais incentiva escolhas sustentáveis dos consumidores e
                apoio político para conservação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};