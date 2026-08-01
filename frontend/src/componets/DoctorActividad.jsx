import React from 'react'

const DoctorActividad = () => {
  return (
    <div className="grid grid-cols-[4fr_2fr_1fr] md:grid-cols-[3fr_3fr_2fr_1fr] lg:grid-cols-[5fr_5fr_3fr_1fr] mb-3 border-b border-teal-400 w-full items-center">
      <p className="text-lg">Juan García Gómez</p>
      <p className="text-lg hidden md:block">Cardiología</p>
      <p className="text-lg">6</p>

      <div>
        <button
          type="button"
          aria-label="Ver actividad del doctor"
          className="p-1 outline-none focus-visible:ring-2  focus-visible:ring-teal-600 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-teal-700"
            aria-hidden="true"
          >
            <polyline points="3,18 7,12 11,16 15,8 19,14 21,10" />
            <line x1="3" y1="20" x2="21" y2="20" />
          </svg>
        </button>

        {/* Abrir el gráfico */}
      </div>
    </div>
  );
}

export default DoctorActividad
