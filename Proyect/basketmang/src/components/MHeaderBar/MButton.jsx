import './MButton.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function MButton(props){
  function onButtonClick(){
  }
  return(
    <button className='hmyButton1' onClick={() => {onButtonClick();}}>
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

export default MButton;