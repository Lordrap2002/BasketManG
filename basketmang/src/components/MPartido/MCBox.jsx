import "./MCBox.css"
import MFButton from "../MButton/MFButton";

function MCBox(props){
  return(
    <nav className="scbox">
      <div className="sctitle">
        Jugadores En Cancha
      </div>
      <div className="scitems">
        <MFButton className="pbutton"></MFButton>
        <MFButton className="pbutton"></MFButton>
        <MFButton className="pbutton"></MFButton>
        <MFButton className="pbutton"></MFButton>
        <MFButton className="pbutton"></MFButton>
      </div>
    </nav>
  );
}

export default MCBox;