import ReactDOM from 'react-dom'

const MenuModal = () => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 w-full min-h-screen bg-teal-800 md:w-80 lg:hidden">
      <div className='flex flex-col pt-10'>
        <button>Inicio</button>
        <button>Nosotros</button>
        <button>Autenticarse</button>
        <button>Solicitudes</button>
        <button>Doctores</button>
        <button>Perfil</button>
      </div>
    </div>,
    document.body,
  );
};

export default MenuModal
