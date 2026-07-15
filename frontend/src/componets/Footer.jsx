
const Footer = () => {
  return (
    <div>
      <div className="flex my-2 justify-center items-center gap-5">
        <img src="/img/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-5 h-5"/>
        <h3 className="hidden md:block">+53 5555 5555</h3>
        <img src="/img/email-1-svgrepo-com.svg" alt="correo" className="w-6 h-6"/>
        <h3 className="hidden md:block">correo@correo.com</h3>
        <img src="/img/1093167.svg" alt="dirección" className="w-5 h-5"/>
        <h3 className="hidden md:block">Calle 5ta #10</h3>
      </div>
    </div>
  );
}

export default Footer
