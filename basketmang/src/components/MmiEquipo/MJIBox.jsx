import "./MJIBox.css"
import MButton from './MButton';

function MJIBox(props){
  return(
    <nav className="tJIbox">
      <div className="tJItitle">
        Jugadores Iniciales
      </div>
      <div className="tJIitems">
        <MButton></MButton>
        <MButton></MButton>
        <MButton></MButton>
        <MButton></MButton>
        <MButton></MButton>
      </div>
    </nav>
  );
}

export default MJIBox;