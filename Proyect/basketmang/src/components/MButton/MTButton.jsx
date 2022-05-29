import './MTButton.css';
import {Link} from "react-router-dom";

function MTButton(props){
  function onButtonClick(){
  }
  return(
    <button className={`${props.className}`} text={`${props.text}`} onClick={() => {onButtonClick();}}>
      { props.href ?
        <a
          className='hmyButton-text'
          href={props.href}>
          {props.buttonName}
        </a>
        : (props.className=='sbutton' || props.className=='hbutton') && !props.text ?
        <div>
          Lore Ipsum
        </div>
        : props.text ?
        <div>
          {props.text}
        </div>
        :
        <span className='hmyButton-text'>
          {props.buttonName}
        </span>
      }
    </button>
  );
}

export default MTButton;