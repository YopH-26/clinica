import Header from '../componets/Header';
import Footer from '../componets/Footer';
import SolicitudModal from '../componets/SolicitudModal';
import MenuModal from '../componets/MenuModal';
import Planificar from '../componets/Planificar';

//Propósito: Gestionar las solicitudes de cita (listar, planificar, eliminar) y gestionar las planificadas

const Solicitudes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" />

      <main className="flex-1 flex flex-col items-center justify-center p-2">
        <div className="w-28 h-28">
          <img
            src="/img/logo.jpg"
            alt="Logotipo de la clínica"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="uppercase text-xl font-bold text-teal-950">
          Solicitudes de citas
        </h2>

        {/* Citas solicitadas */}
        <section
          className="flex flex-col items-center rounded-2xl shadow-md shadow-gray-300 bg-white px-4 py-6 w-full mt-6 md:px-10 max-w-4xl"
          aria-label="Solicitudes pendientes"
        >
          <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] lg:grid-cols-[2fr_2fr_2fr_1fr] mb-3 border-b-2 border-teal-700 w-full">
            <h3 className="uppercase font-semibold text-lg hidden md:block">
              Paciente
            </h3>
            <h3 className="uppercase font-semibold text-lg">Especialidad</h3>
            <h3 className="uppercase font-semibold text-lg hidden lg:block">
              Fecha preferida
            </h3>
            <h3 className="uppercase font-semibold text-lg">Acciones</h3>
          </div>

          {/* Relleno fila 1 */}
          <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] lg:grid-cols-[2fr_2fr_2fr_1fr] mb-3 border-b border-teal-400 w-full">
            <p className="text-lg hidden md:block">Juan García Gómez</p>
            <p className="text-lg">Cardiología</p>
            <p className="text-lg hidden lg:block">8/6/2026</p>

            <div className="flex gap-x-2">
              <button
                type="button"
                aria-label="Ver detalles de la solicitud"
                className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
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
                  className="text-blue-600"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Planificar solicitud"
                className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Eliminar solicitud"
                className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          </div>

          {/* Relleno fila 2 */}
          <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] lg:grid-cols-[2fr_2fr_2fr_1fr] mb-3 border-b border-teal-400 w-full">
            <p className="text-lg hidden md:block">María López Pérez</p>
            <p className="text-lg">Pediatría</p>
            <p className="text-lg hidden lg:block">10/6/2026</p>

            <div className="flex gap-x-2">
              <button
                type="button"
                aria-label="Ver detalles de la solicitud"
                className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
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
                  className="text-blue-600"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Planificar solicitud"
                className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Eliminar solicitud"
                className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Citas planificadas */}
        <h2 className="uppercase text-xl font-bold text-teal-950 mt-20">
          Planificadas
        </h2>

        <section
          className="flex flex-col items-center rounded-2xl shadow-md shadow-gray-300 bg-white px-4 py-6 w-full mt-6 md:px-10 max-w-4xl"
          aria-label="Solicitudes planificadas"
        >
          <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] mb-3 border-b-2 border-teal-700 w-full">
            <h3 className="uppercase font-semibold text-lg">Paciente</h3>
            <h3 className="uppercase font-semibold text-lg hidden md:block">
              Fecha
            </h3>
            <h3 className="uppercase font-semibold text-lg">Acciones</h3>
          </div>

          {/* Relleno planificadas fila 1 */}
          <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] mb-3 border-b border-teal-400 w-full">
            <p className="text-lg">Juan García Gómez</p>
            <p className="text-lg hidden md:block">8/6/2026</p>

            <div className="flex gap-x-2 items-center">
              <button
                type="button"
                aria-label="Ver cita planificada"
                className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
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
                  className="text-blue-600"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Editar cita planificada"
                className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Cancelar cita planificada"
                className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>

              <input
                type="checkbox"
                aria-label="Marcar como atendida"
                className="appearance-none w-4 h-4 rounded-full border-teal-600 border focus:ring-teal-500 checked:bg-teal-600 transition ml-3"
              />
            </div>
          </div>

          {/* Relleno planificadas fila 2 */}
          <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] mb-3 border-b border-teal-400 w-full">
            <p className="text-lg">María López Pérez</p>
            <p className="text-lg hidden md:block">10/6/2026</p>

            <div className="flex gap-x-2 items-center">
              <button
                type="button"
                aria-label="Ver cita planificada"
                className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
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
                  className="text-blue-600"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Editar cita planificada"
                className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Cancelar cita planificada"
                className="p-1 outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>

              <input
                type="checkbox"
                aria-label="Marcar como atendida"
                className="appearance-none w-4 h-4 rounded-full border-teal-600 border focus:ring-teal-500 checked:bg-teal-600 transition ml-3"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer className="flex-none" />
      <SolicitudModal />
      {/* <MenuModal /> */}
      {/* <Planificar /> */}
    </div>
  );
};

export default Solicitudes;
