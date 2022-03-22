import "./MPBox.css"
import MTButton from "../MButton/MTButton";

function MPBox(props){
  return(
    <nav className="spbox">
      <div className="sptitle">
        Equipo
      </div>
      <div className="spitems">
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

export default MPBox;