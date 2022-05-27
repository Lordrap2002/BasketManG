import "./MCBox.css"
import MFButton from "../MButton/MFButton";

function MCBox(props){
  return(
    <nav className="scbox">
      <div className="sctitle">
        Jugadores En Cancha
      </div>
      <div className="scitems">
        <MFButton className="pbutton" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtPwjZseTEgOckZE6-Np6aBBbosC02s6ybw&usqp=CAU"></MFButton>
        <MFButton className="pbutton" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxe3IfNEaTHMsoYyLj7mXZRkiapvwzfn3Suw&usqp=CAU"></MFButton>
        <MFButton className="pbutton" url="https://p.kindpng.com/picc/s/311-3112906_nba-players-png-transparent-png.png"></MFButton>
        <MFButton className="pbutton" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9DSFMZ6aw-9s9iyqVSPu9fddYCbHZem5RA4ZNpkBcvIK8_Vgec8eML2eiOL8RaZaS7DU&usqp=CAU"></MFButton>
        <MFButton className="pbutton" url="https://p.kindpng.com/picc/s/123-1230397_toronto-basketball-player-team-nba-sport-raptors-toronto.png"></MFButton>
      </div>
    </nav>
  );
}

export default MCBox;