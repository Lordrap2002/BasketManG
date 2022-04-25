import "./MJRBox.css"
import MFButton from "../MButton/MFButton";

function MJRBox(props){
  return(
    <nav className="sjrbox">
      <div className="sjrtitle">
        Jugadores En Banca
      </div>
      <div className="sjritems">
        <MFButton className="pbutton"></MFButton>
        <MFButton className="pbutton"></MFButton>
        <MFButton className="pbutton"></MFButton>
        <MFButton className="pbutton"></MFButton>
        <MFButton className="pbutton"></MFButton>
      </div>
    </nav>
  );
}

export default MJRBox;