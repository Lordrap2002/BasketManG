import {useState} from "react";
import "./MTitulo.css"

function MTitulo(props){
  const [showRegister, setShowRegister] = useState(false);
  return(
    <nav className="titulohelp">
      TUTORIALES
    </nav>
  );
}

export default MTitulo;