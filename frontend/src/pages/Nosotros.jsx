import Header from '../componets/Header';
import Footer from '../componets/Footer';
import MenuModal from '../componets/MenuModal';

const Nosotros = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" />
      <main className="flex-1">
        <section className="relative h-48 w-full max-w-7xl mb-10 m-auto">
          <img
            src="/img/hero.jpg"
            alt="imagen-hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bg-black/40 inset-0 flex justify-center items-center">
            <h1 className="text-4xl font-semibold text-white">
              Sobre nosotros ...
            </h1>
          </div>
        </section>
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl font-semibold text-teal-900">
            Conoce nuestros especialistas
          </h2>
        </div>
        <div className="flex flex-wrap mb-10 gap-8 md:gap-x-28 p-4 md:px-20 lg:gap-x-8 lg:px-8">
          {/* imágenes de relleno */}
          <div className="flex flex-col items-center md:order-2 w-auto justify-center flex-1">
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
          <div className="flex flex-col items-center md:order-2 w-auto flex-1">
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
          <div className="flex flex-col items-center md:order-2 w-auto flex-1">
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
          <div className="flex flex-col items-center md:order-2 w-auto justify-center flex-1">
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
        </div>

        <div className="flex justify-center mb-6">
          <h2 className="text-2xl font-semibold text-teal-900">
            Conoce nuestra clínica
          </h2>
        </div>
        <div className="flex flex-col items-center mb-4">
          <div className="w-52 lg:w-80 rounded-full overflow-hidden">
            <img src="/img/clinica.jpg" alt="clinica" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col p-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h3 className="inline-block text-teal-900 text-lg ml-4 mb-2">
                Estamos ubicados en Calle 5ta #10
              </h3>
            </div>
            <div>
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
                className="inline-block"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <path d="M8 11h.01" />
                <path d="M12 11h.01" />
                <path d="M16 11h.01" />
              </svg>
              <h3 className="inline-block text-teal-900 text-lg ml-4 mb-2">
                Llámanos al +53 5555 5555
              </h3>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <h3 className="inline-block text-teal-900 text-lg ml-4 mb-2">
                O escríbenos al correo@correo.com
              </h3>
            </div>
          </div>
        </div>
      </main>
      <Footer className="flex-none" />
      <MenuModal />
    </div>
  );
};

export default Nosotros;
