import Header from '../componets/Header';
import Footer from '../componets/Footer';
import SolicitudModal from '../componets/SolicitudModal';
import MenuModal from '../componets/MenuModal';
import Planificar from '../componets/Planificar';
import SolicitudAceptada from '../componets/SolicitudAceptada';
import SolicitudSolicitada from '../componets/SolicitudSolicitada';
import { useState } from 'react';

//Propósito: Gestionar las solicitudes de cita (listar, planificar, eliminar) y gestionar las planificadas

const Solicitudes = () => {

const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" abrirMenu={() => setMenuAbierto(true)} />

      <main className="flex-1 flex flex-col items-center justify-center p-2">
        <div className="w-28 h-28">
          <img
            src="/img/logo.jpg"
            alt="Logotipo de la clínica"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="uppercase text-xl font-bold text-teal-950">
          Solicitudes de citas
        </h2>

        {/* Citas solicitadas */}
        <section
          className="flex flex-col items-center rounded-2xl shadow-md shadow-gray-300 bg-white px-4 py-6 w-full mt-6 md:px-10 max-w-4xl"
          aria-label="Solicitudes pendientes"
        >
          <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] lg:grid-cols-[2fr_2fr_2fr_1fr] mb-3 border-b-2 border-teal-700 w-full">
            <h3 className="uppercase font-semibold text-lg hidden md:block">
              Paciente
            </h3>
            <h3 className="uppercase font-semibold text-lg">Especialidad</h3>
            <h3 className="uppercase font-semibold text-lg hidden lg:block">
              Fecha preferida
            </h3>
            <h3 className="uppercase font-semibold text-lg">Acciones</h3>
          </div>

          {/* Relleno */}
          <SolicitudSolicitada />
          <SolicitudSolicitada />
          <SolicitudSolicitada />
          <SolicitudSolicitada />
          <SolicitudSolicitada />
        </section>

        {/* Citas planificadas */}
        <h2 className="uppercase text-xl font-bold text-teal-950 mt-20">
          Planificadas
        </h2>

        <section
          className="flex flex-col items-center rounded-2xl shadow-md shadow-gray-300 bg-white px-4 py-6 w-full mt-6 md:px-10 max-w-4xl"
          aria-label="Solicitudes planificadas"
        >
          <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr_1fr] mb-3 border-b-2 border-teal-700 w-full">
            <h3 className="uppercase font-semibold text-lg">Paciente</h3>
            <h3 className="uppercase font-semibold text-lg hidden md:block">
              Fecha
            </h3>
            <h3 className="uppercase font-semibold text-lg">Acciones</h3>
          </div>

          {/* Relleno */}
          <SolicitudAceptada />
          <SolicitudAceptada />
          <SolicitudAceptada />
          <SolicitudAceptada />
        </section>
      </main>

      <Footer className="flex-none" />
      {/* <SolicitudModal /> */}
      {menuAbierto && <MenuModal cerrarMenu={() => setMenuAbierto(false)} />}
      {/* <Planificar /> */}
    </div>
  );
};

export default Solicitudes;
