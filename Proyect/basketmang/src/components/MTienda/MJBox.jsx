import "./MJBox.css"
import MFButton from "../MButton/MFButton";

function MJBox(props){
  return(
    <nav className="tjbox">
      <div className="tjtitle">
        Jugadores
      </div>
      <div className="tjitems">
        <MFButton className="tbutton">
        <img 
				alt='app-logo' 
				className='mHeaderBar-logo'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Basketball_Clipart.svg/240px-Basketball_Clipart.svg.png'/>
        </MFButton>
        <MFButton className="tbutton"></MFButton>
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

export default MJBox;