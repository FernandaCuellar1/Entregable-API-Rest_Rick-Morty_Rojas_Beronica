function CharacterModal({ character, onClose }) {
  if (!character) return null;

  const statusColor = 
    character.status === 'Alive' 
      ? 'bg-green-500' 
      : character.status === 'Dead' 
        ? 'bg-red-500' 
        : 'bg-gray-500';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden transform transition-all scale-100 p-6 space-y-6">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-700/50 hover:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors text-xl font-bold"
        >
          &times;
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img 
            src={character.image} 
            alt={character.name} 
            className="w-32 h-32 rounded-full border-4 border-green-500 shadow-lg object-cover"
          />
          <div className="text-center sm:text-left space-y-2">
            <span className="px-3 py-1 bg-gray-900 text-green-400 text-xs font-mono rounded-full border border-green-500/30">
              ID: #{character.id}
            </span>
            <h2 className="text-2xl font-black text-white tracking-wide">
              {character.name}
            </h2>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <span className={`h-2.5 w-2.5 rounded-full ${statusColor}`}></span>
              <span className="text-sm text-gray-300 font-medium">
                {character.status} - {character.species}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-700 text-sm text-gray-300">
          <div className="bg-gray-900/50 p-3 rounded-xl border border-gray-700/50">
            <span className="text-xs text-gray-500 block font-semibold mb-1">GÉNERO:</span>
            <p className="font-medium">{character.gender}</p>
          </div>
          <div className="bg-gray-900/50 p-3 rounded-xl border border-gray-700/50">
            <span className="text-xs text-gray-500 block font-semibold mb-1">APARICIONES:</span>
            <p className="font-medium">{character.episode?.length} episodios</p>
          </div>
          <div className="bg-gray-900/50 p-3 rounded-xl border border-gray-700/50 sm:col-span-2">
            <span className="text-xs text-gray-500 block font-semibold mb-1">ORIGEN:</span>
            <p className="font-medium truncate">{character.origin?.name}</p>
          </div>
          <div className="bg-gray-900/50 p-3 rounded-xl border border-gray-700/50 sm:col-span-2">
            <span className="text-xs text-gray-500 block font-semibold mb-1">ÚLTIMA UBICACIÓN CONOCIDA:</span>
            <p className="font-medium truncate">{character.location?.name}</p>
          </div>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg shadow-green-600/20 transition-all text-sm"
          >
            Cerrar Portal
          </button>
        </div>

      </div>
    </div>
  );
}

export default CharacterModal;