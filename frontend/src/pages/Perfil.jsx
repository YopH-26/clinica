import Header from '../componets/Header';
import Footer from '../componets/Footer';

const Perfil = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header className="flex-none" />
        <main className="flex flex-1 flex-col items-center justify-center p-2">
          <form action="" className="flex flex-col items-center w-full">
            <div className="lg:flex lg:flex-row">
              <div className="w-40 h-40 rounded-full bg-gray-500 relative flex justify-end items-end mb-8 lg:mr-20">
                <button className="w-12 h-12 bg-teal-400 rounded-full"></button>
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
                </div>
              </div>
            </div>
            <button className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-all">
              Guardar
            </button>
          </form>
        </main>
        <Footer className="flex-none" />
      </div>
    </>
  );
};

export default Perfil;
