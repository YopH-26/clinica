import Calendario from '../componets/Calendario';
import EspecialidadSelect from '../componets/EspecialidadSelect';
import Footer from '../componets/Footer';
import Header from '../componets/Header';
import MenuModal from '../componets/MenuModal';

//Propósito: Solicitar cita

const Solicitud = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-col items-center justify-center px-4">
        <figure className="flex flex-col items-center">
          <div className="w-20 h-20">
            <img
              src="/img/logo.jpg"
              alt="Logotipo de la clínica"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption>
            <h2 className="uppercase text-xl font-bold text-teal-950 mt-2">
              Solicitud de cita
            </h2>
          </figcaption>
        </figure>

        {/* Formulario de solicitud */}
        <form
          className="flex flex-col items-center border w-full rounded-2xl shadow-md shadow-gray-300 bg-white px-4 py-6 mt-2 max-w-4xl"
          aria-label="Formulario de solicitud de cita"
        >
          <div className="w-full md:flex md:gap-20 md:justify-between md:px-10">
            <div className="w-full">
              <label
                htmlFor="nombre"
                className="font-semibold text-lg mb-2 block"
              >
                Datos Personales
              </label>

              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre y Apellidos"
                autoComplete="name"
                className="border border-teal-950 rounded-md mb-2 p-1 w-full focus:outline-none"
              />

              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="Correo Electrónico"
                autoComplete="email"
                className="border border-teal-950 rounded-md mb-2 p-1 w-full focus:outline-none"
              />

              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="+53 5xxxx xxxx"
                autoComplete="tel"
                className="border border-teal-950 rounded-md mb-2 p-1 w-full focus:outline-none"
              />

              <label
                htmlFor="especialidad"
                className="font-semibold text-lg mb-2 mt-2 block"
              >
                Especialidad o Servicio
              </label>
              <EspecialidadSelect id="especialidad" name="especialidad" />

              <label
                htmlFor="motivo"
                className="font-semibold text-lg mb-2 mt-2 block"
              >
                Motivo de la Cita
              </label>
              <textarea
                id="motivo"
                name="motivo"
                placeholder="Describa lo que le sucede ..."
                className="border border-teal-950 rounded-md mb-2 p-1 w-full focus:outline-none h-24 resize-none"
              />
            </div>

            <div className="flex flex-col items-center">
              <label
                htmlFor="fecha-preferida"
                className="font-semibold text-lg mb-2 mt-2 lg:mt-0"
              >
                Fecha Preferida
              </label>
              <Calendario id="fecha-preferida" name="fecha_preferida" />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase mt-10 hover:scale-105 transition-all outline-none focus-visible:ring-2 focus-visible:ring-blue-950"
          >
            Solicitar Cita
          </button>
        </form>
      </main>

      <Footer />
      {/* <MenuModal /> */}
    </div>
  );
};

export default Solicitud;
