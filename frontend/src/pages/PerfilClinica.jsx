import Header from '../componets/Header';
import Footer from '../componets/Footer';
import { Link } from 'react-router-dom';
import MenuModal from '../componets/MenuModal';

//  * Propósito: Modificar datos de la clínica

const PerfilClinica = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" />

      <main
        className="flex flex-1 flex-col items-center justify-center gap-10 p-2"
        aria-label="Perfil de la clínica"
      >
        <Link
          to="/perfil"
          className="mb-10 border-teal-600 border-2 font-semibold text-teal-950 px-2 py-1 rounded-full hover:scale-105 transition-all outline-none focus-visible:ring-2 focus-visible:ring-teal-900"
        >
          Perfil Usuario
        </Link>

        {/* Datos */}
        <h2 className="text-xl font-semibold uppercase text-teal-950">
          Datos de la clínica:
        </h2>

        <form
          action=""
          className="flex flex-col items-center"
          role="form"
          aria-label="Formulario de edición de perfil de la clínica"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="md:flex md:flex-row w-full">
            {/* Avatar */}
            <figure
              className="w-40 h-40 rounded-full bg-gray-400 bg-no-repeat bg-center relative flex justify-end items-end mb-8 lg:mr-20 focus-within:ring-2 focus-within:ring-black"
              style={{
                backgroundImage: "url('/img/user_clinica.jpg')",
                backgroundSize: '80%',
              }}
            >
              <label
                htmlFor="avatar-clinica"
                className="absolute inset-0 rounded-full cursor-pointer"
                aria-label="Cambiar logo de la clínica"
              >
                <input
                  id="avatar-clinica"
                  name="avatar"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) => {
                    const file = e.target.files && e.target.files[0];
                    console.log('Avatar clínica seleccionado:', file);
                  }}
                />

                <span
                  className="absolute right-2 bottom-1 w-12 h-12 bg-teal-400 rounded-full flex justify-center items-center pointer-events-none"
                  aria-hidden="true"
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
                    aria-hidden="true"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </span>
              </label>
            </figure>

            {/* Datos principales */}
            <div className="flex flex-col md:flex-row flex-1">
              <div className="flex flex-col px-5">
                <label
                  htmlFor="clinica-nombre"
                  className="text-lg font-semibold"
                >
                  Nombre
                </label>
                <input
                  id="clinica-nombre"
                  name="nombre"
                  type="text"
                  defaultValue="Clínica"
                  required
                  autoComplete="organization"
                  className="bg-transparent text-lg focus:outline-none mb-6"
                />

                <label
                  htmlFor="clinica-correo"
                  className="text-lg font-semibold"
                >
                  Correo
                </label>
                <input
                  id="clinica-correo"
                  name="correo"
                  type="email"
                  defaultValue="correo@correo.com"
                  required
                  autoComplete="email"
                  className="bg-transparent text-lg focus:outline-none mb-6"
                />

                <label
                  htmlFor="clinica-telefono"
                  className="text-lg font-semibold"
                >
                  Teléfono
                </label>
                <input
                  id="clinica-telefono"
                  name="telefono"
                  type="tel"
                  defaultValue="55555555"
                  required
                  autoComplete="tel"
                  className="bg-transparent text-lg focus:outline-none mb-6"
                />

                <label
                  htmlFor="clinica-ubicacion"
                  className="text-lg font-semibold"
                >
                  Ubicación
                </label>
                <input
                  id="clinica-ubicacion"
                  name="ubicacion"
                  type="text"
                  defaultValue="Calle 5ta #10"
                  required
                  className="bg-transparent text-lg focus:outline-none mb-6"
                />
              </div>

              {/* Horarios y días */}
              <div className="px-5">
                <div className="flex justify-center gap-4">
                  <div>
                    <label
                      htmlFor="dia-lunes"
                      className="flex items-center gap-2"
                    >
                      <input
                        id="dia-lunes"
                        name="dias"
                        value="lunes"
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border checked:bg-teal-600 transition"
                        aria-label="Lunes"
                      />
                      Lunes
                    </label>
                    <label
                      htmlFor="dia-martes"
                      className="flex items-center gap-2"
                    >
                      <input
                        id="dia-martes"
                        name="dias"
                        value="martes"
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border checked:bg-teal-600 transition"
                        aria-label="Martes"
                      />
                      Martes
                    </label>
                    <label
                      htmlFor="dia-miercoles"
                      className="flex items-center gap-2"
                    >
                      <input
                        id="dia-miercoles"
                        name="dias"
                        value="miercoles"
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border checked:bg-teal-600 transition"
                        aria-label="Miércoles"
                      />
                      Miércoles
                    </label>
                    <label
                      htmlFor="dia-jueves"
                      className="flex items-center gap-2"
                    >
                      <input
                        id="dia-jueves"
                        name="dias"
                        value="jueves"
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border checked:bg-teal-600 transition"
                        aria-label="Jueves"
                      />
                      Jueves
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="dia-viernes"
                      className="flex items-center gap-2"
                    >
                      <input
                        id="dia-viernes"
                        name="dias"
                        value="viernes"
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border checked:bg-teal-600 transition"
                        aria-label="Viernes"
                      />
                      Viernes
                    </label>
                    <label
                      htmlFor="dia-sabado"
                      className="flex items-center gap-2"
                    >
                      <input
                        id="dia-sabado"
                        name="dias"
                        value="sabado"
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border checked:bg-teal-600 transition"
                        aria-label="Sábado"
                      />
                      Sábado
                    </label>
                    <label
                      htmlFor="dia-domingo"
                      className="flex items-center gap-2"
                    >
                      <input
                        id="dia-domingo"
                        name="dias"
                        value="domingo"
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded-full border-teal-600 border checked:bg-teal-600 transition"
                        aria-label="Domingo"
                      />
                      Domingo
                    </label>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 mt-6 mb-6">
                  <div>
                    <label htmlFor="hora-apertura" className="text-lg mr-4">
                      Apertura:
                    </label>
                    <input
                      id="hora-apertura"
                      name="apertura"
                      type="time"
                      defaultValue="08:00"
                      className="px-3 py-2 border border-gray-300 rounded-xl focus-within:outline-none"
                      aria-label="Hora de apertura"
                    />
                  </div>

                  <div>
                    <label htmlFor="hora-cierre" className="text-lg mr-4">
                      Cierre:
                    </label>
                    <input
                      id="hora-cierre"
                      name="cierre"
                      type="time"
                      defaultValue="18:00"
                      className="px-3 py-2 border border-gray-300 rounded-xl focus-within:outline-none"
                      aria-label="Hora de cierre"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-all outline-none focus-visible:ring-2 focus-visible:ring-blue-950"
            aria-label="Guardar datos de la clínica"
          >
            Guardar
          </button>
        </form>
      </main>

      <Footer className="flex-none" />
      {/* <MenuModal /> */}
    </div>
  );
};

export default PerfilClinica;

