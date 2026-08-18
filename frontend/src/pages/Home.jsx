import Header from '../componets/Header';
import Footer from '../componets/Footer';
import { Link } from 'react-router-dom';
import MenuModal from '../componets/MenuModal';
import { useState, useEffect } from 'react';

//Propósito: Landing page de la página

const Home = () => {

  //cambiar por el arreglo del fatch con el backend
  const doctores = [
    {
      id: 1,
      nombre: 'Dr. Agapito Resóplez',
      especialidad: 'Cardiólogo',
      foto: '/img/doctor1.jpg',
    },
    {
      id: 2,
      nombre: 'Dra. María Silvia',
      especialidad: 'Pediatra',
      foto: '/img/Doctora.jpg',
    },
  ];

  const [indice, setIndice]=useState(0);

  useEffect(()=>{
    const intervalo = setInterval(()=>{
      setIndice((prev)=>(prev+1)%doctores.length)
    },3000)
    return ()=> clearInterval(intervalo)
  }, [doctores.length])

  const doctorActual = doctores[indice]

  const [nombreComentario, setNombreComentario] = useState('');
  const [correoComentario, setCorreoComentario] = useState('');
  const [opinionComentario, setOpinionComentario] = useState('');
  const [menuAbierto, setMenuAbierto] = useState(false)
  console.log(opinionComentario,nombreComentario,correoComentario)

const handleSubmit = (e)=> {
  e.preventDefault();
  setNombreComentario('');
  setCorreoComentario('');
  setOpinionComentario('');
  console.log('enviando')
}

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" abrirMenu = {()=>setMenuAbierto(true)}/>

      <main className="flex flex-1 flex-col items-center">
        <div className="flex flex-col w-full px-16 md:flex-row items-center justify-between lg:gap-24 max-w-4xl">
          {/* Tarjeta de doctor */}
          <figure className="flex flex-col items-center md:order-2 w-full lg:w-auto">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-full">
              <div className="h-36 w-36 lg:h-52 lg:w-52 rounded-full overflow-hidden">
                <img
                  src={doctorActual.foto}
                  alt="Foto del doctor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <figcaption className="text-center mt-1">
              <h3 className="text-lg font-semibold">{doctorActual.nombre}</h3>
              <h4 className="text-lg">{doctorActual.especialidad}</h4>
            </figcaption>
          </figure>

          {/* Bloque principal de texto */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl mt-4 md:mt-0 font-bold text-teal-600 lg:text-3xl lg:mt-10">
              Tú salud,
            </h2>
            <h2 className="text-2xl mb-4 md:mb-0 lg:mb-10 lg:text-3xl font-bold text-blue-600">
              nuestra prioridad.
            </h2>
            <h3 className="hidden md:block lg:mb-10 lg:text-xl">
              Atención médica experta, cercana y personalizada en un entorno
              moderno y acogedor.
            </h3>

            <Link
              to="/solicitud"
              className="bg-blue-600 text-white rounded-full py-1 px-5 hover:scale-105 transition-all hidden lg:block mb-2 outline-none focus-visible:ring-2 focus-visible:ring-blue-950"
            >
              Solicitar Cita
            </Link>
          </div>
        </div>

        {/* Formulario de opinión */}
        <form
          onSubmit={handleSubmit}
          action=""
          className="mt-2 lg:w-full max-w-4xl"
          aria-label="Formulario de opinión"
        >
          <label htmlFor="nombre" className="text-lg text-teal-950">
            Déjanos tu opinión
          </label>

          <div className="border-gray-300 border p-4 rounded-md">
            <div className="md:flex lg:justify-between">
              <div className="lg:flex-[2]">
                <div className="relative p-4">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    autoComplete="name"
                    value={nombreComentario}
                    onChange={(e) => setNombreComentario(e.target.value)}
                    className="peer w-full border-b-2 border-teal-800 px-2 text-lg placeholder-transparent focus:border-teal-300 focus:outline-none bg-transparent"
                  />
                  <label
                    htmlFor="nombre"
                    className="absolute left-4 -top-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Nombre
                  </label>
                </div>

                <div className="relative p-4">
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="Correo"
                    autoComplete="email"
                    value={correoComentario}
                    onChange={(e) => setCorreoComentario(e.target.value)}
                    className="peer w-full border-b-2 border-teal-800 px-2 text-lg placeholder-transparent focus:border-teal-300 focus:outline-none bg-transparent"
                  />
                  <label
                    htmlFor="correo"
                    className="absolute left-4 -top-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Correo
                  </label>
                </div>
              </div>

              <div className="relative p-4 lg:flex-[3]">
                <textarea
                  id="opinion"
                  name="opinion"
                  placeholder="Tu opinión"
                  value={opinionComentario}
                  onChange={(e) => setOpinionComentario(e.target.value)}
                  className="peer h-13 lg:h-24 w-full border-b-2 border-teal-800 px-2 text-base placeholder-transparent focus:border-teal-300 focus:outline-none bg-transparent resize-none"
                />
                <label
                  htmlFor="opinion"
                  className="absolute left-4 -top-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-9 lg:peer-placeholder-shown:top-20 peer-placeholder-shown:text-base peer-focus:-top-1 lg:peer-focus:-top-1 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Tu opinión
                </label>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-full px-3 py-1 hover:scale-105 transition-all outline-none focus-visible:ring-2 focus-visible:ring-blue-950"
              >
                Enviar opinión
              </button>
            </div>
          </div>
        </form>
      </main>

      <Footer className="flex-none" />
      {menuAbierto && <MenuModal cerrarMenu = {()=> setMenuAbierto(false)}/>}
    </div>
  );
};

export default Home;
