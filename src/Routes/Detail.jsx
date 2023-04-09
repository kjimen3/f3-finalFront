import React from 'react'

const Detalle = ({ match }) => {
  const [odontologo, setOdontologo] = useState(null);

  useEffect(() => {
    // Lógica para obtener el odontólogo
    // específico desde la API y guardarlo en el estado
    const obtenerOdontologo = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
        const data = await response.json();
        setOdontologo(data);
      } catch (error) {}
    }
  }}
  
export default Detail

