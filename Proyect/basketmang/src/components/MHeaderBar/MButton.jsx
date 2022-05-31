import './MButton.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import React, { Component } from 'react';
import logo from './settingslogo.png';

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
          {props.url}
        </a>
        : props.to != '/settings' ?
        <Link to={props.to} className='myButton41-text'>
          {props.buttonName}
        </Link>
        :
        <Link to={props.to} className='myButtonset'>
          <img 
				    alt='prueba'
				    className='myButtonset'
            src={logo}
            //src="url(../../../public/settingslogo.png)"
            />
        </Link>
      }
    </button>
  );
}



export default MButton;