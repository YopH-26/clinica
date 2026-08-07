import React from 'react';

const SolicitudAceptada = ({abrirDetalles, abrirPlanificar, abrirEliminar}) => {
  return (
    <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] mb-3 border-b border-teal-400 w-full">
      <p className="text-lg">Juan García Gómez</p>
      <p className="text-lg hidden md:block">8/6/2026</p>

      <div className="flex gap-x-2 items-center">
        <button
          type="button"
          aria-label="Ver cita planificada"
          className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
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
            className="text-blue-600"
            onClick={abrirDetalles}
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Editar cita planificada"
          className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-lg"
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
            onClick={abrirPlanificar}
            className="text-green-600"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Cancelar cita planificada"
          onClick={abrirEliminar}
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
          >
            <path d="M3 6h18" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </button>

        <input
          type="checkbox"
          aria-label="Marcar como atendida"
          className="appearance-none w-4 h-4 rounded-full border-teal-600 border focus:ring-teal-500 checked:bg-teal-600 transition ml-3"
        />
      </div>
    </div>
  );
};

export default SolicitudAceptada;
