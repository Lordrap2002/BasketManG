import './MMenuButton.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function MMenuButton(props){
  function onButtonClick(){
  }
  return(
    <button className='myButton2' onClick={() => {onButtonClick();}}>
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

/*const mapActionsToProps = {
  setShowLogin
};*/

export default /*connect(null, mapActionsToProps)*/(MMenuButton);