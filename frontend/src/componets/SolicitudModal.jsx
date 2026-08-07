import ReactDOM from "react-dom";

const SolicitudModal = ({cerrarDetalles}) => {
  return ReactDOM.createPortal(
    // Backdrop + panel
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
        aria-label="Detalles de la solicitud"
        className="relative z-10 w-full max-w-xl mx-4 md:mx-0 bg-[rgb(243,248,252)] rounded-lg shadow-md overflow-hipen py-2"
      >
        {/* Header del modal */}
        <header className="flex items-center gap-1 pl-2">
          <div className="w-12 h-12 flex-shrink-0">
            <img
              src="/img/logo.jpg"
              alt="Logotipo de la clínica"
              className="w-full h-full object-cover rounded"
            />
          </div>

          <h2 className="uppercase text-xl font-bold text-teal-950">
            Detalles de la solicitud
          </h2>
        </header>

        {/* Contenido principal */}
        <div className="px-4 pt-2 md:p-6">
          <section className="md:flex md:justify-between md:gap-6">
            <div className="flex-1">
                <p className="font-bold text-lg">Paciente</p>
                <p className="text-lg">Emeregildo Fonseca Fonseca</p>
                <p className="font-bold text-lg">Correo</p>
                <p className="text-lg">correo@correo.com</p>
                <p className="font-bold text-lg">Teléfono</p>
                <p className="text-lg">+53 55555555</p>
            </div>

            <div className="flex-1 md:mt-0">
                <p className="font-bold text-lg">Fecha de solicitud</p>
                <p className="text-lg">12/5/2026</p>
                <p className="font-bold text-lg">Fecha preferida</p>
                <p className="text-lg">1/6/2026</p>
                <p className="font-bold text-lg">Especialidad</p>
                <p className="text-lg">Cardiología</p>
            </div>
          </section>

          <section>
            <h3 className="font-bold text-xl mb-2">Motivo</h3>
            <div className="w-full h-20 lg:h-28 overflow-auto border border-teal-700 rounded-lg px-3 py-2 bg-white">
              <p className="text-lg leading-relaxed">
                Se me entristece el alma y se me acongoja el corazón cada vez que
                en la corriente pienso. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Architecto dolorem illo eum ea velit quod libero
                fugit. Praesentium, saepe. Quisquam labore illo ad incidunt
                assumenda atque debitis consequatur deleniti nihil?
              </p>
            </div>
          </section>

          {/* Historial de citas */}
          <section>
            <h3 className="font-bold text-xl mx-1">Historial de citas</h3>
            <ul className="list-none">
              <li className="text-lg">1/5/2026 - Urólogo</li>
              <li className="text-lg">1/5/2026 - Psiquiatra</li>
            </ul>
          </section>

          {/* Acciones */}
          <footer className="flex justify-around gap-4 mt-2">
            <button
              type="button"
              onClick={cerrarDetalles}
              className="border-2 border-red-600 rounded-full text-red-600 font-semibold px-3 py-1 uppercase hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800"
              // implementar
            >
              Atrás
            </button>

            <button
              type="button"
              className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
              // implementar acción
            >
              Planificar
            </button>
          </footer>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SolicitudModal;

