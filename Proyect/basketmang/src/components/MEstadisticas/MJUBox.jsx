import "./MJUBox.css"
import MTButton from "../MButton/MTButton";

function MJUBox(props){
  return(
    <nav className="JUbox">
      <div className="JUtitle">
        Jugadores
      </div>
      <div className="JUitems">
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

export default MJUBox;