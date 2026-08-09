import ReactDOM from "react-dom";

//Propósito: Mostrar información ampliada de los doctores

const DetallesDoctores = ({doctor, cerrarDetalles}) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="presentation"
      aria-hidden="false"
    >
      {/* Backdrop semitransparente */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Panel del modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Detalles del doctor"
        className="relative z-10 w-5/6 max-w-xl mx-4 md:mx-0 bg-[rgb(243,248,252)] p-2 rounded-lg shadow-md flex flex-col md:px-6"
      >
        {/* Header */}
        <header className="flex items-center mb-2">
          <div className="w-12 h-12 flex-shrink-0">
            <img
              src="/img/logo.jpg"
              alt="Logotipo de la clínica"
              className="w-full h-full object-cover rounded"
            />
          </div>

          <h2 className="uppercase text-xl font-bold text-teal-950 ml-3">
            Detalles del doctor
          </h2>
        </header>

        {/* Contenido */}
        <div className="p-3">
          <section className="md:flex md:justify-between md:gap-6">
            <div className="flex-1">
              <p className="font-bold text-xl">Nombre</p>
              <p className="text-lg mb-1">{doctor.nombreDoctor}</p>
              <p className="font-bold text-xl">Correo</p>
              <p className="text-lg mb-1">{doctor.correoDoctor}</p>
              <p className="font-bold text-xl">Teléfono</p>
              <p className="text-lg mb-1">{doctor.telefonoDoctor}</p>
            </div>

            <div className="flex-1 md:mt-0 max-w-[11rem]">
              <p className="font-bold text-xl">Usuario</p>
              <p className="text-lg mb-1">use_1</p>
              <p className="font-bold text-xl lg:hidden">Público</p>
              <div className="items-center cursor-pointer w-9 lg:hidden">
                <label
                  className="flex items-center"
                  aria-label="Visibilidad pública del doctor"
                >
                  <input
                    type="checkbox"
                    aria-checked="true"
                    className="sr-only"
                    aria-label="Mostrar doctor públicamente"
                    defaultChecked
                  />
                  <div className="w-9 h-5 bg-gray-300 rounded-full transition-colors">
                    <div className="w-4 h-4 bg-white rounded-full shadow transform transition-transform translate-x-4 translate-y-0.5" />
                  </div>
                </label>
              </div>
            </div>
          </section>

          {/* Acciones */}
          <div className="flex justify-around my-2">
            <button
              type="button"
              onClick={cerrarDetalles}
              className="border-2 border-red-600 rounded-full text-red-600 font-semibold px-3 py-1 uppercase hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800"
            >
              Atrás
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default DetallesDoctores;

