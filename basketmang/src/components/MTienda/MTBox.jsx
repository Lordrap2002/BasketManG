import "./MTBox.css"
import MButton from './MButton';

function MTBox(props){
  return(
    <nav className="ttbox">
      <div className="tttitle">
        Técnicas
      </div>
      <div className="ttitems">
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

export default MTBox;