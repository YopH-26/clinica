import ReactDOM from 'react-dom';
import Calendario from '../componets/Calendario';
import EspecialidadSelect from '../componets/EspecialidadSelect';

const Planificar = () => {
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-[rgb(243,248,252)] p-2 rounded-lg shadow-md flex flex-col m-4 md:px-6 max-w-4xl">
          <div className="flex items-center mb-1">
            <div className="w-10 h-10">
              <img src="/img/logo.jpg" alt="logo" />
            </div>
            <h2 className="uppercase text-xl font-bold text-teal-950">
              Planificación de cita
            </h2>
          </div>
          <form className="flex flex-col items-center">
            <div className="w-full md:flex md:gap-20 md:justify-between md:px-10">
              <div className="w-full">
                <label htmlFor="nombre" className="font-semibold text-lg">
                  Datos del paciente
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="border border-teal-950 rounded-md mb-0.5 px-1 py-0.5 w-full focus:outline-none"
                />
                <input
                  type="email"
                  id=""
                  className="border border-teal-950 rounded-md mb-0.5 px-1 py-0.5 w-full focus:outline-none"
                />
                <input
                  type="number"
                  id=""
                  className="border border-teal-950 rounded-md mb-0.5 px-1 py-0.5 w-full focus:outline-none"
                />
                <label
                  htmlFor="especialidad"
                  className="font-semibold text-lg mt-2"
                >
                  Especialidad o Servicio
                </label>
                <EspecialidadSelect />
                <label htmlFor="motivo" className="font-semibold text-lg mt-2">
                  Motivo de la Cita
                </label>
                <textarea
                  name=""
                  id="motivo"
                  className="border border-teal-950 rounded-md px-1 w-full focus:outline-none h-8 md:h-14 resize-none"
                ></textarea>
                <label htmlFor="nota" className="font-semibold text-lg mt-2">
                  Anotación
                </label>
                <textarea
                  name=""
                  id="nota"
                  className="border border-teal-950 rounded-md px-1 w-full focus:outline-none h-8 md:h-14 resize-none"
                ></textarea>
              </div>
              <div className="flex flex-col items-center">
                <label
                  htmlFor=""
                  className="font-semibold text-lg mt-2 lg:mt-0"
                >
                  Fecha de la cita
                </label>
                <Calendario />
              </div>
            </div>
          </form>
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

export default Planificar;
