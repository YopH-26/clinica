import Header from '../componets/Header';
import Footer from '../componets/Footer';

const Actividad = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header className=" flex-none" />
        <main className="flex-1 flex flex-col items-center justify-center p-2">
          <div className="w-28 h-28">
            <img src="/img/logo.jpg" alt="logo" />
          </div>
          <h2 className="uppercase text-xl font-bold text-teal-950">
            Solicitudes de citas
          </h2>
          <div className="flex flex-col items-center rounded-2xl shadow-md shadow-gray-300 bg-white px-4 py-6 w-full mt-6 md:px-10 max-w-4xl">
            <div className="grid grid-cols-[2fr_2fr_1fr] mb-1 border-b-2 border-teal-700 w-full">
              <h3 className="uppercase font-semibold text-lg">Paciente</h3>
              <h3 className="uppercase font-semibold text-lg">
                Fecha de solicitud
              </h3>
              <h3 className="uppercase font-semibold text-lg">Acciones</h3>
            </div>
            <div className="grid grid-cols-[2fr_2fr_1fr] mb-1 border-b border-teal-400 w-full">
              <p className="text-lg">Juan García Gómez</p>
              <p className="text-lg">8/6/2026</p>
              <div>
                <button className="">E</button>
                <button className="">P</button>
              </div>
            </div>
          </div>
        </main>
        <Footer className=" flex-none" />
      </div>
    </>
  );
};

export default Actividad;
