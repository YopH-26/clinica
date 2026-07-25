import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import Grafico from './Grafico';

const GraficoModal = () => {
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-4 right-4 w-auto bg-white rounded-lg pr-8 pt-4 h-auto z-50 pointer-events-auto">
          <Grafico/>
        </div>
      </div>
    </>,
    document.body,
  );
};

export default GraficoModal;
