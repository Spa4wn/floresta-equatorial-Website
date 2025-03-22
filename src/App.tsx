
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { DoacaoPage } from './pages/DoacaoPage';
import { DoacaoMensalPage } from './pages/DoacaoMensalPage';
import { ArtigosPesquisaPage } from './pages/ArtigosPesquisaPage';
import { ProjetosConservacaoPage } from './pages/ProjetosConservacaoPage';
import { MateriaisEducacionaisPage } from './pages/MateriaisEducacionaisPage';
import { GaleriaFotosPage } from './pages/GaleriaFotosPage';
import { VoluntarioPage } from './pages/VoluntarioPage';
import { ConscientizacaoPage } from './pages/ConscientizacaoPage';
import { ContatoPage } from './pages/ContatoPage';
import { Footer } from './components/Footer';
export function App() {
  return <Router>
      <div className="w-full min-h-screen bg-[#0b1c0f] text-white font-sans overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doar" element={<DoacaoPage />} />
          <Route path="/doacao-mensal" element={<DoacaoMensalPage />} />
          <Route path="/artigos-pesquisa" element={<ArtigosPesquisaPage />} />
          <Route path="/projetos-conservacao" element={<ProjetosConservacaoPage />} />
          <Route path="/materiais-educacionais" element={<MateriaisEducacionaisPage />} />
          <Route path="/galeria-fotos" element={<GaleriaFotosPage />} />
          <Route path="/voluntario" element={<VoluntarioPage />} />
          <Route path="/conscientizacao" element={<ConscientizacaoPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>;
}