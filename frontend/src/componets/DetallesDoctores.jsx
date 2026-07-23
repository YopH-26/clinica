import ReactDOM from 'react-dom';

const DetallesDoctores = () => {
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-[rgb(243,248,252)] p-2 rounded-lg shadow-md flex flex-col m-4 md:px-6 w-5/6 max-w-xl">
          <div className="flex items-center mb-2">
            <div className="w-12 h-12">
              <img src="/img/logo.jpg" alt="logo" />
            </div>
            <h2 className="uppercase text-xl font-bold text-teal-950">
              Detalles del doctor
            </h2>
          </div>
          <div className="md:flex md:justify-between">
            <div className="flex-1">
              <h3 className="font-bold text-xl">Nombre</h3>
              <h4 className="text-lg mb-1">Emeregildo Fonseca Fonseca</h4>
              <h3 className="font-bold text-xl">Correo</h3>
              <h4 className="text-lg mb-1">correo@correo.com</h4>
              <h3 className="font-bold text-xl">Teléfono</h3>
              <h4 className="text-lg mb-1">+53 55555555</h4>
            </div>
            <div className="flex-1 max-w-44">
              <h3 className="font-bold text-xl">Especialidad</h3>
              <h4 className="text-lg mb-1">Cardiología</h4>
              <h3 className="font-bold text-xl">Usuario</h3>
              <h4 className="text-lg mb-1">use_1</h4>
            </div>
          </div>
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

export default DetallesDoctores;
