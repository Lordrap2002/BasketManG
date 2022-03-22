import "./MIBox.css"
import MFButton from "../MButton/MFButton";

function MIBox(props){
  return(
    <nav className="tIbox">
      <div className="tItitle">
        Inventario
      </div>
      <div className="tIitems">
        <MFButton className="ebutton"></MFButton>
        <MFButton className="ebutton"></MFButton>
        <MFButton className="ebutton"></MFButton>
        <MFButton className="ebutton"></MFButton>
        <MFButton className="ebutton"></MFButton>
        <MFButton className="ebutton"></MFButton>
      </div>
    </nav>
  );
}

export default MIBox;