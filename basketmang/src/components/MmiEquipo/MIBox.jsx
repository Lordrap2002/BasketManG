import "./MIBox.css"
import MButton from './MButton';

function MIBox(props){
  return(
    <nav className="tIbox">
      <div className="tItitle">
        Inventario
      </div>
      <div className="tIitems">
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

export default MIBox;