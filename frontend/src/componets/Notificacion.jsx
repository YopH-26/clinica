
const Notificacion = () => {

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed max-w-xs w-full rounded shadow-md top-6 left-1/2 -translate-x-1/2 bg-green-400"
    >
      <div className="flex items-center gap-3 p-3">
        <p className="flex-1 font-semibold">Todo ok</p>
        <button
          type="button"
          aria-label="Cerrar"
          className="ml-2 p-1 rounded focus:outline-none"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Notificacion;

