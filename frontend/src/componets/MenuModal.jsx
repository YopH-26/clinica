import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const MenuModal = () => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 lg:hidden">
      <div className="fixed min-h-screen w-4/5 right-0 bg-teal-700 md:w-80">
        <div className="fixed right-0 m-5">
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
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <div className="flex flex-col pt-10 mt-10 items-center">
          <Link to="/" className="text-teal-50 text-xl mb-8 font-semibold">
            Inicio
          </Link>
          <Link to="/nosotros" className="text-teal-50 text-xl mb-8 font-semibold">
            Nosotros
          </Link>
          <Link to="/solicitudes" className="text-teal-50 text-xl mb-8 font-semibold">
            Solicitudes
          </Link>
          <Link to="/doctores" className="text-teal-50 text-xl mb-8 font-semibold">
            Doctores
          </Link>
          <Link to="/actividad" className="text-teal-50 text-xl mb-8 font-semibold">
            Actividad
          </Link>
          <Link to="/perfil" className="text-teal-50 text-xl mb-8 font-semibold">
            Perfil
          </Link>
          <Link to="/login" className="text-teal-50 text-xl mb-8 font-semibold">
            Autenticarse
          </Link>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default MenuModal;
