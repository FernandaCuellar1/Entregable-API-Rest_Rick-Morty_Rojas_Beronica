import { useState } from 'react';
import CharacterModal from './CharacterModal';

function CharacterCard({ character }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const translateStatus = (status) => {
    if (status === 'Alive') return 'Vivo';
    if (status === 'Dead') return 'Muerto';
    return 'Desconocido';
  };

  const translateGender = (gender) => {
    if (gender === 'Male') return 'Masculino';
    if (gender === 'Female') return 'Femenino';
    if (gender === 'Genderless') return 'Sin género';
    return 'Desconocido';
  };

  const formatText = (text) => {
    if (!text || text.toLowerCase() === 'unknown') return 'Desconocido';
    if (text === 'Human') return 'Humano';
    if (text === 'Alien') return 'Alien';
    if (text === 'Humanoid') return 'Humanoide';
    if (text === 'Robot') return 'Robot';
    if (text === 'Mythological Creature') return 'Criatura Mitológica';
    return text;
  };

  const statusColor = 
    character.status === 'Alive' 
      ? 'bg-green-500' 
      : character.status === 'Dead' 
        ? 'bg-red-500' 
        : 'bg-gray-500';

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="relative pt-16 group cursor-pointer z-10 hover:z-30"
      >
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 group-hover:shadow-green-500/20 group-hover:border-green-800">
          
          <div className="p-4 pt-24">
            <h3 className="text-xl font-bold text-white truncate mb-1 text-center sm:text-left transition-colors duration-300 group-hover:text-green-400 group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]">
              {character.name}
            </h3>
            
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3">
              <span className={`h-2.5 w-2.5 rounded-full ${statusColor}`}></span>
              <span className="text-sm text-gray-300 font-medium">
                {translateStatus(character.status)} - {formatText(character.species)}
              </span>
            </div>

            <div className="border-t border-gray-700 pt-2 text-sm text-gray-400 space-y-1">
              <p>
                <span className="font-semibold text-gray-500">Género:</span> {translateGender(character.gender)}
              </p>
              <p className="truncate mb-4">
                <span className="font-semibold text-gray-500">Origen:</span> {formatText(character.origin?.name)}
              </p>
            </div>

            {/* BOTÓN VISUAL QUE CUMPLE EL REQUERIMIENTO DE DETALLE INDIVIDUAL */}
            <div className="mt-4 border-t border-gray-700/50 pt-3">
              <button
                type="button"
                className="w-full text-center bg-gray-700 hover:bg-green-600 text-white text-xs font-bold py-2 px-4 rounded-lg transition-all duration-200 shadow-md group-hover:bg-green-600"
              >
                Ver Información Detallada
              </button>
            </div>

          </div>
        </div>

        <img 
          src={character.image} 
          alt={character.name} 
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-4 border-gray-900 shadow-2xl transition-all duration-300 transform group-hover:-translate-y-12 group-hover:scale-105 group-hover:border-green-500 object-cover"
        />
      </div>

      {isModalOpen && (
        <CharacterModal 
          character={character} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
}

export default CharacterCard;