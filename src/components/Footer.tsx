import React from 'react';
import { GlobeIcon, InstagramIcon, TwitterIcon, FacebookIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-[#081209] py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <GlobeIcon size={28} className="text-green-400 mr-3" />
              <span className="text-2xl font-bold">
                Floresta<span className="text-green-400">Equatorial</span>
              </span>
            </div>
            <p className="text-gray-400 mt-2 max-w-md">
              Explorando e preservando o ecossistema mais diverso da Terra para
              as gerações futuras.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="bg-[#0d2010] hover:bg-green-800 transition-colors p-3 rounded-full">
              <InstagramIcon size={24} className="text-green-400" />
            </a>
            <a href="#" className="bg-[#0d2010] hover:bg-green-800 transition-colors p-3 rounded-full">
              <TwitterIcon size={24} className="text-green-400" />
            </a>
            <a href="#" className="bg-[#0d2010] hover:bg-green-800 transition-colors p-3 rounded-full">
              <FacebookIcon size={24} className="text-green-400" />
            </a>
          </div>
        </div>
        <div className="border-t border-green-900/50 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-300">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {['Home', 'Forest Layers', 'Biodiversity', 'Climate', 'Conservation'].map(item => <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-green-300 transition-colors">
                      {item}
                    </a>
                  </li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-300">
                Resources
              </h4>
              <ul className="space-y-2">
                {['Research Papers', 'Conservation Projects', 'Educational Materials', 'Photo Gallery'].map(item => <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-green-300 transition-colors">
                      {item}
                    </a>
                  </li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-300">
                Get Involved
              </h4>
              <ul className="space-y-2">
                {['Volunteer', 'Donate', 'Spread Awareness', 'Contact Us'].map(item => <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-green-300 transition-colors">
                        {item}
                      </a>
                    </li>)}
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Projeto Floresta Equatorial. Criado
              para fins educacionais.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};