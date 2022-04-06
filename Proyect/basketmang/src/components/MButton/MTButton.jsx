import './MTButton.css';
import {Link} from "react-router-dom";

function MTButton(props){
  function onButtonClick(){
  }
  return(
    <button className={`${props.className}`} onClick={() => {onButtonClick();}}>
      { props.href ?
        <a
          className='hmyButton-text'
          href={props.href}>
          {props.buttonName}
        </a>
        : props.to ?
        <Link to={props.to} className='hmyButton-text'>
          {props.buttonName}
        </Link>
        :
        <span className='hmyButton-text'>
          {props.buttonName}
        </span>
      }
    </button>
  );
}

export default MTButton;