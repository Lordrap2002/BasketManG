import "./MPBox.css"
import MTButton from "../MButton/MTButton";

function MPBox(props){
  return(
    <nav className="spbox">
      <div className="sptitle">
        Grabaciones
      </div>
      <div className="spitems">
        <MTButton className="sbutton" text="Max # de Activas en pantalla: 5"></MTButton>
        <MTButton className="sbutton" text="Max # de Pendientes en pantalla: 8"></MTButton>
        <MTButton className="sbutton" text="Confirmar antes de cancelar: Si"></MTButton>
        <MTButton className="sbutton" text="Ordenar por: Fecha"></MTButton>
      </div>
    </nav>
  );
}

export default MPBox;