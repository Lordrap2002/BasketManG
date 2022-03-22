import "./MEBox.css"
import MButton from './MButton';

function MEBox(props){
  return(
    <nav className="hebox">
      <div className="hetitle">
        Equipo
      </div>
      <div className="heitems">
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

export default MEBox;