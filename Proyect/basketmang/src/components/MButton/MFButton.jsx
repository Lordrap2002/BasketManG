import './MFButton.css';
import {Link} from "react-router-dom";

function MFButton(props){
  function onButtonClick(){
  }
  return(
    <button className={`${props.className}`} url={props.url} onClick={() => {onButtonClick();}}>
      <img 
				alt='prueba'
				className='pruebita'
				src={props.url}/>
    </button>
    
  );
}

export default MFButton;