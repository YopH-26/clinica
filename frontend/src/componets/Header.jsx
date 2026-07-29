import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[rgb(243,248,252)] mb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Branding */}
          <div className="flex items-center gap-x-3 outline-none p-1 rounded-lg focus-within:ring-2 focus-within:ring-teal-300">
            <Link to="/" className="flex items-center gap-x-3 outline-none">
              <img
                src="/img/logo.jpg"
                alt="Logotipo de Clínica"
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="uppercase text-xl font-semibold">Clínica</span>
            </Link>
          </div>

          {/* Navegación */}
          <nav aria-label="Menú principal" className="flex items-center">
            {/* Botón de solicitar visible en pantallas pequeñas */}
            <div className="flex items-center gap-x-2 lg:hidden">
              <Link
                to="/solicitud"
                className="bg-blue-600 text-white rounded-full py-1 px-4 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
              >
                Solicitar Cita
              </Link>

              {/* Botón de menú móvil*/}
              <button
                type="button"
                className="ml-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                aria-label="Abrir menú"
                aria-controls="main-navigation"
              >
                <span className="sr-only">Abrir menú</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>

            {/* Links de navegación para pantallas grandes*/}
            <ul
              id="main-navigation"
              className="hidden lg:flex lg:items-center lg:gap-x-2"
              role="menubar"
            >
              <li role="none">
                <Link
                  to="/"
                  role="menuitem"
                  className="font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  Inicio
                </Link>
              </li>

              <li role="none">
                <Link
                  to="/nosotros"
                  role="menuitem"
                  className="font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  Nosotros
                </Link>
              </li>

              <li role="none">
                <Link
                  to="/solicitudes"
                  role="menuitem"
                  className="font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  Solicitudes
                </Link>
              </li>

              <li role="none">
                <Link
                  to="/doctores"
                  role="menuitem"
                  className="font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  Doctores
                </Link>
              </li>

              <li role="none">
                <Link
                  to="/actividad"
                  role="menuitem"
                  className="font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  Actividad
                </Link>
              </li>

              <li role="none">
                <Link
                  to="/perfil"
                  role="menuitem"
                  className="font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  Perfil
                </Link>
              </li>

              <li role="none">
                <Link
                  to="/login"
                  role="menuitem"
                  className="border-2 border-teal-200 rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 uppercase"
                >
                  Autenticarse
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
