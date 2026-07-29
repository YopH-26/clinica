import Footer from '../componets/Footer';
import Header from '../componets/Header';
import MenuModal from '../componets/MenuModal';

//Propósito: Inicio de sesión.

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main
        className="flex-1 flex flex-col items-center justify-center p-2"
        aria-label="Inicio de sesión"
      >
        <figure className="w-28 h-28">
          <img
            src="/img/logo.jpg"
            alt="Logotipo de la clínica"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </figure>

        <h2 className="uppercase text-xl font-bold text-teal-950">
          Inicio de sesión
        </h2>

        <form
          action=""
          className="w-full px-8 mt-3 max-w-lg flex flex-col items-center rounded-2xl shadow-md shadow-gray-300 bg-white py-6"
          role="form"
          aria-label="Formulario de inicio de sesión"
          noValidate
        >
          {/* Usuario */}
          <div className="mb-4 w-full">
            <label htmlFor="usuario" className="text-lg mb-1">
              Usuario
            </label>

            <div className="flex items-center pb-1 border-b border-teal-800 focus-within:border-teal-400">
              <input
                type="text"
                id="usuario"
                name="usuario"
                autoComplete="username"
                required
                className="peer w-full text-xl focus:outline-none px-1 order-1 bg-transparent"
                aria-label="Usuario"
              />

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
                aria-hidden="true"
                className="ml-2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>

          {/* Contraseña */}
          <div className="w-full">
            <label htmlFor="contrasenna" className="text-lg mb-1">
              Contraseña
            </label>

            <div className="flex items-center pb-1 border-b border-teal-800 focus-within:border-teal-400">
              <input
                type="password"
                id="contrasenna"
                name="contrasenna"
                required
                className="peer w-full text-xl focus:outline-none px-1 order-1 bg-transparent"
                aria-label="Contraseña"
              />

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
                aria-hidden="true"
                className="ml-2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase mt-10 outline-none focus-visible:ring-2 focus-visible:ring-blue-950"
            aria-label="Acceder"
          >
            Acceder
          </button>
        </form>
      </main>

      <Footer />
      {/* <MenuModal /> */}
    </div>
  );
};

export default Login;
