import Header from '../componets/Header';
import Footer from '../componets/Footer';
import MenuModal from '../componets/MenuModal';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

//Propósito: Información de la clínica y el equipo

const Nosotros = () => {

  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" abrirMenu={()=> setMenuAbierto(true)}/>

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative h-48 w-full max-w-7xl mb-10 m-auto"
          aria-label="Hero sobre nosotros"
        >
          <img
            src="/img/hero.jpg"
            alt="Imagen del equipo"
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute bg-black/40 inset-0 flex justify-center items-center"
            aria-hidden="true"
          >
            <h1 className="text-4xl font-semibold text-white">
              Sobre nosotros ...
            </h1>
          </div>
        </section>

        {/* Doctores */}
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl font-semibold text-teal-900">
            Conoce nuestros especialistas
          </h2>
        </div>

        <section
          className="flex flex-wrap mb-10 gap-8 md:gap-x-28 p-4 md:px-20 lg:gap-x-8 lg:px-8"
          aria-label="Listado de especialistas"
        >
          {/* Tarjeta 1 */}
          <figure className="flex flex-col items-center w-auto flex-1 justify-center">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-1 rounded-full">
              <div className="h-36 w-36 lg:h-52 lg:w-52 rounded-full overflow-hidden">
                <img
                  src="/img/doctor1.jpg"
                  alt="Foto del Dr. Agapito Resóplez — Cardiólogo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <figcaption className="text-center mt-1">
              <h3 className="inline-block text-lg font-semibold">
                Dr. Agapito Resóplez
              </h3>
              <h4 className="text-lg">Cardiólogo</h4>
            </figcaption>
          </figure>

          {/* Tarjeta 2 */}
          <figure className="flex flex-col items-center w-auto flex-1">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-1 rounded-full">
              <div className="h-36 w-36 lg:h-52 lg:w-52 rounded-full overflow-hidden">
                <img
                  src="/img/doctor1.jpg"
                  alt="Foto del Dr. Agapito Resóplez — Cardiólogo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <figcaption className="text-center mt-1">
              <h3 className="inline-block text-lg font-semibold">
                Dr. Agapito Resóplez
              </h3>
              <h4 className="text-lg">Cardiólogo</h4>
            </figcaption>
          </figure>

          {/* Tarjeta 3 */}
          <figure className="flex flex-col items-center w-auto flex-1">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-1 rounded-full">
              <div className="h-36 w-36 lg:h-52 lg:w-52 rounded-full overflow-hidden">
                <img
                  src="/img/doctor1.jpg"
                  alt="Foto del Dr. Agapito Resóplez — Cardiólogo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <figcaption className="text-center mt-1">
              <h3 className="inline-block text-lg font-semibold">
                Dr. Agapito Resóplez
              </h3>
              <h4 className="text-lg">Cardiólogo</h4>
            </figcaption>
          </figure>

          {/* Tarjeta 4 */}
          <figure className="flex flex-col items-center w-auto flex-1 justify-center">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-1 rounded-full">
              <div className="h-36 w-36 lg:h-52 lg:w-52 rounded-full overflow-hidden">
                <img
                  src="/img/doctor1.jpg"
                  alt="Foto del Dr. Agapito Resóplez — Cardiólogo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <figcaption className="text-center mt-1">
              <h3 className="inline-block text-lg font-semibold">
                Dr. Agapito Resóplez
              </h3>
              <h4 className="text-lg">Cardiólogo</h4>
            </figcaption>
          </figure>
        </section>

        {/* clinica */}
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl font-semibold text-teal-900">
            Conoce nuestra clínica
          </h2>
        </div>

        <div className="flex flex-col items-center mb-4">
          <div className="w-52 lg:w-80 rounded-full overflow-hidden">
            <img
              src="/img/clinica.jpg"
              alt="Foto de la clínica"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <section
          className="flex flex-col items-center"
          aria-label="Información de contacto"
        >
          <div className="flex flex-col p-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle+5ta+%2310+La+Habana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir ubicación Calle 5ta número 10 en Google Maps"
              className="flex items-center mb-2 rounded-xl px-1 outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
            >
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
              <p className="inline-block text-teal-900 text-lg ml-4 mb-0">
                Estamos ubicados en Calle 5ta #10
              </p>
            </a>

            <a
              href="tel:+5355555555"
              aria-label="Llamar al +53 5555 5555"
              className="flex items-center mb-2 px-1 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
            >
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
              <p className="inline-block text-teal-900 text-lg ml-4 mb-0">
                Llámanos al +53 5555 5555
              </p>
            </a>

            <a
              href="mailto:correo@correo.com"
              aria-label="Enviar correo a correo@correo.com"
              className="flex items-center px-1 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
            >
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
              <p className="inline-block text-teal-900 text-lg ml-4 mb-0">
                O escríbenos al correo@correo.com
              </p>
            </a>
          </div>
        </section>
      </main>

      <Footer className="flex-none" />
      {menuAbierto && <MenuModal cerrarMenu={()=> setMenuAbierto(false)}/>}
    </div>
  );
};

export default Nosotros;
