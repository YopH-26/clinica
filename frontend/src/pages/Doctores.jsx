import Header from '../componets/Header';
import Footer from '../componets/Footer';
import AgregarDoctor from '../componets/AgregarDoctor';
import DetallesDoctores from '../componets/DetallesDoctores';
import MenuModal from '../componets/MenuModal';
import Notificacion from '../componets/Notificacion';
import Confirmar from '../componets/Confirmar';
import Doctor from '../componets/Doctor';
import { useState, useEffect } from 'react';

//Propósito: Gestión de doctores (listar, agregar, editar, eliminar, buscar).

const Doctores = () => {
  const [agregarAbierto, setAgregarAbierto] = useState(false);
  const [dotorDetalles, setDoctorDetalles] = useState(false);
  const [eliminarAbierto, setEliminarAbierto] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [doctores, setDoctores] = useState(() => {
    const guardados = localStorage.getItem('doctores');
    return guardados ? JSON.parse(guardados) : [];
  });
  const [doctorEdit, setDoctorEdit] = useState({});
  const [accion, setAccion] = useState('agregar');
  const [doctorEliminar, setDoctorEliminar] = useState(null);
  const [buscar, setBuscar] = useState('');

  useEffect(() => {
    localStorage.setItem('doctores', JSON.stringify(doctores));
  }, [doctores]);

  const agregarOnClick = () => {
    setAgregarAbierto(true);
    setAccion('agregar');
  };

  const obtenerDoctor = (id) => {
    setDoctorEliminar(id);
  };

  const eliminarDoctor = () => {
    if (doctorEliminar) {
      const doctoresActualizados = doctores.filter(
        (doc) => doc.id !== doctorEliminar,
      );
      setDoctores(doctoresActualizados);
      setEliminarAbierto(false);
      setDoctorEliminar(null);
    }
  };

  //buscar
  const doctoresFiltrados = doctores.filter((doc) =>
    doc.nombreDoctor.toLowerCase().includes(buscar.toLowerCase()),
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" abrirMenu={() => setMenuAbierto(true)} />
      <main
        className="flex-1 flex flex-col items-center justify-center p-1"
        aria-label="Listado de doctores"
      >
        <figure className="w-28 h-28">
          <img
            src="/img/logo.jpg"
            alt="Logotipo de la clínica"
            className="w-full h-full object-cover"
          />
        </figure>

        <h2 className="uppercase text-xl font-bold text-teal-950">
          Listado de doctores
        </h2>

        <section
          className="flex flex-col items-center rounded-2xl shadow-md shadow-gray-300 bg-white px-4 py-6 w-full mt-6 md:px-10 max-w-4xl"
          aria-label="Panel de gestión de doctores"
        >
          {/* Opciones del encabezado */}
          <div className="w-full flex justify-between mb-10">
            <button
              type="button"
              onClick={agregarOnClick}
              className="uppercase font-semibold text-base bg-teal-600 rounded-full px-3 py-1 text-white hidden md:inline-block outline-none focus-visible:ring-2  focus-visible:ring-teal-900"
              aria-label="Agregar doctor"
            >
              Agregar doctor
            </button>

            <button
              type="button"
              className="md:hidden bg-teal-600 text-white p-2 rounded-full outline-none focus-visible:ring-2  focus-visible:ring-teal-900"
              aria-label="Agregar doctor (móvil)"
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
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>

            <form
              className="flex items-center"
              role="search"
              aria-label="Buscar doctores"
            >
              <label htmlFor="buscar-doctor" className="sr-only">
                Buscar doctor
              </label>
              <input
                id="buscar-doctor"
                name="buscar"
                type="text"
                placeholder="Buscar"
                value={buscar}
                onChange={(e) => setBuscar(e.target.value)}
                className="border-2 rounded-lg p-1 text-base focus:outline-none"
                aria-label="Buscar doctor por nombre"
              />
            </form>
          </div>

          <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] lg:grid-cols-[2fr_2fr_2fr_1fr_1fr] mb-3 border-b-2 border-teal-700 w-full">
            <h3 className="uppercase font-semibold text-lg">Nombre</h3>
            <h3 className="uppercase font-semibold text-lg hidden lg:block">
              Usuario
            </h3>
            <h3 className="uppercase font-semibold text-lg hidden md:block">
              Especialidad
            </h3>
            <h3 className="uppercase font-semibold text-lg hidden lg:block">
              Público
            </h3>
            <h3 className="uppercase font-semibold text-lg">Acciones</h3>
          </div>

          {/* Listado de doctores */}
          {doctoresFiltrados.map((doctor) => (
            <Doctor
              agregar={() => setAgregarAbierto(true)}
              abrirDetalles={(doctor) => setDoctorDetalles(doctor)}
              abrirEliminar={() => setEliminarAbierto(true)}
              key={doctor.id}
              doctor={doctor}
              setDoctorEdit={setDoctorEdit}
              setAccion={setAccion}
              obtenerDoctor={obtenerDoctor}
              setEliminarAbierto={setEliminarAbierto}
            />
          ))}
        </section>
      </main>
      <Footer className="flex-none" />
      {agregarAbierto && (
        <AgregarDoctor
          cerrar={() => setAgregarAbierto(false)}
          doctores={doctores}
          setDoctores={setDoctores}
          doctorEdit={doctorEdit}
          setDoctorEdit={setDoctorEdit}
          accion={accion}
        />
      )}
      {dotorDetalles && (
        <DetallesDoctores
          doctor={dotorDetalles}
          cerrarDetalles={() => setDoctorDetalles(false)}
        />
      )}
      {eliminarAbierto && (
        <Confirmar
          cerrarEliminar={() => setEliminarAbierto(false)}
          eliminarDoctor={eliminarDoctor}
        />
      )}{' '}
      {menuAbierto && <MenuModal cerrarMenu={() => setMenuAbierto(false)} />}
      {/* <Notificacion /> */}
    </div>
  );
};

export default Doctores;
