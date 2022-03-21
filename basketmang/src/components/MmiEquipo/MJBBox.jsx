import "./MJBBox.css"
import MButton from './MButton';

function MJBBox(props){
  return(
    <nav className="tJBbox">
      <div className="tJBtitle">
        Jugadores En Banca
      </div>
      <div className="tJBitems">
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

export default MJBBox;