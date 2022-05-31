import "./MJBox.css"
import MTButton from "../MButton/MTButton";

function MJBox(props){
  return(
    <nav className="hjbox">
      <div className="hjtitle">
        Jugadores
      </div>
      <div className="hjitems">
        <MTButton className="sbutton" text="¿Como comprar un jugador?"></MTButton>
        <MTButton className="sbutton" text="¿Como cambiar a un jugador inicial?"></MTButton>
        <MTButton className="sbutton" text="¿Como cambiar de outfit?"></MTButton>
        <MTButton className="sbutton" text="¿Como usar los jugadores del inventario?"></MTButton>
        <MTButton className="sbutton" text="¿Como ver el precio de un jugador?"></MTButton>
        <MTButton className="sbutton" text="¿Puedo devolver un jugador?"></MTButton>
        <MTButton className="sbutton" text="¿Puedo vender un jugador?"></MTButton>
      </div>
    </nav>
  );
}

export default MJBox;