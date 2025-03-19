import React from 'react';
import { CloudRainIcon, ThermometerIcon, DropletIcon, SunIcon } from 'lucide-react';
export const ClimateSection = () => {
  return <section id="clima" className="py-20 px-4 bg-gradient-to-b from-[#0d2412] to-[#0b1c0f]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Clima <span className="text-green-300">Equatorial</span>
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-300">
          As florestas equatoriais têm um clima único que contribui para sua
          incrível biodiversidade e características distintas do ecossistema.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#0a170d] rounded-xl p-6 transform transition-transform hover:scale-[1.02]">
            <div className="mb-4 text-green-400">
              <ThermometerIcon size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Temperatura Constante</h3>
            <p className="text-gray-300">
              As temperaturas médias permanecem entre 24-27°C durante todo o
              ano, com pouca variação sazonal. As flutuações diárias de
              temperatura são frequentemente maiores que as flutuações anuais.
            </p>
          </div>
          <div className="bg-[#0a170d] rounded-xl p-6 transform transition-transform hover:scale-[1.02]">
            <div className="mb-4 text-green-400">
              <CloudRainIcon size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Alta Precipitação</h3>
            <p className="text-gray-300">
              A precipitação anual excede 2,000mm (80 inches), com chuva
              ocorrendo quase todos os dias. Este constante nível de umidade
              suporta a densa vegetação e a variedade de formas de vida.
            </p>
          </div>
          <div className="bg-[#0a170d] rounded-xl p-6 transform transition-transform hover:scale-[1.02]">
            <div className="mb-4 text-green-400">
              <DropletIcon size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Alta Umidade</h3>
            <p className="text-gray-300">
              Níveis de umidade geralmente variam entre 77% e 88%, criando um
              ambiente moíso que suporta epifítes, musgos e uma variedade de
              adaptações plantais especializadas.
            </p>
          </div>
          <div className="bg-[#0a170d] rounded-xl p-6 transform transition-transform hover:scale-[1.02]">
            <div className="mb-4 text-green-400">
              <SunIcon size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Baixa Luz Solar</h3>
            <p className="text-gray-300">
              A densa cobertura de árvores bloqueia 95-99% da luz solar que
              chega ao solo da floresta, criando microclimas distintos em
              diferentes níveis da floresta e drive adaptações únicas.
            </p>
          </div>
        </div>
        <div className="bg-[#0a170d] rounded-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 text-green-300">
              Regulação do Clima
            </h3>
            <p className="text-lg mb-6 text-gray-200">
              As florestas equatoriais desempenham um papel crucial na regulação
              global do clima através de:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0d2010] p-5 rounded-lg">
                <h4 className="font-bold text-xl mb-2">
                  Armazenamento de Carbono
                </h4>
                <p>
                  As florestas equatoriais armazenam aproximadamente 250 bilhões
                  de toneladas de carbono, ajudando a mitigar o aquecimento
                  global ao reduzir o CO₂ na atmosfera.
                </p>
              </div>
              <div className="bg-[#0d2010] p-5 rounded-lg">
                <h4 className="font-bold text-xl mb-2">Ciclo de Água</h4>
                <p>
                  A transpiração dessas florestas libera vapor de água que forma
                  nuvens e influencia os padrões de chuva em todo o continente.
                </p>
              </div>
              <div className="bg-[#0d2010] p-5 rounded-lg">
                <h4 className="font-bold text-xl mb-2">
                  Moderação da Temperatura
                </h4>
                <p>
                  A cobertura de árvores fornece sombra e evaporação que moderam
                  as temperaturas locais e afetam a circulação do ar global.
                </p>
              </div>
              <div className="bg-[#0d2010] p-5 rounded-lg">
                <h4 className="font-bold text-xl mb-2">
                  Suporte à Biodiversidade
                </h4>
                <p>
                  O clima estável cria condições que suportam uma biodiversidade
                  excepcional, que em seguida mantém a resistência do
                  ecossistema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};