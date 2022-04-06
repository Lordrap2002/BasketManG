import "./MEBox.css"
import MTButton from "../MButton/MTButton";

function MEBox(props){
  return(
    <nav className="hebox">
      <div className="hetitle">
        Equipo
      </div>
      <div className="heitems">
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

export default MEBox;