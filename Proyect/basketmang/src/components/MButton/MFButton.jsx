import './MFButton.css';
import {Link} from "react-router-dom";

function MFButton(props){
  function onButtonClick(){
  }
  return(
    <button className={`${props.className}`} onClick={() => {onButtonClick();}}>

    </button>
  );
}

export default MFButton;