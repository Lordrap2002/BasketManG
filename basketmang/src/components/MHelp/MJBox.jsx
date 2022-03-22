import "./MJBox.css"
import MTButton from "../MButton/MTButton";

function MJBox(props){
  return(
    <nav className="hjbox">
      <div className="hjtitle">
        Jugadores
      </div>
      <div className="hjitems">
        <MTButton className="hbutton"></MTButton>
        <MTButton className="hbutton"></MTButton>
        <MTButton className="hbutton"></MTButton>
        <MTButton className="hbutton"></MTButton>
        <MTButton className="hbutton"></MTButton>
        <MTButton className="hbutton"></MTButton>
        <MTButton className="hbutton"></MTButton>
      </div>
    </nav>
  );
}

export default MJBox;