import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando detalle:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-xl font-bold text-green-400 animate-pulse">
          Escaneando registros interdimensionales...
        </p>
      </div>
    );
  }

  if (!character || character.error) {
    return (
      <div className="text-center py-20 space-y-4">
        <p className="text-xl font-bold text-red-500">Sujeto no identificado en esta realidad.</p>
        <button onClick={() => navigate('/')} className="bg-green-600 px-4 py-2 rounded-xl text-sm font-bold">
          Volver al Inicio
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-8 p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center space-x-2 text-sm font-medium text-gray-400 hover:text-green-400 transition-colors focus:outline-none"
      >
        <span>← Regresar</span>
      </button>

      <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl md:flex">
        <div className="md:w-1/2 h-80 md:h-auto relative">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono border border-gray-700">
            ID: #{character.id}
          </div>
        </div>

        <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-3xl font-black text-green-400 mb-2 tracking-wide">
              {character.name}
            </h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400 font-medium">
              <span className={`w-2.5 h-2.5 rounded-full ${
                character.status === 'Alive' ? 'bg-green-500' : character.status === 'Dead' ? 'bg-red-500' : 'bg-gray-500'
              }`} />
              <span>
                {character.status === 'Alive' ? 'Vivo' : character.status === 'Dead' ? 'Muerto' : 'Desconocido'}
              </span>
              <span>•</span>
              <span>{character.species}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-b border-gray-700/50 py-4 font-sans text-sm">
            <div>
              <span className="text-xs text-gray-500 block uppercase tracking-wider font-bold">Género</span>
              <span className="text-gray-200 text-base">
                {character.gender === 'Male' ? 'Masculino' : character.gender === 'Female' ? 'Femenino' : character.gender === 'Genderless' ? 'Sin Género' : 'Desconocido'}
              </span>
            </div>
            <div>
              <span className="text-xs text-gray-500 block uppercase tracking-wider font-bold">Origen</span>
              <span className="text-gray-200 text-base">{character.origin?.name || 'Desconocido'}</span>
            </div>
            <div>
              <span className="text-xs text-gray-500 block uppercase tracking-wider font-bold">Ubicación Actual</span>
              <span className="text-gray-200 text-base">{character.location?.name || 'Desconocido'}</span>
            </div>
            <div>
              <span className="text-xs text-gray-500 block uppercase tracking-wider font-bold">Cantidad de Episodios</span>
              <span className="text-green-400 font-mono text-base font-bold">{character.episode?.length || 0}</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 font-mono">
            Registrado: {new Date(character.created).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;