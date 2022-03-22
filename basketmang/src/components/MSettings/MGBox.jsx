import "./MGBox.css"
import MButton from './MButton';

function MGBox(props){
  return(
    <nav className="sgbox">
      <div className="sgtitle">
        Jugadores
      </div>
      <div className="sgitems">
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

export default MGBox;