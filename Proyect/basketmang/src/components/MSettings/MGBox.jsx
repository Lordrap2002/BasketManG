import "./MGBox.css"
import MTButton from "../MButton/MTButton";

function MGBox(props){
  return(
    <nav className="sgbox">
      <div className="sgtitle">
        Pedidos
      </div>
      <div className="sgitems">
        <MTButton className="sbutton" text="Max # de Activos en pantalla: 5"></MTButton>
        <MTButton className="sbutton" text="Max # de Pendientes en pantalla: 8"></MTButton>
        <MTButton className="sbutton" text="Confirmar antes de cancelar: Si"></MTButton>
        <MTButton className="sbutton" text="Ordenar por: Fecha"></MTButton>
      </div>
    </nav>
  );
}

export default MGBox;