import Header from '../componets/Header';
import Footer from '../componets/Footer';
import { Link } from 'react-router-dom';
import MenuModal from '../componets/MenuModal';

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header className="flex-none" />
        <main className="flex flex-1 flex-col items-center">
          <div className="flex flex-col w-full px-16 md:flex-row items-center justify-between lg:gap-24 max-w-4xl">
            <div className="flex flex-col items-center md:order-2 w-full lg:w-auto">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-1 rounded-full">
                <div className="h-36 w-36 lg:h-52 lg:w-52 rounded-full overflow-hidden">
                  <img src="/img/doctor1.jpg" alt="doctor" />
                </div>
              </div>
              <h3 className="inline-block text-lg font-semibold mt-1">
                Dr. Agapito Resóplez
              </h3>
              <h4 className="text-lg">Cardiólogo</h4>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl mt-4 md:mt-0 font-bold text-teal-600 lg:text-3xl lg:mt-10">
                Tú salud,
              </h2>
              <h2 className="text-2xl mb-4 md:mb-0 lg:mb-10 lg:text-3xl font-bold text-blue-600">
                nuestra prioridad.
              </h2>
              <h3 className="hidden md:block lg:mb-10 lg:text-xl">
                Atención médica experta, cercana y personalizada en un entorno
                moderno y acogedor.
              </h3>
              <Link
                to="/solicitud"
                className="bg-blue-600 text-white rounded-full py-1 px-5 hover:scale-105 transition-all hidden lg:block mb-2"
              >
                Solicitar Cita
              </Link>
            </div>
          </div>

          <form action="" className="mt-2 lg:w-full max-w-4xl">
            <label htmlFor="nombre" className="text-lg text-teal-950">
              Déjanos tú opinión
            </label>
            <div className="border-gray-300 border p-4 rounded-md">
              <div className="md:flex lg:justify-between">
                <div className="lg:flex-[2]">
                  <div className="relative p-4">
                    <input
                      type="text"
                      id="nombre"
                      placeholder="Nombre"
                      className="peer w-full border-b-2 border-teal-800 px-2 text-lg placeholder-transparent focus:border-teal-300 focus:outline-none bg-transparent"
                    />
                    <label
                      htmlFor="nombre"
                      className="absolute left-4 -top-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-gray-600"
                    >
                      Nombre
                    </label>
                  </div>
                  <div className="relative p-4">
                    <input
                      type="text"
                      id="correo"
                      placeholder="Correo"
                      className="peer w-full border-b-2 border-teal-800 px-2 text-lg placeholder-transparent focus:border-teal-300 focus:outline-none bg-transparent"
                    />
                    <label
                      htmlFor="correo"
                      className="absolute left-4 -top-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-gray-600"
                    >
                      Correo
                    </label>
                  </div>
                </div>
                <div className="relative p-4 lg:flex-[3]">
                  <textarea
                    type="text"
                    id="opinión"
                    placeholder="Tú opinión"
                    className="peer h-13 lg:h-24 w-full border-b-2 border-teal-800 px-2 text-base placeholder-transparent focus:border-teal-300 focus:outline-none bg-transparent resize-none"
                  />
                  <label
                    htmlFor="opinión"
                    className="absolute left-4 -top-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-9 lg:peer-placeholder-shown:top-20 peer-placeholder-shown:text-base peer-focus:-top-1 lg:peer-focus:-top-1 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Tú opinión
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-blue-600 text-white rounded-full px-3 py-1 hover:scale-105 transition-all">
                  Enviar opinión
                </button>
              </div>
            </div>
          </form>
        </main>
        <Footer className="flex-none" />
        <MenuModal/>
      </div>
    </>
  );
};

export default Home;
