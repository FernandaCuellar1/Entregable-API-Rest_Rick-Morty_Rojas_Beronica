import { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';

function AllCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiUrl, setApiUrl] = useState('https://rickandmortyapi.com/api/character');
  const [pageInfo, setPageInfo] = useState({ next: null, prev: null });

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results || []);
        setPageInfo({ next: data.info?.next, prev: data.info?.prev });
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [apiUrl]);

  if (loading) {
    return (
      <div className="text-center text-xl mt-12 animate-pulse text-green-400">
        Abriendo portal interdimensional...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-extrabold text-green-400 tracking-wide text-center sm:text-left">
        Todos los Personajes
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      <div className="flex justify-center items-center space-x-4 pt-8">
        <button
          onClick={() => pageInfo.prev && setApiUrl(pageInfo.prev)}
          disabled={!pageInfo.prev}
          className="px-5 py-2.5 bg-gray-800 text-white font-bold rounded-xl border border-gray-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:hover:bg-gray-800 hover:bg-gray-700 hover:border-green-500"
        >
          Anterior
        </button>
        <button
          onClick={() => pageInfo.next && setApiUrl(pageInfo.next)}
          disabled={!pageInfo.next}
          className="px-5 py-2.5 bg-green-600 text-white font-bold rounded-xl shadow-md shadow-green-600/20 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:hover:bg-green-600 hover:bg-green-700"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default AllCharacters;