import "./MIBox.css"
import MFButton from "../MButton/MFButton";

function MIBox(props){
  return(
    <nav className="tIbox">
      <div className="tItitle">
        Inventario
      </div>
      <div className="tIitems">
        <MFButton className="ebutton" url="https://www.kreedon.com/wp-content/uploads/2019/06/Satnam-Singh-kreedon-1200x900.png"></MFButton>
        <MFButton className="ebutton" url="https://png.pngitem.com/pimgs/s/311-3112911_lebron-james-download-png-image-transparent-png.png"></MFButton>
        <MFButton className="ebutton" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Jlll7iz4pHOCCTz291JqQw1ydt00LdAysg&usqp=CAU"></MFButton>
        <MFButton className="ebutton" url="https://www.kindpng.com/picc/m/167-1675094_nba-player-png-basketball-player-transparent-background-png.png"></MFButton>
        <MFButton className="ebutton" url="https://png.pngitem.com/pimgs/s/143-1435130_nba-player-png-transparent-png.png"></MFButton>
        <MFButton className="ebutton" url="https://smallimg.pngkey.com/png/small/50-504490_nba-on-tnt-on-twitter-mixed-together-nba.png"></MFButton>
      </div>
    </nav>
  );
}

export default MIBox;