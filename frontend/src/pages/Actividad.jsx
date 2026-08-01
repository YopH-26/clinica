import Header from '../componets/Header';
import Footer from '../componets/Footer';
import GraficoModal from '../componets/GraficoModal';
import MenuModal from '../componets/MenuModal';
import DoctorActividad from '../componets/DoctorActividad';

//Propósito: Mostrar la cantidad de pacientes atendidos por los doctores (día/semana/mes).

const Actividad = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" />

      <main
        className="flex-1 flex flex-col items-center justify-center"
        aria-label="Actividad de los doctores"
      >
        <figure className="w-28 h-28">
          <img
            src="/img/logo.jpg"
            alt="Logotipo de la clínica"
            className="w-full h-full object-cover"
          />
        </figure>

        <h2 className="uppercase text-xl font-bold text-teal-950">
          Actividad de los doctores
        </h2>

        <section
          className="flex flex-col items-center rounded-2xl shadow-md shadow-gray-300 bg-white px-4 py-6 w-full mt-6 md:px-10 max-w-4xl"
          aria-label="Panel de actividad"
        >
          {/* Opciones del encabezado */}
          <div className="w-full flex justify-between mb-10 items-center">
            <label htmlFor="rango-actividad" className="sr-only">
              Seleccionar rango
            </label>
            <select
              id="rango-actividad"
              name="rango"
              className="border border-gray-300 rounded-lg px-1 outline-none focus-visible:ring-2  focus-visible:ring-gray-400"
              aria-label="Seleccionar rango de tiempo"
              defaultValue="dia"
            >
              <option value="dia">Día</option>
              <option value="semana">Semana</option>
              <option value="mes">Mes</option>
            </select>

            <form
              className="flex items-center"
              role="search"
              aria-label="Buscar doctor por nombre"
            >
              <label htmlFor="buscar-doctor" className="sr-only">
                Buscar
              </label>
              <input
                id="buscar-doctor"
                name="buscar"
                type="text"
                placeholder="Buscar"
                className="border-2 rounded-lg p-1 text-base focus:outline-none w-40 md:w-60"
                aria-label="Buscar doctor por nombre"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-teal-500 text-white rounded-md outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                aria-label="Buscar"
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
                  aria-hidden="true"
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

          {/* Relleno */}
          <DoctorActividad />
          <DoctorActividad />
          <DoctorActividad />
          <DoctorActividad />
          <DoctorActividad />
          <GraficoModal/>
        </section>
      </main>

      <Footer className="flex-none" />

      {/* Abrir el menú en pantallas pequeñas */}
      <MenuModal />
    </div>
  );
};

export default Actividad;
