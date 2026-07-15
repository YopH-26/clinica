import Calendario from '../componets/Calendario';
import EspecialidadSelect from '../componets/EspecialidadSelect';
import Footer from '../componets/Footer';
import Header from '../componets/Header';

const Solicitud = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center px-4">
        <div className="w-20 h-20">
          <img src="/img/logo.jpg" alt="logo" />
        </div>
        <h2 className="uppercase text-xl font-bold text-teal-950">
          Solicitud de cita
        </h2>
        <form className="flex flex-col items-center border w-full rounded-2xl shadow-md shadow-gray-300 bg-white px-4 py-6 mt-2 max-w-4xl">
          <div className="w-full md:flex md:gap-20 md:justify-between md:px-10">
            <div className="w-full">
              <label htmlFor="nombre" className="font-semibold text-lg mb-2">
                Datos Personales
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Nombre y Apellidos"
                className="border border-teal-950 rounded-md mb-2 p-1 w-full focus:outline-none"
              />
              <input
                type="email"
                id=""
                placeholder="Correo Electrónico"
                className="border border-teal-950 rounded-md mb-2 p-1 w-full focus:outline-none"
              />
              <input
                type="number"
                id=""
                placeholder="Teléfono"
                className="border border-teal-950 rounded-md mb-2 p-1 w-full focus:outline-none"
              />
              <label
                htmlFor="especialidad"
                className="font-semibold text-lg mb-2 mt-2"
              >
                Especialidad o Servicio
              </label>
              <EspecialidadSelect/>
              <label
                htmlFor="motivo"
                className="font-semibold text-lg mb-2 mt-2"
              >
                Motivo de la Cita
              </label>
              <textarea
                name=""
                id="motivo"
                placeholder="Decriba lo que le sucede ..."
                className="border border-teal-950 rounded-md mb-2 p-1 w-full focus:outline-none h-24 resize-none"
              ></textarea>
            </div>
            <div className="flex flex-col items-center">
              <label
                htmlFor=""
                className="font-semibold text-lg mb-2 mt-2 lg:mt-0"
              >
                Fecha Preferida
              </label>
              <Calendario />
            </div>
          </div>
          <button className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase mt-10 hover:scale-105 transition-all">
            Solicitar Cita
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Solicitud;
