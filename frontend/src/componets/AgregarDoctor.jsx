import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

//Propósito: Formulario de agregar doctor

const AgregarDoctor = ({cerrar, doctores, setDoctores}) => {
  const [nombreDoctor, setNombreDoctor] = useState('');
  const [correoDoctor, setCorreoDoctor] = useState('');
  const [telefonoDoctor, setTelefonoDoctor] = useState('');
  const [especialidadDoctor, setEspecialidadDoctor] = useState('');

  //Función de enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //Objeto de doctor
    const objetoDoctor = {
      nombreDoctor,
      correoDoctor,
      telefonoDoctor,
      especialidadDoctor,
      id : generarId()
    }
    setDoctores([...doctores, objetoDoctor]);

    setNombreDoctor('');
    setCorreoDoctor('');
    setTelefonoDoctor('');
    setEspecialidadDoctor('');
  };

  const generarId = ()=>{
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random+fecha
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="presentation"
      aria-hidden="false"
    >
      {/* Backdrop semitransparente */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Panel del modal */}
      <form
        onSubmit={handleSubmit}
        role="dialog"
        aria-modal="true"
        aria-label="Agregar doctor"
        className="relative z-10 w-5/6 max-w-xl mx-4 md:mx-0 bg-[rgb(243,248,252)] p-2 rounded-lg shadow-md flex flex-col md:px-6"
      >
        {/* Header */}
        <header className="flex items-center mb-2">
          <div className="w-12 h-12 flex-shrink-0">
            <img
              src="/img/logo.jpg"
              alt="Logotipo de la clínica"
              className="w-full h-full object-cover rounded"
            />
          </div>

          <h2 className="uppercase text-xl font-bold text-teal-950 ml-3">
            Agregar doctor
          </h2>
        </header>

        {/* Contenido */}
        <div className="md:flex md:gap-6 p-3">
          <section className="md:flex-1">
            <label htmlFor="nombreDoctor" className="font-bold text-xl block">
              Nombre
            </label>
            <input
              id="nombreDoctor"
              name="nombreDoctor"
              type="text"
              placeholder="Nombre completo"
              autoComplete="name"
              className="border border-gray-400 rounded-md outline-none px-2 py-1 w-5/6 mb-2"
              required
              value={nombreDoctor}
              onChange={(e) => setNombreDoctor(e.target.value)}
            />

            <label htmlFor="correo" className="font-bold text-xl block">
              Correo
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              placeholder="correo@ejemplo.com"
              autoComplete="email"
              className="border border-gray-400 rounded-md outline-none px-2 py-1 w-5/6 mb-2"
              required
              value={correoDoctor}
              onChange={(e) => setCorreoDoctor(e.target.value)}
            />

            <label htmlFor="telefono" className="font-bold text-xl block">
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              placeholder="+53 5xxxx xxxx"
              autoComplete="tel"
              value={telefonoDoctor}
              onChange={(e) => setTelefonoDoctor(e.target.value)}
              className="border border-gray-400 rounded-md outline-none px-2 py-1 w-5/6 mb-2"
            />
          </section>

          <section className="md:flex-1 mt-4 md:mt-0">
            <label htmlFor="especialidad" className="font-bold text-xl block">
              Especialidad
            </label>
            <input
              id="especialidad"
              name="especialidad"
              type="text"
              placeholder="Ej. Cardiología"
              value={especialidadDoctor}
              onChange={(e)=>setEspecialidadDoctor(e.target.value)}
              className="border border-gray-400 rounded-md outline-none px-2 py-1 w-5/6 mb-2"
            />

            <label className="font-bold text-xl block mt-2">Usuario</label>
            <h4 className="text-lg mb-2">user_1</h4>

            <label className="font-bold text-xl block mt-2">Contraseña</label>
            <h4 className="text-lg mb-2">
              0000 por defecto (debe cambiarse al primer inicio de sesión)
            </h4>
          </section>
        </div>

        {/* Acciones */}
        <footer className="flex justify-around my-2 px-3">
          <button
            type="button"
            onClick={cerrar}
            className="border-2 border-red-600 rounded-full text-red-600 font-semibold px-3 py-1 uppercase hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-900"
          >
            Atrás
          </button>

          <button
            type="submit"
            className="bg-blue-600 rounded-full px-3 py-1 text-white uppercase hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
          >
            Agregar
          </button>
        </footer>
      </form>
    </div>,
    document.body,
  );
};

export default AgregarDoctor;
