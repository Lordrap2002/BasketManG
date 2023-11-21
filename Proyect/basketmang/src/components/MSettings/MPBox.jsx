import "./MPBox.css"
import MTButton from "../MButton/MTButton";

function MPBox(props){
  return(
    <nav className="spbox">
      <div className="sptitle">
        Equipo
      </div>
      <div className="spitems">
        <MTButton className="sbutton" text="Nombre"></MTButton>
        <MTButton className="sbutton" text="Color Representativo"></MTButton>
        <MTButton className="sbutton" text="Escudo"></MTButton>
        <MTButton className="sbutton" text="Oufit Representativo"></MTButton>
      </div>
    </nav>
  );
}

export default MPBox;