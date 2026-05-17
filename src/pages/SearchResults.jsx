import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError(false);
      fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then((res) => {
          if (!res.ok) throw new Error();
          return res.json();
        })
        .then((data) => {
          setCharacters(data.results || []);
          setLoading(false);
        })
        .catch(() => {
          setCharacters([]);
          setError(true);
          setLoading(false);
        });
    }
  }, [query]);

  if (loading) {
    return (
      <div className="text-center text-xl mt-12 animate-pulse text-green-400">
        Buscando en el multiverso...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-gray-400 text-xl mt-10 bg-gray-800 p-6 rounded-xl max-w-lg mx-auto border border-gray-700">
        ⚠️ No se encontró ningún personaje con el nombre "{query}"
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-green-400 mb-6 tracking-wide text-center sm:text-left">
        Resultados para: "{query}"
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;