import { NavLink } from 'react-router-dom';

const Header = ({abrirMenu}) => {
  return (
    <header className="bg-[rgb(243,248,252)] mb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Branding */}
          <div className="flex items-center gap-x-3 outline-none p-1 rounded-lg focus-within:ring-2 focus-within:ring-teal-300">
            <NavLink to="/" className="flex items-center gap-x-3 outline-none">
              <img
                src="/img/logo.jpg"
                alt="Logotipo de Clínica"
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="uppercase text-xl font-semibold">Clínica</span>
            </NavLink>
          </div>

          {/* Navegación */}
          <nav aria-label="Menú principal" className="flex items-center">
            {/* Botón de solicitar visible en pantallas pequeñas */}
            <div className="flex items-center gap-x-2 lg:hidden">
              <NavLink
                to="/solicitud"
                className="bg-blue-600 text-white rounded-full py-1 px-4 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
              >
                Solicitar Cita
              </NavLink>

              {/* Botón de menú móvil*/}
              <button
                type="button"
                onClick={abrirMenu}
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
                <NavLink
                  to="/"
                  role="menuitem"
                  className={({ isActive }) =>
                    `font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${isActive ? 'bg-teal-300/60' : ''}`
                  }
                >
                  Inicio
                </NavLink>
              </li>

              <li role="none">
                <NavLink
                  to="/nosotros"
                  role="menuitem"
                  className={({ isActive }) =>
                    `font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${isActive ? 'bg-teal-300/60' : ''}`
                  }
                >
                  Nosotros
                </NavLink>
              </li>

              <li role="none">
                <NavLink
                  to="/solicitudes"
                  role="menuitem"
                  className={({ isActive }) =>
                    `font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${isActive ? 'bg-teal-300/60' : ''}`
                  }
                >
                  Solicitudes
                </NavLink>
              </li>

              <li role="none">
                <NavLink
                  to="/doctores"
                  role="menuitem"
                  className={({ isActive }) =>
                    `font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${isActive ? 'bg-teal-300/60' : ''}`
                  }
                >
                  Doctores
                </NavLink>
              </li>

              <li role="none">
                <NavLink
                  to="/actividad"
                  role="menuitem"
                  className={({ isActive }) =>
                    `font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${isActive ? 'bg-teal-300/60' : ''}`
                  }
                >
                  Actividad
                </NavLink>
              </li>

              <li role="none">
                <NavLink
                  to="/perfil"
                  role="menuitem"
                  className={({ isActive }) =>
                    `font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${isActive ? 'bg-teal-300/60' : ''}`
                  }
                >
                  Perfil
                </NavLink>
              </li>

              <li role="none">
                <NavLink
                  to="/login"
                  role="menuitem"
                  className={({ isActive }) =>
                    `font-semibold rounded-full py-1 px-5 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 border-2 border-teal-300/60 focus-visible:ring-teal-300 ${isActive ? 'bg-teal-300/60' : ''}`
                  }
                >
                  Autenticarse
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
