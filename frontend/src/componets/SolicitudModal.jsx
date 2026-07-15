import ReactDOM from 'react-dom';

const SolicitudModal = () => {
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-[rgb(243,248,252)] p-2 rounded-lg shadow-md flex flex-col m-4 md:px-6 max-w-xl">
          <div className="flex items-center mb-2">
            <div className="w-12 h-12">
              <img src="/img/logo.jpg" alt="logo" />
            </div>
            <h2 className="uppercase text-xl font-bold text-teal-950">
              Detalles de la solicitud
            </h2>
          </div>
          <div className="md:flex md:justify-between">
            <div>
              <h3 className="font-bold text-xl">Paciente</h3>
              <h4 className="text-lg mb-1">Emeregildo Fonseca Fonseca</h4>
              <h3 className="font-bold text-xl">Correo</h3>
              <h4 className="text-lg mb-1">correo@correo.com</h4>
              <h3 className="font-bold text-xl">Teléfono</h3>
              <h4 className="text-lg mb-1">+53 55555555</h4>
            </div>
            <div>
              <h3 className="font-bold text-xl">Fecha de solicitud</h3>
              <h4 className="text-lg mb-1">12/5/2026</h4>
              <h3 className="font-bold text-xl">Fecha preferida</h3>
              <h4 className="text-lg mb-1">1/6/2026</h4>
              <h3 className="font-bold text-xl">Especialidad</h3>
              <h4 className="text-lg mb-1">Cardiología</h4>
            </div>
          </div>
          <h3 className="font-bold text-xl">Motivo</h3>
          <div className="w-full h-20 lg:h-28 overflow-auto border border-teal-700 rounded-lg px-2 py-1 bg-white mb-1">
            <h4 className="text-lg">
              Se me entristece el alma y se me acongoja el corazón cada vez que
              en la corriente pienso. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Architecto dolorem illo eum ea velit quod libero
              fugit. Praesentium, saepe. Quisquam labore illo ad incidunt
              assumenda atque debitis consequatur deleniti nihil?
            </h4>
          </div>
          <h3 className="font-bold text-xl">Historial de citas</h3>
          <h4 className="text-lg mb-1">1/5/2026 - Urólogo</h4>
          <h4 className="text-lg mb-1">1/5/2026 - Psiquiatra</h4>
          <div className="flex justify-around my-2">
            <button className="border-2 border-red-600 rounded-full text-red-600 font-semibold px-3 py-1 uppercase hover:scale-105 transition-all">
              Atrás
            </button>
            <button className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-all">
              Planificar
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
};

export default SolicitudModal;
