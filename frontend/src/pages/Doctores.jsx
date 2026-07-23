import Header from '../componets/Header';
import Footer from '../componets/Footer';
import AgregarDoctor from '../componets/AgregarDoctor';
import DetallesDoctores from '../componets/DetallesDoctores';
import MenuModal from '../componets/MenuModal';

const Solocitudes = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header className=" flex-none" />
        <main className="flex-1 flex flex-col items-center justify-center p-2">
          <div className="w-28 h-28">
            <img src="/img/logo.jpg" alt="logo" />
          </div>
          <h2 className="uppercase text-xl font-bold text-teal-950">
            Listado de doctores
          </h2>
          <div className="flex flex-col items-center rounded-2xl shadow-md shadow-gray-300 bg-white px-4 py-6 w-full mt-6 md:px-10 max-w-4xl">
            <div className='w-full flex justify-between mb-10'>
              <button className="uppercase font-semibold text-base bg-teal-600 rounded-full px-3 py-1 shadow-md text-white hidden md:inline-block">
                Agregar doctor
              </button>
              <button className="md:hidden bg-teal-600 text-white p-2 rounded-full">
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
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="border-2 rounded-lg p-1 text-base focus:outline-none"
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
            <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] lg:grid-cols-[2fr_2fr_2fr_1fr_1fr] mb-3 border-b-2 border-teal-700 w-full">
              <h3 className="uppercase font-semibold text-lg">Nombre</h3>
              <h3 className="uppercase font-semibold text-lg hidden lg:block">
                Usuario
              </h3>
              <h3 className="uppercase font-semibold text-lg hidden md:block">
                Especialidad
              </h3>
              <h3 className="uppercase font-semibold text-lg hidden lg:block">
                Público
              </h3>
              <h3 className="uppercase font-semibold text-lg">Acciones</h3>
            </div>

            {/* relleno */}
            <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] lg:grid-cols-[2fr_2fr_2fr_1fr_1fr] mb-3 border-b border-teal-400 w-full">
              <p className="text-lg">Juan García Gómez</p>
              <p className="text-lg hidden lg:block">user_1</p>
              <p className="text-lg hidden md:block">Cardiología</p>
              <div className="items-center cursor-pointer hidden w-9 lg:flex">
                <input type="checkbox" className="sr-only" />
                <div className="w-9 h-5 bg-gray-300 rounded-full transition-colors">
                  <div className="w-4 h-4 bg-white rounded-full shadow transform transition-transform translate-x-0.5 translate-y-0.5" />
                </div>
              </div>
              <div className="flex gap-x-2">
                <button>
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
                    className="text-black"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </button>
                <button className="">
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
                    className="text-blue-500"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </button>
                <button>
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
            <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] lg:grid-cols-[2fr_2fr_2fr_1fr_1fr] mb-3 border-b border-teal-400 w-full">
              <p className="text-lg">Juan García Gómez</p>
              <p className="text-lg hidden lg:block">user_1</p>
              <p className="text-lg hidden md:block">Cardiología</p>
              <div className="items-center cursor-pointer hidden w-9 lg:flex">
                <input type="checkbox" className="sr-only" />
                <div className="w-9 h-5 bg-gray-300 rounded-full transition-colors">
                  <div className="w-4 h-4 bg-white rounded-full shadow transform transition-transform translate-x-0.5 translate-y-0.5" />
                </div>
              </div>
              <div className="flex gap-x-2">
                <button>
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
                    className="text-black"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </button>
                <button className="">
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
                    className="text-blue-500"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </button>
                <button>
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
          </div>
        </main>
        <Footer className=" flex-none" />
        <AgregarDoctor/>
        <DetallesDoctores/>
        <MenuModal/>
      </div>
    </>
  );
};

export default Solocitudes;
