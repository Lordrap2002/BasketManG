import "./MJIBox.css"
import MFButton from "../MButton/MFButton";

function MJIBox(props){
  return(
    <nav className="tJIbox">
      <div className="tJItitle">
        Jugadores Iniciales
      </div>
      <div className="tJIitems">
        <MFButton className="ebutton"></MFButton>
        <MFButton className="ebutton"></MFButton>
        <MFButton className="ebutton"></MFButton>
        <MFButton className="ebutton"></MFButton>
        <MFButton className="ebutton"></MFButton>
      </div>
    </nav>
  );
}

export default MJIBox;