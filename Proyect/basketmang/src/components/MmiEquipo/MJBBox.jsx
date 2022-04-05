import "./MJBBox.css"
import MFButton from "../MButton/MFButton";

function MJBBox(props){
  return(
    <nav className="tJBbox">
      <div className="tJBtitle">
        Jugadores En Banca
      </div>
      <div className="tJBitems">
        <MFButton className="ebutton"></MFButton>
        <MFButton className="ebutton"></MFButton>
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

export default MJBBox;