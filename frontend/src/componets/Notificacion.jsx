import ReactDOM from 'react-dom';

const Notificacion = () => {
  return ReactDOM.createPortal(
    <div className="fixed top-8 left-1/2 -translate-x-1/2">
      <h1 className='inline-block bg-green-500/90 text-lg px-4 py-1 rounded-xl'>Todo OK</h1>
    </div>,
    document.body,
  );
};

export default Notificacion;
