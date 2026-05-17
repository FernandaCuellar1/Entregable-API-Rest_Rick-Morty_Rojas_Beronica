import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllCharacters from './pages/AllCharacters';
import FilterSpecies from './pages/FilterSpecies';
import SearchResults from './pages/SearchResults';
import CharacterDetail from './pages/CharacterDetail';

// 1. DEFINIMOS EL COMPONENTE DE ERROR PARA CUMPLIR CON EL REQUERIMIENTO (ERROR PAGE)
const NotFound = () => (
  <div className="text-center py-16 bg-gray-800 rounded-xl p-8 max-w-md mx-auto shadow-2xl border border-gray-700 space-y-4 my-12 mx-4 sm:mx-auto">
    <h1 className="text-8xl font-black text-green-500 tracking-widest animate-bounce">404</h1>
    <div className="bg-green-500/10 border border-green-500/30 px-3 py-1 rounded-md text-green-400 font-mono text-xs inline-block">
      Error: Dimensión Desconocida
    </div>
    <h2 className="text-xl font-bold text-gray-200">¡Wubba Lubba Dub Dub!</h2>
    <p className="text-sm text-gray-400">
      El portal interdimensional te ha dejado en un lugar de la Ciudadela que no existe en esta realidad.
    </p>
    <Link to="/" className="inline-block bg-green-600 hover:bg-green-700 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-green-600/20 transform hover:scale-105">
      Volver al Inicio
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col font-sans overflow-x-hidden">
        {/* Tu barra de navegación responsiva y con deselección automática */}
        <Navbar />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            {/* Rutas principales de la aplicación */}
            <Route path="/" element={<AllCharacters />} />
            <Route path="/species/:speciesName" element={<FilterSpecies />} />
            <Route path="/search" element={<SearchResults />} />
            
            {/* Ruta para el requerimiento opcional de Detalle Individual */}
            <Route path="/character/:id" element={<CharacterDetail />} />
            
            {/* Captura cualquier enlace roto o inexistente (Manejo de errores básico) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-800 text-center py-4 text-xs text-gray-500 border-t border-gray-700 w-full">
          Entregable API Rest Rick & Morty © {new Date().getFullYear()}
        </footer>
      </div>
    </Router>
  );
}

export default App;