import "./MTBox.css"
import MFButton from "../MButton/MFButton";

function MTBox(props){
  return(
    <nav className="ttbox">
      <div className="tttitle">
        Técnicas
      </div>
      <div className="ttitems">
        <MFButton className="tbutton"></MFButton>
        <MFButton className="tbutton"></MFButton>
        <MFButton className="tbutton"></MFButton>
        <MFButton className="tbutton"></MFButton>
        <MFButton className="tbutton"></MFButton>
        <MFButton className="tbutton"></MFButton>
      </div>
    </nav>
  );
}

export default MTBox;