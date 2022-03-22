import "./MCBox.css"
import MButton from './MButton';

function MCBox(props){
  return(
    <nav className="scbox">
      <div className="sctitle">
        Jugadores
      </div>
      <div className="scitems">
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

export default MCBox;