import "./MJBox.css"
import MButton from './MButton';

function MJBox(props){
  return(
    <nav className="hjbox">
      <div className="hjtitle">
        Jugadores
      </div>
      <div className="hjitems">
        <MButton></MButton>
        <MButton></MButton>
        <MButton></MButton>
        <MButton></MButton>
        <MButton></MButton>
        <MButton></MButton>
        <MButton></MButton>

      </div>
    </nav>
  );
}

export default MJBox;