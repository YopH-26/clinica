import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const MenuModal = ({cerrarMenu}) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 lg:hidden" aria-hidden={false}>
      {/* Backdrop semitransparente */}
      <div
        className="absolute inset-0 bg-gray-100/10"
        aria-hidden="true"
        onClick={cerrarMenu}
      />

      {/* Panel deslizable */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
        id="mobile-menu"
        className="relative ml-auto w-4/5 h-full md:w-80 bg-teal-700 text-teal-50 shadow-xl overflow-auto"
      >
        <div className="absolute top-4 right-4">
          <button
            type="button"
            onClick={cerrarMenu}
            aria-label="Cerrar menú"
            className="p-2 rounded-full hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-teal-100"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Contenido del menú */}
        <nav className="pt-16 pb-8 px-6">
          <ul
            className="flex flex-col items-center gap-6"
            role="menu"
            aria-label="Navegación principal"
          >
            <li role="none">
              <Link
                to="/"
                role="menuitem"
                className="text-teal-50 text-xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 rounded-lg p-1"
              >
                Inicio
              </Link>
            </li>

            <li role="none">
              <Link
                to="/nosotros"
                role="menuitem"
                className="text-teal-50 text-xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 rounded-lg p-1"
              >
                Nosotros
              </Link>
            </li>

            <li role="none">
              <Link
                to="/solicitudes"
                role="menuitem"
                className="text-teal-50 text-xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 rounded-lg p-1"
              >
                Solicitudes
              </Link>
            </li>

            <li role="none">
              <Link
                to="/doctores"
                role="menuitem"
                className="text-teal-50 text-xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 rounded-lg p-1"
              >
                Doctores
              </Link>
            </li>

            <li role="none">
              <Link
                to="/actividad"
                role="menuitem"
                className="text-teal-50 text-xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 rounded-lg p-1"
              >
                Actividad
              </Link>
            </li>

            <li role="none">
              <Link
                to="/perfil"
                role="menuitem"
                className="text-teal-50 text-xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 rounded-lg p-1"
              >
                Perfil
              </Link>
            </li>

            <li role="none">
              <Link
                to="/login"
                role="menuitem"
                className="text-teal-50 text-xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 rounded-lg p-1"
              >
                Autenticarse
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>,
    document.body,
  );
};

export default MenuModal;

