import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';

function FilterSpecies() {
  const { speciesName } = useParams();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({ next: null, prev: null });
  const [currentPageUrl, setCurrentPageUrl] = useState('');

  const formatTitle = (slug) => {
    if (slug === 'mythological-creature') return 'Criatura Mitológica';
    if (slug === 'human') return 'Humanos';
    if (slug === 'alien') return 'Aliens';
    if (slug === 'robot') return 'Robots';
    return slug;
  };

  useEffect(() => {
    let apiParam = speciesName;
    if (speciesName === 'mythological-creature') {
      apiParam = 'Mythological Creature';
    }
    setCurrentPageUrl(`https://rickandmortyapi.com/api/character/?species=${apiParam}`);
  }, [speciesName]);

  useEffect(() => {
    if (!currentPageUrl) return;
    
    setLoading(true);
    fetch(currentPageUrl)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results || []);
        setPageInfo({ next: data.info?.next, prev: data.info?.prev });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setCharacters([]);
        setPageInfo({ next: null, prev: null });
        setLoading(false);
      });
  }, [currentPageUrl]);

  if (loading) {
    return (
      <div className="text-center text-xl mt-12 animate-pulse text-green-400">
        Escaneando firmas biológicas de tipo: {formatTitle(speciesName)}...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-extrabold text-green-400 tracking-wide text-center sm:text-left">
        Especie: {formatTitle(speciesName)}
      </h2>
      
      {characters.length === 0 ? (
        <div className="text-center py-20 bg-gray-900 rounded-xl border border-gray-800 p-8">
          <p className="text-xl font-bold text-gray-400">No se encontraron personajes de esta especie.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center space-x-4 pt-8">
        <button
          onClick={() => pageInfo.prev && setCurrentPageUrl(pageInfo.prev)}
          disabled={!pageInfo.prev}
          className="px-5 py-2.5 bg-gray-800 text-white font-bold rounded-xl border border-gray-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:hover:bg-gray-800 hover:bg-gray-700 hover:border-green-500"
        >
          Anterior
        </button>
        <button
          onClick={() => pageInfo.next && setCurrentPageUrl(pageInfo.next)}
          disabled={!pageInfo.next}
          className="px-5 py-2.5 bg-green-600 text-white font-bold rounded-xl shadow-md shadow-green-600/20 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:hover:bg-green-600 hover:bg-green-700"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default FilterSpecies;