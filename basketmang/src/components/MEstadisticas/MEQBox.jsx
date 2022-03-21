import "./MEQBox.css"
import MButton from './MButton';

function MEQBox(props){
  return(
    <nav className="EQbox">
      <div className="EQtitle">
        Equipo
      </div>
      <div className="EQitems">
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

export default MEQBox;