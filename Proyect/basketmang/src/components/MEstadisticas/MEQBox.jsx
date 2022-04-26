import "./MEQBox.css"
import MTButton from "../MButton/MTButton";

function MEQBox(props){
  return(
    <nav className="EQbox">
      <div className="EQtitle">
        Equipo
      </div>
      <div className="EQitems">
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

export default MEQBox;