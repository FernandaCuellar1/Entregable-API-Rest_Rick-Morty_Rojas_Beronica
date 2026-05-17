import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setSearchQuery('');
    }, [location]);

    const getActiveButton = () => {
        if (location.pathname === '/') {
            if (location.search === '' && searchQuery === '') return 'all';
            return '';
        }
        if (location.pathname.startsWith('/species/')) {
            return location.pathname.split('/species/')[1];
        }
        return '';
    };

    const activeFilter = getActiveButton();

    const handleNavigation = (targetPath) => {
        setSearchQuery('');
        
        const currentPathWithSearch = location.pathname + location.search;
        
        if (currentPathWithSearch === targetPath) {
            navigate('/');
        } else {
            navigate(targetPath);
        }
    };

    const handleLogoClick = () => {
        setSearchQuery('');
        if (location.pathname === '/') {
            window.location.href = '/';
        } else {
            navigate('/');
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${searchQuery.trim()}`);
        }
    };

    const getButtonClass = (buttonKey) => {
        const baseClass = "px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 text-center transform hover:scale-105 focus:outline-none";
        const isActive = activeFilter === buttonKey;
        
        return `${baseClass} ${isActive
            ? 'bg-green-600 text-white shadow-md shadow-green-600/20'
            : 'text-gray-300 bg-gray-900/30 sm:bg-transparent hover:bg-gray-700 hover:text-white'
        }`;
    };

    return (
        <nav className="bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-700 w-full">
            <div className="container mx-auto px-4 py-3 sm:py-0 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between sm:h-16 gap-4">

                    <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
                        <button 
                            onClick={handleLogoClick} 
                            className="flex items-center space-x-3 group focus:outline-none"
                        >
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-400 transition-transform duration-300 group-hover:rotate-12">
                                <img
                                    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                                    alt="Rick Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xl font-black text-green-400 tracking-wider transition-transform duration-200 transform group-hover:scale-105">
                                Rick & Morty SPA
                            </span>
                        </button>
                    </div>

                    <form onSubmit={handleSearch} className="w-full sm:flex-1 max-w-md">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Buscar personaje..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-gray-900 text-white pl-4 pr-10 py-2 rounded-xl border border-gray-700 focus:outline-none focus:border-green-500 transition-colors text-sm"
                            />
                            <button
                                type="submit"
                                className="absolute right-2.5 top-2.5 text-gray-400 hover:text-green-400 transition-colors"
                                aria-label="Buscar"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </form>

                    <div className="grid grid-cols-2 gap-2 w-full sm:flex sm:w-auto sm:space-x-1 md:space-x-2">
                        <button onClick={() => handleNavigation('/')} className={getButtonClass('all')}>
                            Inicio
                        </button>
                        <button onClick={() => handleNavigation('/species/human')} className={getButtonClass('human')}>
                            Humanos
                        </button>
                        <button onClick={() => handleNavigation('/species/alien')} className={getButtonClass('alien')}>
                            Aliens
                        </button>
                        <button onClick={() => handleNavigation('/species/robot')} className={getButtonClass('robot')}>
                            Robots
                        </button>
                        <button 
                            onClick={() => handleNavigation('/species/mythological-creature')} 
                            className={`${getButtonClass('mythological-creature')} col-span-2 sm:col-span-1`}
                        >
                            Criaturas Mitológicas
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;