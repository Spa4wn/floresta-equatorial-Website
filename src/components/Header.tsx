import { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const navigationItems = [{
  name: 'Início',
  href: 'inicio'
}, {
  name: 'Camadas da Floresta',
  href: 'camadas-da-floresta'
}, {
  name: 'Biodiversidade',
  href: 'biodiversidade'
}, {
  name: 'Clima',
  href: 'clima'
}, {
  name: 'Conservação',
  href: 'conservacao'
}];
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b1c0f]/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-green-300">
            Floresta<span className="text-white">Equatorial</span>
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map(item => <a key={item.name} href={`#${item.href}`} className="text-white hover:text-green-300 transition-colors">
              {item.name}
            </a>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden bg-[#0b1c0f]/95 backdrop-blur-md absolute w-full">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navigationItems.map(item => <a key={item.name} href={`#${item.href}`} className="text-white hover:text-green-300 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </a>)}
          </nav>
        </div>}
    </header>;
};