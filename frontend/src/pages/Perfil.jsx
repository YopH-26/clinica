import Header from '../componets/Header';
import Footer from '../componets/Footer';
import { Link } from 'react-router-dom';
import MenuModal from '../componets/MenuModal';

const Perfil = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header className="flex-none" />
        <main className="flex flex-1 flex-col items-center justify-center gap-10 p-2">
          <Link
            to="/perfilclinica"
            className="mb-10 border-teal-600 border font-semibold text-teal-950 px-2 py-1 rounded-full hover:scale-105 transition-all"
          >
            Perfil Clínica
          </Link>
          <h2 className="text-xl font-semibold uppercase text-teal-950">
            Datos de usted:
          </h2>
          <form action="" className="flex flex-col items-center w-full">
            <div className="lg:flex lg:flex-row">
              <div
                className="w-40 h-40 rounded-full bg-gray-400 bg-no-repeat bg-center relative flex justify-end items-end mb-8 lg:mr-20"
                style={{
                  backgroundImage: "url('/img/user.jpg')",
                  backgroundSize: '80%',
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => console.log(e.target.files[0])}
                />
                <button className="w-12 h-12 bg-teal-400 rounded-full flex justify-center items-center pointer-events-none">
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
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex flex-col px-5">
                  <label htmlFor="nombre" className="text-lg font-semibold">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    defaultValue={'Agapito Resóplez'}
                    required
                    autoComplete="name"
                    className="bg-transparent text-lg focus:outline-none mb-6"
                  />
                  <label htmlFor="nombre" className="text-lg font-semibold">
                    Correo
                  </label>
                  <input
                    type="email"
                    defaultValue={'algo@algo.com'}
                    required
                    autoComplete="email"
                    className="bg-transparent text-lg focus:outline-none mb-6"
                  />
                  <label htmlFor="nombre" className="text-lg font-semibold">
                    Teléfono
                  </label>
                  <input
                    type="number"
                    defaultValue={'55555555'}
                    required
                    autoComplete="mobile tel"
                    className="bg-transparent text-lg focus:outline-none mb-6"
                  />
                </div>
                <div className="flex flex-col px-5">
                  <label
                    htmlFor="nombre"
                    className="text-lg font-semibold text-gray-600"
                  >
                    Especialidad
                  </label>
                  <input
                    type="text"
                    value={'Cardiólogo'}
                    readOnly
                    required
                    className="bg-transparent text-lg focus:outline-none mb-6 text-gray-600"
                  />
                  <label
                    htmlFor="nombre"
                    className="text-lg font-semibold text-gray-600"
                  >
                    Usuario
                  </label>
                  <input
                    type="text"
                    value={'user123'}
                    readOnly
                    required
                    className="bg-transparent text-lg focus:outline-none mb-6 text-gray-600"
                  />
                  <button className="bg-teal-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-all mb-2">
                    Cambiar contraseña
                  </button>
                  <div className="flex flex-col">
                    <label htmlFor="nombre" className="text-lg font-semibold">
                      Actual
                    </label>
                    <input
                      type="password"
                      required
                      className="bg-transparent text-lg focus:outline-none mb-2 border border-gray-400 rounded-sm px-1"
                    />
                    <label htmlFor="nombre" className="text-lg font-semibold">
                      Nueva
                    </label>
                    <input
                      type="password"
                      required
                      className="bg-transparent text-lg focus:outline-none mb-2 border border-gray-400 rounded-sm px-1"
                    />
                    <button className="bg-teal-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-all mb-6 w-24 m-auto">
                      Cambiar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-all">
              Guardar
            </button>
          </form>
        </main>
        <Footer className="flex-none" />
        <MenuModal/>
      </div>
    </>
  );
};

export default Perfil;
