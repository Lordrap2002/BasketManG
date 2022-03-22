import {useState} from "react";
import "./MTitulo.css"

function MTitulo(props){
  const [showRegister, setShowRegister] = useState(false);
  return(
    <nav className="tituloEstadisticas">
      Estadísticas
    </nav>
  );
}

export default MTitulo;