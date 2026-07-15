import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className=" flex gap-x-3 p-3 justify-between items-center mb-1 md:px-10">
        <div className="flex items-center gap-x-3">
          <img
            src="/img/logo.jpg"
            alt="logo"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="uppercase text-xl">Clínica</h1>
        </div>
        <nav className="flex items-center gap-x-2">
          <Link
            to="/solicitud"
            className="bg-blue-600 text-white rounded-full py-1 px-5 hover:scale-105 transition-all lg:hidden"
          >
            Solicitar Cita
          </Link>
          <button>
            <img
              src="/img/menu-svgrepo-com.svg"
              alt="menu"
              className="w-8 h-8 lg:hidden"
            />
          </button>
          <Link
            to="/"
            className="font-semibold rounded-full py-1 px-5 hover:scale-105 transition-all hidden lg:inline-block"
          >
            Inicio
          </Link>
          <Link
            to="/nosotros"
            className="font-semibold rounded-full py-1 px-5 hover:scale-105 transition-all hidden lg:inline-block"
          >
            Nosotros
          </Link>
          <Link
            to="/solicitudes"
            className="font-semibold rounded-full py-1 px-5 hover:scale-105 transition-all hidden lg:inline-block"
          >
            Solicitudes
          </Link>
          <Link
            to="/doctores"
            className="font-semibold rounded-full py-1 px-5 hover:scale-105 transition-all hidden lg:inline-block"
          >
            Doctores
          </Link>
          <Link
            to="/actividad"
            className="font-semibold rounded-full py-1 px-5 hover:scale-105 transition-all hidden lg:inline-block"
          >
            Actividad
          </Link>
          <Link
            to="/perfil"
            className="font-semibold rounded-full py-1 px-5 hover:scale-105 transition-all hidden lg:inline-block"
          >
            Perfil
          </Link>
          <Link
            to="/login"
            className="bg-transparent border-2 border-teal-200 rounded-full py-1 px-5 hover:scale-105 transition-all hidden lg:inline-block uppercase"
          >
            Autenticarse
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
