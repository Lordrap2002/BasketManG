import "./MRBox.css"
import MTButton from "../MButton/MTButton";
import axios from 'axios';
import {connect} from "react-redux";
import { useState, useEffect} from 'react';

function MRBox(props){
  return(
    <nav className="Rbox">
      <div className="Rtitle">
        Rendimiento
      </div>
      {props.user !== -1 ?
        <div className="Ritems">
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

export default connect(mapStatesToProps)(MRBox);