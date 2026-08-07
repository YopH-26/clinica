import Header from '../componets/Header';
import Footer from '../componets/Footer';
import { Link } from 'react-router-dom';
import MenuModal from '../componets/MenuModal';
import { useState, useEffect } from 'react';

//  * Propósito: Modificar datos de la clínica

const PerfilClinica = () => {
  const [nombreClinica, setNombreClinica] = useState('Clinica');
  const [correoClinica, setCorreoClinica] = useState('algo@algo.algo');
  const [telefonoClinica, setTelefonoClinica] = useState('+5355555555');
  const [ubicacionClinica, setUbicacionClinica] = useState('Calle 5ta #10');
  const [diasClinica, setDiasClinica] =useState([]);
  const [aperturaClinica, setAperturaClinica] = useState('08:00');
  const [cierreClinica, setCierreClinica] = useState('16:00');
  const [imagenClinica, setImagenClinica] = useState();
    const [menuAbierto, setMenuAbierto] = useState(false);

  console.log(
    nombreClinica,
    correoClinica,
    telefonoClinica,
    imagenClinica,
    ubicacionClinica,
    aperturaClinica,
    cierreClinica,
    diasClinica,
  );

  const diaSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const toggleDia = (dia) => {
    setDiasClinica(prev => {
      const indice = prev.indexOf(dia);
      if(indice !== -1){
        const nuevoArreglo = [...prev];
        nuevoArreglo.splice(indice, 1);
        return nuevoArreglo;
      }else{
        return [...prev, dia];
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviandooooo');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" abrirMenu={() => setMenuAbierto(true)} />

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
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col items-center"
          role="form"
          aria-label="Formulario de edición de perfil de la clínica"
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
                  required
                  autoComplete="organization"
                  value={nombreClinica}
                  onChange={(e) => setNombreClinica(e.target.value)}
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
                  required
                  autoComplete="email"
                  value={correoClinica}
                  onChange={(e) => setCorreoClinica(e.target.value)}
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
                  required
                  autoComplete="tel"
                  value={telefonoClinica}
                  onChange={(e) => setTelefonoClinica(e.target.value)}
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
                  required
                  value={ubicacionClinica}
                  onChange={(e) => setUbicacionClinica(e.target.value)}
                  className="bg-transparent text-lg focus:outline-none mb-6"
                />
              </div>

              {/* Horarios y días */}
              <div className="px-5">
                <div className="flex justify-center gap-4">
                  <div>
                    {diaSemana.map((dia) => (
                      <label
                        key={dia}
                        className="flex items-center gap-3 text-base"
                      >
                        <input
                          type="checkbox"
                          value={dia}
                          onChange={() => toggleDia(dia)}
                          // className="appearance-none w-4 h-4 rounded-full border-teal-600 border checked:bg-teal-600 transition"
                        />{' '}
                        {dia}
                      </label>
                    ))}
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
                      value={aperturaClinica}
                      onChange={(e) => setAperturaClinica(e.target.value)}
                      className="bg-transparent focus-within:outline-none"
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
                      value={cierreClinica}
                      onChange={(e) => setCierreClinica(e.target.value)}
                      className="bg-transparent focus-within:outline-none"
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
      {menuAbierto && <MenuModal cerrarMenu={() => setMenuAbierto(false)} />}
      {/* <Notificacion /> */}
    </div>
  );
};

export default PerfilClinica;
