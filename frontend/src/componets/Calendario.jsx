import { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Calendar.css';

const Calendario = ({value, onChange, resetTrigger}) => {

  const [fecha, setFecha] = useState(new Date());
  const [mesVisible, setMesVisible] = useState(new Date());
  const resetAnterior = useRef(resetTrigger)
  const fechaE = fecha.toLocaleDateString ("es-Es", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  useEffect(()=>{
    if (resetTrigger !== resetAnterior.current){
      resetAnterior.current = resetTrigger
      setMesVisible(new Date());
    }
  },[resetTrigger])

  return (
    <div>
      <div className="w-56">
        <Calendar
          className="rounded-xl shadow-md"
          tileClassName={()=> "p-1 leading-thight"}
          onChange={onChange}
          value={value}
          activeStartDate={mesVisible}
          onActiveStartDateChange={({activeStartDate})=> setMesVisible(activeStartDate)}
          locale="es-ES"
          formatShortWeekday={(locale, date)=>
            date.toLocaleDateString("es-Es", {weekday: "short"}).charAt(0)
          }
        />
        <p className="mt-1">{fechaE}</p>
      </div>
    </div>
  );
};

export default Calendario;
