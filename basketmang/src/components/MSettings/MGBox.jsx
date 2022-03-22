import "./MGBox.css"
import MTButton from "../MButton/MTButton";

function MGBox(props){
  return(
    <nav className="sgbox">
      <div className="sgtitle">
        Jugadores
      </div>
      <div className="sgitems">
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

export default MGBox;