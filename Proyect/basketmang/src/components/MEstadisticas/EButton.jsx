import './EButton.css';
import {Link} from "react-router-dom";

function EButton(props){
  function onButtonClick(){
  }
  return(
    <button className='EQbutton' onClick={() => {onButtonClick();}}>
      { props.href ?
        <a
          className='myButton-text'
          href={props.href}>
          {props.buttonName}
        </a>
        : props.to ?
        <Link to={props.to} className='myButton-text'>
          {props.buttonName}
        </Link>
        :
        <span className='myButton-text'>
          {props.buttonName}
        </span>
      }
    </button>
  );
}

export default EButton;