import "./MPBox.css"
import MButton from './MButton';

function MPBox(props){
  return(
    <nav className="spbox">
      <div className="sptitle">
        Equipo
      </div>
      <div className="spitems">
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

export default MPBox;