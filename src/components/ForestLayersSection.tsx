
const forestLayers = [{
  name: 'Dossel Emergente',
  height: '30-45m',
  description: 'As árvores mais altas que se elevam acima do dossel, recebendo a maior parte da luz solar e abrigando aves de rapina, borboletas e pequenos macacos.',
  image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
  color: 'from-green-400'
}, {
  name: 'Dossel',
  height: '18-30m',
  description: 'Forma um denso teto de galhos e folhas, lar da maior parte da vida selvagem da floresta, incluindo aves frugívoras, macacos e insetos.',
  image: 'https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg',
  color: 'from-green-500'
}, {
  name: 'Sub-bosque',
  height: '5-18m',
  description: 'Um ambiente escuro e úmido com árvores menores e plantas trepadeiras, abrigando sapos, cobras e grandes felinos.',
  image: 'https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg',
  color: 'from-green-600'
}, {
  name: 'Solo da Floresta',
  height: '0-5m',
  description: 'Recebe menos de 2% da luz solar, coberto por vegetação em decomposição e lar de insetos, fungos e mamíferos maiores.',
  image: 'https://i.pinimg.com/736x/5e/63/50/5e6350f08edf9efbe628cc5b720d73ab.jpg',
  color: 'from-green-800'
}];
export const ForestLayersSection = () => {
  return <section id="camadas-da-floresta" className="bg-[#0b1c0f] py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-green-300">Camadas</span> da Floresta Equatorial
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-300">
          As florestas equatoriais são estruturadas em camadas verticais
          distintas, cada uma com seu próprio microclima e comunidades
          especializadas de plantas e animais.
        </p>
        <div className="relative">
          {/* Forest layers visualization */}
          <div className="hidden md:block absolute left-0 w-1 bg-gradient-to-b from-green-300 to-green-900 h-full rounded-full"></div>
          <div className="space-y-24">
            {forestLayers.map((layer, index) => <div key={layer.name} className={`relative md:pl-12 ${index % 2 === 0 ? '' : 'md:text-right md:pl-0 md:pr-12'}`}>
                <div className={`hidden md:block absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} w-3 h-3 rounded-full bg-green-300 top-6 transform -translate-x-1`}></div>
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  <div className="w-full md:w-1/2">
                    <div className="relative overflow-hidden rounded-xl h-64 md:h-96">
                      <div className={`absolute inset-0 bg-gradient-to-b ${layer.color} to-[#0b1c0f] opacity-40`}></div>
                      <img src={layer.image} alt={layer.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-green-300">
                      {layer.name}
                    </h3>
                    <p className="text-lg mb-4 text-gray-400">
                      Altura: {layer.height}
                    </p>
                    <p className="text-lg text-gray-200">{layer.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};