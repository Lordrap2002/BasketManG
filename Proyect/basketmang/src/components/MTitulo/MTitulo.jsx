import {useState} from "react";
import "./MTitulo.css"

function MTitulo(props){
  const [titulo, setTitulo] = useState(props.nombre);
  return(
    <nav className={`${props.className}`}>
      {titulo}
    </nav>
  );
}

export default MTitulo;