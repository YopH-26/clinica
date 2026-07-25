import Header from '../componets/Header';
import Footer from '../componets/Footer';
import GraficoModal from '../componets/GraficoModal';
import MenuModal from '../componets/MenuModal';

const Actividad = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header className=" flex-none" />
        <main className="flex-1 flex flex-col items-center justify-center p-2">
          <div className="w-28 h-28">
            <img src="/img/logo.jpg" alt="logo" />
          </div>
          <h2 className="uppercase text-xl font-bold text-teal-950">
            Actividad de los doctores
          </h2>
          <div className="flex flex-col items-center rounded-2xl shadow-md shadow-gray-300 bg-white px-4 py-6 w-full mt-6 md:px-10 max-w-4xl">
            <div className="w-full flex justify-between mb-10">
              <select
                name=""
                id=""
                className="border border-gray-300 rounded-lg px-1 outline-none"
              >
                <option value="dia">Día</option>
                <option value="semana">Semana</option>
                <option value="mes">Mes</option>
              </select>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="border-2 rounded-lg p-1 text-base focus:outline-none w-40 md:w-60"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-teal-500 text-white rounded-md"
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
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </form>
            </div>
            <div className="grid grid-cols-[3fr_2fr_1fr] md:grid-cols-[3fr_3fr_2fr_1fr] lg:grid-cols-[5fr_5fr_3fr_1fr] mb-3 border-b-2 border-teal-700 w-full">
              <h3 className="uppercase font-semibold text-lg">Nombre</h3>
              <h3 className="uppercase font-semibold text-lg hidden md:block">
                Especialidad
              </h3>
              <h3 className="uppercase font-semibold text-lg">Pacientes</h3>
              <h3 className="uppercase font-semibold text-lg hidden md:block">
                Acciones
              </h3>
            </div>

            {/* relleno */}
            <div className="grid grid-cols-[4fr_2fr_1fr] md:grid-cols-[3fr_3fr_2fr_1fr] lg:grid-cols-[5fr_5fr_3fr_1fr] mb-3 border-b border-teal-400 w-full">
              <p className="text-lg">Juan García Gómez</p>
              <p className="text-lg hidden md:block">Cardiología</p>
              <p className="text-lg ">6</p>
              <div className="flex gap-x-2">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-teal-700"
                  >
                    <polyline points="3,18 7,12 11,16 15,8 19,14 21,10" />
                    <line x1="3" y1="20" x2="21" y2="20" />
                  </svg>
                </button>
                <GraficoModal />
              </div>
            </div>
            <div className="grid grid-cols-[4fr_2fr_1fr] md:grid-cols-[3fr_3fr_2fr_1fr] lg:grid-cols-[5fr_5fr_3fr_1fr] mb-3 border-b border-teal-400 w-full">
              <p className="text-lg">Juan García Gómez</p>
              <p className="text-lg hidden md:block">Cardiología</p>
              <p className="text-lg ">6</p>
              <div className="flex gap-x-2">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-teal-700"
                  >
                    <polyline points="3,18 7,12 11,16 15,8 19,14 21,10" />
                    <line x1="3" y1="20" x2="21" y2="20" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer className=" flex-none" />
        <MenuModal />
      </div>
    </>
  );
};

export default Actividad;
