import ReactDOM from 'react-dom';

const AgregarDoctor = () => {
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-[rgb(243,248,252)] p-2 rounded-lg shadow-md flex flex-col m-4 md:px-6 w-5/6 max-w-xl">
          <div className="flex items-center mb-2">
            <div className="w-12 h-12">
              <img src="/img/logo.jpg" alt="logo" />
            </div>
            <h2 className="uppercase text-xl font-bold text-teal-950">
              Agregar doctor
            </h2>
          </div>
          <div className="md:flex">
            <div className="md:flex-1">
              <h3 className="font-bold text-xl">Nombre</h3>
              <input
                type="text"
                className="border border-gray-400 rounded-md outline-none px-2 py-1 w-5/6 mb-2"
              />
              <h3 className="font-bold text-xl">Correo</h3>
              <input
                type="email"
                className="border border-gray-400 rounded-md outline-none px-2 py-1 w-5/6 mb-2"
              />
              <h3 className="font-bold text-xl">Teléfono</h3>
              <input
                type="number"
                className="border border-gray-400 rounded-md outline-none px-2 py-1 w-5/6 mb-2"
              />
            </div>
            <div className="md:flex-1">
              <h3 className="font-bold text-xl">Especialidad</h3>
              <input
                type="text"
                className="border border-gray-400 rounded-md outline-none px-2 py-1 w-5/6 mb-2"
              />
              <h3 className="font-bold text-xl">Usuario</h3>
              <h4 className="text-lg mb-2">user_1</h4>
              <h3 className="font-bold text-xl">Contraseña</h3>
              <h4 className="text-lg mb-2">0000 por defecto (deja de ser esta al primer cambio)</h4>
            </div>
          </div>
          <div className="flex justify-around my-2">
            <button className="border-2 border-red-600 rounded-full text-red-600 font-semibold px-3 py-1 uppercase hover:scale-105 transition-all">
              Atrás
            </button>
            <button className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-all">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
};

export default AgregarDoctor;
