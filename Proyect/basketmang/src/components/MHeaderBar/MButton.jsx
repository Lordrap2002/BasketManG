import './MButton.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import React, { Component } from 'react';

function MButton(props){
  function onButtonClick(){
  }
  return(
    <button className='myButton41' onClick={() => {onButtonClick();}}>
      { props.href ?
        <a
          className='myButton41-text'
          href={props.href}>
          {props.buttonName}
        </a>
        : props.to ?
        <Link to={props.to} className='myButton41-text'>
          {props.buttonName}
        </Link>
        :
        <span className='myButton41-text'>
          {props.buttonName}
        </span>
      }
    </button>
  );
}



export default MButton;