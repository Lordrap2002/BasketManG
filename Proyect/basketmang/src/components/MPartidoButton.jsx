import './MPartidoButton.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function MPartidoButton(props){
  function onButtonClick(){
  }
  return(
    <button className='myButton4' onClick={() => {onButtonClick();}}>
      { props.href ?
        <a
          className='myButton4-text'
          href={props.href}>
          {props.buttonName}
        </a>
        : props.to ?
        <Link to={props.to} className='myButton4-text'>
          {props.buttonName}
        </Link>
        :
        <span className='myButton4-text'>
          {props.buttonName}
        </span>
      }
    </button>
  );
}

/*const mapActionsToProps = {
  setShowLogin
};*/

export default /*connect(null, mapActionsToProps)*/(MPartidoButton);