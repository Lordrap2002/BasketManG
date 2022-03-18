import {useEffect, useState} from "react";
import './MButton.css';
import {Link} from "react-router-dom";
import {setShowLogin} from "../store/actions/ui";
import {connect} from "react-redux";

function Mbutton(props){
  function onButtonClicked(){
    console.log(props);
    props.setShowLogin(props);
    //props.onButtonClicked();
  }
  return(
    <button className='myButton1' onClick={() => {onButtonClicked();}}>
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

export default connect(null, mapActionsToProps)(Mbutton);