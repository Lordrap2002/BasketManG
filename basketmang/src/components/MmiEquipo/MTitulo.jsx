import {useState} from "react";
import "./MTitulo.css"

function MTitulo(props){
  const [showRegister, setShowRegister] = useState(false);
  return(
    <nav className="tituloMiEquipo">
      Mi Equipo
    </nav>
  );
}

export default MTitulo;