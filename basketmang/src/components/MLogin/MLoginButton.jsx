import './MLoginButton.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function MLoginButton(props){
  function onButtonClick(){
  }
  return(
    <button className='loginmyButton1' onClick={() => {onButtonClick();}}>
      { props.href ?
        <a
          className='loginmyButton-text'
          href={props.href}>
          {props.buttonName}
        </a>
        : props.to ?
        <Link to={props.to} className='loginmyButton-text'>
          {props.buttonName}
        </Link>
        :
        <span className='loginmyButton-text'>
          {props.buttonName}
        </span>
      }
    </button>
  );
}

export default MLoginButton;