import "./MRBox.css"
import MTButton from "../MButton/MTButton";

function MRBox(props){
  return(
    <nav className="Rbox">
      <div className="Rtitle">
        Rendimiento
      </div>
      <div className="Ritems">
      <MTButton className="hbutton"></MTButton>
        <MTButton className="hbutton"></MTButton>
        <MTButton className="hbutton"></MTButton>
        <MTButton className="hbutton"></MTButton>
        <MTButton className="hbutton"></MTButton>
      </div>
    </nav>
  );
}

export default MRBox;