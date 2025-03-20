import { useState, FC } from 'react'
const biodiversityData = [
  {
    category: 'Plantas',
    icon: '🌿',
    facts: [
      'Mais de 40.000 espécies de plantas vivem nas florestas equatoriais',
      'Um único hectare pode conter mais de 750 tipos de árvores',
      'Muitas plantas têm propriedades medicinais, com 25% dos medicamentos ocidentais derivados de ingredientes da floresta',
      'Epífitas crescem sobre outras plantas para alcançar a luz solar sem se conectar ao solo',
    ],
    image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg',
  },
  {
    category: 'Animais',
    icon: '🦜',
    facts: [
      'Lar de aproximadamente 50% das espécies animais do mundo',
      'Muitos animais desenvolveram adaptações especializadas para a vida na floresta',
      'A camuflagem é comum entre os animais da floresta para proteção',
      'Estima-se que ainda existam numerosas espécies não descobertas nestas florestas',
    ],
    image: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg',
  },
  {
    category: 'Insetos',
    icon: '🦋',
    facts: [
      'Cientistas estimam que existam mais de 30 milhões de espécies de insetos nas florestas equatoriais',
      'Insetos desempenham papéis cruciais na polinização e decomposição',
      'Formigas cortadeiras mantêm jardins subterrâneos de fungos para alimentação',
      'Muitos insetos coevoluíram com espécies específicas de plantas',
    ],
    image: 'https://images.pexels.com/photos/1386602/pexels-photo-1386602.jpeg',
  },
]
export const BiodiversitySection: FC = () => {
  const [activeCategory, setActiveCategory] = useState(
    biodiversityData[0].category,
  )
  const activeData = biodiversityData.find(
    (item) => item.category === activeCategory,
  )
  return (
    <section
      id="biodiversidade"
      className="py-20 px-4 bg-gradient-to-b from-[#0b1c0f] to-[#0d2412]"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Incrível <span className="text-green-300">Biodiversidade</span>
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-300">
          As florestas equatoriais são os ecossistemas biologicamente mais
          diversos da Terra, abrigando milhões de espécies em uma complexa teia
          de vida.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="bg-[#0a170d] rounded-xl p-6 sticky top-24">
              <h3 className="text-2xl font-bold mb-6 text-green-300">
                Categorias
              </h3>
              <div className="space-y-4">
                {biodiversityData.map((item) => (
                  <button
                    key={item.category}
                    onClick={() => setActiveCategory(item.category)}
                    className={`w-full text-left p-4 rounded-lg transition-all flex items-center ${activeCategory === item.category ? 'bg-green-700/30 border-l-4 border-green-400' : 'bg-[#0d2010] hover:bg-[#12291a]'}`}
                  >
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="text-xl">{item.category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            {activeData && (
              <div className="bg-[#0a170d] rounded-xl overflow-hidden">
                <div className="h-64 md:h-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a170d] to-transparent z-10"></div>
                  <img
                    src={activeData.image}
                    alt={activeData.category}
                    className="w-full h-full object-cover"
                  />
                  <h3 className="absolute bottom-4 left-6 text-3xl font-bold z-20">
                    <span className="mr-3">{activeData.icon}</span>
                    {activeData.category}
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-green-300">
                    Fatos Importantes
                  </h4>
                  <ul className="space-y-4">
                    {activeData.facts.map((fact, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
