import Header from '../componets/Header';
import Footer from '../componets/Footer';
import { Link } from 'react-router-dom';
import MenuModal from '../componets/MenuModal';

//Propósito: Modificar datos personales

const Perfil = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" />

      <main
        className="flex flex-1 flex-col items-center justify-center gap-10 p-2"
        aria-label="Perfil de usuario"
      >
        <Link
          to="/perfilclinica"
          className="mb-10 border-teal-600 border-2 font-semibold text-teal-950 px-2 py-1 rounded-full hover:scale-105 transition-all outline-none focus-visible:ring-2 focus-visible:ring-teal-900"
        >
          Perfil Clínica
        </Link>

        {/* Datos */}
        <h2 className="text-xl font-semibold uppercase text-teal-950">
          Datos de usted:
        </h2>

        <form
          action=""
          className="flex flex-col items-center w-full"
          role="form"
          aria-label="Formulario de edición de perfil"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="lg:flex lg:flex-row">
            {/* Avatar */}
            <figure
              className="w-40 h-40 rounded-full bg-gray-400 bg-no-repeat bg-center relative flex justify-end items-end mb-8 lg:mr-20 focus-within:ring-2 focus-within:ring-black"
              style={{
                backgroundImage: "url('/img/user.jpg')",
                backgroundSize: '80%',
              }}
            >
              {/* File input */}
              <label
                htmlFor="avatar"
                className="absolute inset-0 rounded-full cursor-pointer"
                aria-label="Cambiar foto de perfil"
              >
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) => {
                    const file = e.target.files && e.target.files[0];
                    console.log('Avatar seleccionado:', file);
                  }}
                />

                {/* Botón visual (no bloquea la interacción) */}
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

            {/* Datos personales */}
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col px-5">
                <label htmlFor="nombre" className="text-lg font-semibold">
                  Nombre Completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  defaultValue="Agapito Resóplez"
                  required
                  autoComplete="name"
                  className="bg-transparent text-lg focus:outline-none mb-6"
                />

                <label htmlFor="correo" className="text-lg font-semibold">
                  Correo
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  defaultValue="algo@algo.com"
                  required
                  autoComplete="email"
                  className="bg-transparent text-lg focus:outline-none mb-6"
                />

                <label htmlFor="telefono" className="text-lg font-semibold">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  defaultValue="55555555"
                  required
                  autoComplete="tel"
                  className="bg-transparent text-lg focus:outline-none mb-6"
                />
              </div>

              <div className="flex flex-col px-5">
                <label
                  htmlFor="especialidad"
                  className="text-lg font-semibold text-gray-600"
                >
                  Especialidad
                </label>
                <input
                  id="especialidad"
                  name="especialidad"
                  type="text"
                  value="Cardiólogo"
                  readOnly
                  tabIndex={-1}
                  className="bg-transparent text-lg focus:outline-none mb-6 text-gray-600"
                />

                <label
                  htmlFor="usuario"
                  className="text-lg font-semibold text-gray-600"
                >
                  Usuario
                </label>
                <input
                  id="usuario"
                  name="usuario"
                  type="text"
                  value="user123"
                  readOnly
                  tabIndex={-1}
                  className="bg-transparent text-lg focus:outline-none mb-6 text-gray-600"
                />

                <button
                  type="button"
                  className="bg-teal-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-all mb-2 outline-none focus-visible:ring-2  focus-visible:ring-teal-900"
                  onClick={() => {
                    console.log('Abrir modal cambiar contraseña - TODO');
                  }}
                  aria-label="Cambiar contraseña"
                >
                  Cambiar contraseña
                </button>

                {/* Formulario de cambio de contraseña */}
                <form className="flex flex-col">
                  <label htmlFor="actual" className="text-lg font-semibold">
                    Actual
                  </label>
                  <input
                    id="actual"
                    name="contrasenna_actual"
                    type="password"
                    required
                    className="bg-transparent text-lg focus:outline-none mb-2 border border-gray-400 rounded-md px-1"
                    autoComplete="current-password"
                  />

                  <label htmlFor="nueva" className="text-lg font-semibold">
                    Nueva
                  </label>
                  <input
                    id="nueva"
                    name="contrasenna_nueva"
                    type="password"
                    required
                    className="bg-transparent text-lg focus:outline-none mb-2 border border-gray-400 rounded-md px-1"
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="bg-teal-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-all mb-6 w-24 m-auto outline-none focus-visible:ring-2  focus-visible:ring-teal-900"
                    aria-label="Confirmar cambio de contraseña"
                  >
                    Cambiar
                  </button>
                </form>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-all outline-none focus-visible:ring-2  focus-visible:ring-blue-950"
            aria-label="Guardar cambios de perfil"
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

export default Perfil;
