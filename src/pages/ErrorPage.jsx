import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="text-9xl font-black text-green-500 tracking-widest animate-bounce">
          404
        </h1>
        <div className="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-md text-green-400 font-mono text-sm inline-block">
          Error: Dimensión Desconocida
        </div>
        <h2 className="text-2xl font-bold text-gray-200">
          ¡Wubba Lubba Dub Dub!
        </h2>
        <p className="text-gray-400 text-sm">
          El portal interdimensional te ha dejado en un lugar que no existe en esta realidad.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-600/20 hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
        >
          Volver a la Ciudadela (Inicio)
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;