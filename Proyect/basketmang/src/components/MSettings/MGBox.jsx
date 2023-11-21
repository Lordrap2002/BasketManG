import "./MGBox.css"
import MTButton from "../MButton/MTButton";

function MGBox(props){
  return(
    <nav className="sgbox">
      <div className="sgtitle">
        Jugadores
      </div>
      <div className="sgitems">
        <MTButton className="sbutton" text="Tamaño del Personaje"></MTButton>
        <MTButton className="sbutton" text="Tipo de Letra"></MTButton>
        <MTButton className="sbutton" text="Tamaño de Letra"></MTButton>
        <MTButton className="sbutton" text="Outfit"></MTButton>
      </div>
    </nav>
  );
}

export default MGBox;