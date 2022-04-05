import "./MJUBox.css"
import MButton from './MButton';

function MJUBox(props){
  return(
    <nav className="JUbox">
      <div className="JUtitle">
        Jugadores
      </div>
      <div className="JUitems">
        <MButton></MButton>
        <MButton></MButton>
        <MButton></MButton>
        <MButton></MButton>
        <MButton></MButton>
      </div>
    </nav>
  );
}

export default MJUBox;