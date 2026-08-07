
const Doctor = ({agregar, abrirDetalles, abrirEliminar}) => {

  return (
    <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] lg:grid-cols-[2fr_2fr_2fr_1fr_1fr] mb-3 border-b border-teal-400 w-full items-center">
      <p className="text-lg">Juan García Gómez</p>
      <p className="text-lg hidden lg:block">user_1</p>
      <p className="text-lg hidden md:block">Cardiología</p>

      <div className="items-center cursor-pointer hidden w-9 lg:flex focus-within:ring-2 focus-within:ring-gray-800 rounded-full">
        <label
          className="flex items-center"
          aria-label="Visibilidad pública del doctor"
        >
          <input
            type="checkbox"
            aria-checked="false"
            className="sr-only"
            aria-label="Mostrar doctor públicamente"
          />
          <div className="w-9 h-5 bg-gray-300 rounded-full transition-colors ">
            <div className="w-4 h-4 bg-white rounded-full shadow transform transition-transform translate-x-0.5 translate-y-0.5" />
          </div>
        </label>
      </div>

      <div className="flex gap-x-2">
        <button
          type="button"
          aria-label="Ver detalles del doctor"
          className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
            onClick={abrirDetalles}
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>

        <button
          type="button"
          onClick={agregar}
          aria-label="Editar doctor"
          className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Eliminar doctor"
          className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-600"
            onClick={abrirEliminar}
          >
            <path d="M3 6h18" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Doctor;
