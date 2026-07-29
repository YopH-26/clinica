import ReactDOM from 'react-dom';
import Calendario from '../componets/Calendario';
import EspecialidadSelect from '../componets/EspecialidadSelect';

const Planificar = () => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="presentation"
      aria-hidden="false"
    >
      {/* Backdrop semitransparente */}
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
      />

      {/* Panel del modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Planificación de cita"
        className="relative z-10 w-full max-w-4xl mx-4 bg-[rgb(243,248,252)] px-2 rounded-lg shadow-md flex flex-col md:px-6"
      >
        {/* Header */}
        <header className="flex items-center px-3 pt-1">
          <div className="w-10 h-10 flex-shrink-0">
            <img
              src="/img/logo.jpg"
              alt="Logotipo de la clínica"
              className="w-full h-full object-cover rounded"
            />
          </div>

          <h2 className="uppercase text-xl font-bold text-teal-950 ml-3">
            Planificación de cita
          </h2>
        </header>

        {/* Formulario */}
        <form
          className="flex flex-col items-center w-full"
        >
          <div className="w-full md:flex md:gap-20 md:justify-between md:px-10">
            <div className="w-full">
              <label htmlFor="nombre" className="font-semibold text-lg">
                Datos del paciente
              </label>

              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre completo"
                autoComplete="name"
                className="border border-teal-950 rounded-md mb-1 px-2 py-1 w-full focus:outline-none"
                required
              />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="correo@ejemplo.com"
                autoComplete="email"
                className="border border-teal-950 rounded-md mb-1 px-2 py-1 w-full focus:outline-none"
                required
              />

              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="+53 5xxxx xxxx"
                autoComplete="tel"
                className="border border-teal-950 rounded-md mb-1 px-2 py-1 w-full focus:outline-none"
              />

              <label
                htmlFor="especialidad"
                className="font-semibold text-lg block"
              >
                Especialidad o Servicio
              </label>
              <EspecialidadSelect id="especialidad" name="especialidad" />

              <label
                htmlFor="motivo"
                className="font-semibold text-lg block"
              >
                Motivo de la Cita
              </label>
              <textarea
                name="motivo"
                id="motivo"
                placeholder="Describe brevemente el motivo"
                className="border border-teal-950 rounded-md px-2 w-full focus:outline-none h-10 md:h-12 resize-none"
              />

              <label
                htmlFor="nota"
                className="font-semibold text-lg block"
              >
                Anotación
              </label>
              <textarea
                name="nota"
                id="nota"
                placeholder="Notas internas (opcional)"
                className="border border-teal-950 rounded-md px-2 w-full focus:outline-none h-10 md:h-12 resize-none"
              />
            </div>

            <div className="flex flex-col items-center">
              <label
                htmlFor="fecha"
                className="font-semibold text-lg"
              >
                Fecha de la cita
              </label>

              <div id="fecha" className="mt-2">
                <Calendario />
              </div>
            </div>
          </div>

          {/* Acciones */}
          <div className="flex justify-around my-2 w-full px-6">
            <button
              type="button"
              className="border-2 border-red-600 rounded-full text-red-600 font-semibold px-3 py-1 uppercase hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800"
            >
              Atrás
            </button>

            <button
              type="submit"
              className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
            >
              Planificar
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default Planificar;
