import './MPartidoButton2.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function MPartidoButton2(props){
  function onButtonClick(){
  }
  return(
    <button className='myButton9' onClick={() => {onButtonClick();}}>
      { props.href ?
        <a
          className='myButton9-text'
          href={props.href}>
          {props.buttonName}
        </a>
        : props.to ?
        <Link to={props.to} className='myButton9-text'>
          {props.buttonName}
        </Link>
        :
        <span className='myButton9-text'>
          {props.buttonName}
        </span>
      }
    </button>
  );
}

/*const mapActionsToProps = {
  setShowLogin
};*/

export default /*connect(null, mapActionsToProps)*/(MPartidoButton2);