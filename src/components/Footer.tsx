
import { Link } from 'react-router-dom'
import {
  GlobeIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
} from 'lucide-react'
export const Footer = () => {
  const quickLinks = [
    {
      name: 'Início',
      path: '/',
    },
    {
      name: 'Camadas Florestais',
      path: '/#camadas-da-floresta',
    },
    {
      name: 'Biodiversidade',
      path: '/#biodiversidade',
    },
    {
      name: 'Clima',
      path: '/#clima',
    },
    {
      name: 'Conservação',
      path: '/#conservacao',
    },
  ]
  const recursos = [
    {
      name: 'Artigos de Pesquisa',
      path: '/artigos-pesquisa',
    },
    {
      name: 'Projetos de Conservação',
      path: '/projetos-conservacao',
    },
    {
      name: 'Materiais Educacionais',
      path: '/materiais-educacionais',
    },
    {
      name: 'Galeria de Fotos',
      path: '/galeria-fotos',
    },
  ]
  const envolvase = [
    {
      name: 'Voluntário',
      path: '/voluntario',
    },
    {
      name: 'Doe',
      path: '/doar',
    },
    {
      name: 'Espalhe a conscientização',
      path: '/conscientizacao',
    },
    {
      name: 'Entre em contato conosco',
      path: '/contato',
    },
  ]
  return (
    <footer className="bg-[#081209] py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <GlobeIcon size={28} className="text-green-400 mr-3" />
              <span className="text-2xl font-bold">
                Floresta<span className="text-green-400">Equatorial</span>
              </span>
            </Link>
            <p className="text-gray-400 mt-2 max-w-md">
              Explorando e preservando o ecossistema mais diverso da Terra para
              as gerações futuras.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-[#0d2010] hover:bg-green-800 transition-colors p-3 rounded-full"
            >
              <InstagramIcon size={24} className="text-green-400" />
            </a>
            <a
              href="#"
              className="bg-[#0d2010] hover:bg-green-800 transition-colors p-3 rounded-full"
            >
              <TwitterIcon size={24} className="text-green-400" />
            </a>
            <a
              href="#"
              className="bg-[#0d2010] hover:bg-green-800 transition-colors p-3 rounded-full"
            >
              <FacebookIcon size={24} className="text-green-400" />
            </a>
          </div>
        </div>
        <div className="border-t border-green-900/50 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-300">
                Links rápidos
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-green-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-300">
                Recursos
              </h4>
              <ul className="space-y-2">
                {recursos.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-green-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-300">
                Envolva-se
              </h4>
              <ul className="space-y-2">
                {envolvase.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-green-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
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
    </footer>
  )
}
