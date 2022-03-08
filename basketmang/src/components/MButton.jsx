import {useEffect, useState} from "react";
import './MButton.css';

function Mbutton(props){
  function onButtonClicked(){
    props.onButtonClicked();
  }
  return(
    <button className='myButton1' onClick={() => {onButtonClicked();}}>{props.buttonName}</button>
  );
}

export default Mbutton;