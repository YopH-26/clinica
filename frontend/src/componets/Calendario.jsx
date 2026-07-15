import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Calendar.css';

const Calendario = () => {

  const [fecha, setFecha] = useState(new Date());
  const fechaE = fecha.toLocaleDateString ("es-Es", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return (
    <div>
      <div className="w-56">
        <Calendar
          className="rounded-xl shadow-md"
          tileClassName={()=> "p-1 leading-thight"}
          onChange={setFecha}
          value={fecha}
          locale="es-ES"
          formatShortWeekday={(locale, date)=>
            date.toLocaleDateString("es-Es", {weekday: "short"}).charAt(0)
          } 
        />
        <p className="mt-2">{fechaE}</p>
      </div>
    </div>
  );
};

export default Calendario;
