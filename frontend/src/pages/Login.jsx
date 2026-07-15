import Footer from '../componets/Footer';
import Header from '../componets/Header';

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
                <div className="flex pb-1 border-b border-teal-800 focus-within:border-teal-500">
                  <input
                    type="text"
                    id="usuario"
                    className="peer w-full text-xl focus:outline-none p-1 order-1"
                  />
                  <div className="w-8 h-8 transition-all peer-focus:w-10 peer-focus:h-10">
                    <img src="/img/user_account_icon_145918.svg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="contrasenna" className="text-lg">
                  Contraseña
                </label>
                <div className="flex pb-1 border-b border-teal-800 focus-within:border-teal-500">
                  <input
                    type="password"
                    id="contrasenna"
                    className="peer w-full text-xl focus:outline-none p-1 order-1"
                  />
                  <div className="w-8 h-8 transition-all peer-focus:w-10 peer-focus:h-10">
                    <img
                      src="/img/padlock_security_password_icon_193552.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase mt-10">
                Acceder
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
