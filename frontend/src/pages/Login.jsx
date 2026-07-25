import Footer from '../componets/Footer';
import Header from '../componets/Header';
import MenuModal from '../componets/MenuModal';

const Login = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-28 h-28">
            <img src="/img/logo.jpg" alt="logo" />
          </div>
          <h2 className="uppercase text-xl font-bold text-teal-950">
            Inicio de sesión
          </h2>
          <form action="" className="w-full px-4 mt-2 max-w-xl">
            <div className="flex flex-col items-center rounded-2xl shadow-md shadow-gray-300 bg-white px-4 py-6">
              <div className="mb-4">
                <label htmlFor="usuario" className="text-lg">
                  Usuario
                </label>
                <div className="flex pb-1 border-b border-teal-800 focus-within:border-teal-400">
                  <input
                    type="text"
                    id="usuario"
                    className="peer w-full text-xl focus:outline-none px-1 order-1"
                  />
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
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              <div>
                <label htmlFor="contrasenna" className="text-lg">
                  Contraseña
                </label>
                <div className="flex pb-1 border-b border-teal-800 focus-within:border-teal-400">
                  <input
                    type="password"
                    id="contrasenna"
                    className="peer w-full text-xl focus:outline-none px-1 order-1"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
              <button className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase mt-10">
                Acceder
              </button>
            </div>
          </form>
        </div>
        <Footer />
        <MenuModal/>
      </div>
    </>
  );
};

export default Login;
