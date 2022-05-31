import "./MEBox.css"
import MTButton from "../MButton/MTButton";

function MEBox(props){
  return(
    <nav className="hebox">
      <div className="hetitle">
        Equipo
      </div>
      <div className="heitems">
        <MTButton className="sbutton" text="¿Como cambiar de tecnica?"></MTButton>
        <MTButton className="sbutton" text="¿Como cambiar el nombre de mi equipo?"></MTButton>
        <MTButton className="sbutton" text="¿Puedo crear otro equipo?"></MTButton>
        <MTButton className="sbutton" text="¿Puedo cambiar el país de mi equipo?"></MTButton>
        <MTButton className="sbutton" text="¿Puedo hacer varios equipos al tiempo?"></MTButton>
        <MTButton className="sbutton" text="¿Como cambiar el color del equipo?"></MTButton>
        <MTButton className="sbutton" text="¿Como conseguir un mejor equipo?"></MTButton>
      </div>
    </nav>
  );
}

export default MEBox;