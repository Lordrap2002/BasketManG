import "./MJBox.css"
import MTButton from "../MButton/MTButton";

function MJBox(props){
  return(
    <nav className="hjbox">
      <div className="hjtitle">
        Jugadores
      </div>
      <div className="hjitems">
        <MTButton className="sbutton"></MTButton>
        <MTButton className="sbutton"></MTButton>
        <MTButton className="sbutton"></MTButton>
        <MTButton className="sbutton"></MTButton>
        <MTButton className="sbutton"></MTButton>
        <MTButton className="sbutton"></MTButton>
        <MTButton className="sbutton"></MTButton>
      </div>
    </nav>
  );
}

export default MJBox;