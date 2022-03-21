import {useState} from "react";
import "./MTitulo.css"

function MTitulo(props){
  const [showRegister, setShowRegister] = useState(false);
  return(
    <nav className="titulosettings">
      CONFIGURACIÓN
    </nav>
  );
}

export default MTitulo;