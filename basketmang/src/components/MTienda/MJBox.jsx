import "./MJBox.css"
import MButton from './MButton';

function MJBox(props){
  return(
    <nav className="tjbox">
      <div className="tjtitle">
        Jugadores
      </div>
      <div className="tjitems">
        <MButton></MButton>
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