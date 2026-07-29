import Select from "react-select";

const opciones = [
  { value: 'cardiologia', label: 'Cardiología' },
  { value: 'ortopedia', label: 'Ortopedia' },
  { value: 'otorrinonaringologia', label: 'Otorrinonaringología' },
  { value: 'psiquiatria', label: 'Psiquiatría' },
];

const EspecialidadSelect = () => {

  return (
    <>
      <div className="border border-teal-950 rounded-md w-full focus:outline-none">
        <Select options={opciones} noOptionsMessage={() => "Especialidad no disponible"}/>
      </div>
    </>
  );
}

export default EspecialidadSelect
