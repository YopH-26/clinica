import Header from '../componets/Header';
import Footer from '../componets/Footer';
import { Link } from 'react-router-dom';
import MenuModal from '../componets/MenuModal';

const PerfilClinica = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header className="flex-none" />
        <main className="flex flex-1 flex-col items-center justify-center gap-10 p-2">
          <Link
            to="/perfil"
            className="mb-10 border-teal-600 border font-semibold text-teal-950 px-2 py-1 rounded-full hover:scale-105 transition-all"
          >
            Perfil Usuario
          </Link>
          <h2 className="text-xl font-semibold uppercase text-teal-950">
            Datos de la clínica:
          </h2>
          <form action="" className="flex flex-col items-center w-full">
            <div className="md:flex md:flex-row">
              <div
                className="w-40 h-40 rounded-full bg-gray-400 bg-no-repeat bg-center relative flex justify-end items-end mb-8 lg:mr-20"
                style={{
                  backgroundImage: "url('/img/user_clinica.jpg')",
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
                    Nombre
                  </label>
                  <input
                    type="text"
                    defaultValue={'Clínica'}
                    required
                    autoComplete="name"
                    className="bg-transparent text-lg focus:outline-none mb-6"
                  />
                  <label htmlFor="correo" className="text-lg font-semibold">
                    Correo
                  </label>
                  <input
                    type="email"
                    defaultValue={'correo@correo.com'}
                    required
                    autoComplete="email"
                    className="bg-transparent text-lg focus:outline-none mb-6"
                  />
                  <label htmlFor="telefono" className="text-lg font-semibold">
                    Teléfono
                  </label>
                  <input
                    type="number"
                    defaultValue={'55555555'}
                    required
                    autoComplete="mobile tel"
                    className="bg-transparent text-lg focus:outline-none mb-6"
                  />
                  <label htmlFor="ubicacion" className="text-lg font-semibold">
                    Ubicación
                  </label>
                  <input
                    type="text"
                    defaultValue={'Calle 5ta #10'}
                    required
                    className="bg-transparent text-lg focus:outline-none mb-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-center gap-4">
                  <div>
                    <label htmlFor="" className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border focus:ring-teal-500 checked:bg-teal-600 transition"
                      />
                      Lunes
                    </label>
                    <label htmlFor="" className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border focus:ring-teal-500 checked:bg-teal-600 transition"
                      />
                      Martes
                    </label>
                    <label htmlFor="" className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border focus:ring-teal-500 checked:bg-teal-600 transition"
                      />
                      Miércoles
                    </label>
                    <label htmlFor="" className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border focus:ring-teal-500 checked:bg-teal-600 transition"
                      />
                      Jueves
                    </label>
                  </div>
                  <div>
                    <label htmlFor="" className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border focus:ring-teal-500 checked:bg-teal-600 transition"
                      />
                      Viernes
                    </label>
                    <label htmlFor="" className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border focus:ring-teal-500 checked:bg-teal-600 transition"
                      />
                      Sábado
                    </label>
                    <label htmlFor="" className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border focus:ring-teal-500 checked:bg-teal-600 transition"
                      />
                      Domingo
                    </label>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 mt-6 mb-6">
                  <div>
                    <label htmlFor="" className="text-lg mr-4">
                      Apertura:
                    </label>
                    <input
                      type="time"
                      defaultValue={'08:00'}
                      className="px-3 py-2 border border-gray-300 rounded-xl focus-within:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-lg mr-4">
                      Cierre:
                    </label>
                    <input
                      type="time"
                      defaultValue={'18:00'}
                      className="px-3 py-2 border border-gray-300 rounded-xl focus-within:outline-none"
                    />
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

export default PerfilClinica;
