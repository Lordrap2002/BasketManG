import "./MEQBox.css"
import MTButton from "../MButton/MTButton";
import axios from 'axios';
import {connect} from "react-redux";
import { useState, useEffect} from 'react';

function MEQBox(props){
  return(
    <nav className="EQbox">
      <div className="EQtitle">
        Equipo
      </div>
      {props.user !== -1 ?
        <div className="EQitems">
        <MTButton className="hbutton"></MTButton>
          <MTButton className="hbutton"></MTButton>
          <MTButton className="hbutton"></MTButton>
          <MTButton className="hbutton"></MTButton>
          <MTButton className="hbutton"></MTButton>
        </div>
        :
        <div>
          Inicia sesión primero
        </div>
        }
    </nav>
  );
}

const mapStatesToProps = (state) => {
	return{
		user: state.uiReducer.user
	};
}

export default connect(mapStatesToProps)(MEQBox);