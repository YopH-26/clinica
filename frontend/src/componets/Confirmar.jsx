const Confirmar = ({cerrarEliminar}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Texto */}
        <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
          ¿Estás seguro?
        </h3>
        <p className="text-sm text-gray-500 text-center mb-6">
          Esta acción no se puede deshacer. ¿Deseas continuar?
        </p>

        {/* Botones */}
        <div className="flex gap-3">
          <button
          type="button"
            onClick={cerrarEliminar}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Cancelar
          </button>
          <button className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmar;
