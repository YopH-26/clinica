import Header from "../componets/Header"
import Footer from "../componets/Footer"

const Nosotros = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" />
      <main className="flex-1">
        <section>
          <div className="bg-black relative h-56 w-full">
            <img
              src="/img/hero.jpg"
              alt="imagen-hero"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </section>
        <div className="flex flex-col items-center md:order-2 w-full lg:w-auto">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-1 rounded-full">
            <div className="h-36 w-36 lg:h-52 lg:w-52 rounded-full overflow-hidden">
              <img src="/img/doctor1.jpg" alt="doctor" />
            </div>
          </div>
          <h3 className="inline-block text-lg font-semibold mt-1">
            Dr. Agapito Resóplez
          </h3>
          <h4 className="text-lg">Cardiólogo</h4>
        </div>
        <div className="flex flex-col items-center md:order-2 w-full lg:w-auto">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-1 rounded-full">
            <div className="h-36 w-36 lg:h-52 lg:w-52 rounded-full overflow-hidden">
              <img src="/img/doctor1.jpg" alt="doctor" />
            </div>
          </div>
          <h3 className="inline-block text-lg font-semibold mt-1">
            Dr. Agapito Resóplez
          </h3>
          <h4 className="text-lg">Cardiólogo</h4>
        </div>
      </main>
      <Footer className="flex-none" />
    </div>
  );
}

export default Nosotros
