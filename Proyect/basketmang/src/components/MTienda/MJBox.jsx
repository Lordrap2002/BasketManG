import "./MJBox.css"
import MFButton from "../MButton/MFButton";

function MJBox(props){
  return(
    <nav className="tjbox">
      <div className="tjtitle">
        Jugadores
      </div>
      <div className="tjitems">
        <MFButton className="tbutton"></MFButton>
        <MFButton className="tbutton"></MFButton>
        <MFButton className="tbutton"></MFButton>
        <MFButton className="tbutton"></MFButton>
        <MFButton className="tbutton"></MFButton>
        <MFButton className="tbutton"></MFButton>
        <MFButton className="tbutton"></MFButton>
        <MFButton className="tbutton"></MFButton>
      </div>
    </nav>
  );
}

export default MJBox;