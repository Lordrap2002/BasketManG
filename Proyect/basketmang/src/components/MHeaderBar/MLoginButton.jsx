import './MLoginButton.css';
import {Link} from "react-router-dom";
import {setShowLogin} from "../../store/actions/ui";
import {connect} from "react-redux";


function MLoginButton(props){
  function onButtonClick(){
    props.setShowLogin(!props.showLogin);
  }
  return(
    <button className='myButton3' onClick={() => {onButtonClick();}}>
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

const mapActionsToProps = {
  setShowLogin
};

const mapStatesToProps = (state) => {
	return{
		showLogin: state.uiReducer.showLogin
	};
}

export default connect(mapStatesToProps, mapActionsToProps)(MLoginButton);