import "./MJUBox.css"
import MTButton from "../MButton/MTButton";
import axios from 'axios';
import {connect} from "react-redux";
import { useState, useEffect} from 'react';

function MJUBox(props){
  return(
    <nav className="JUbox">
      <div className="JUtitle">
        Jugadores
      </div>
      {props.user !== -1 ?
        <div className="JUitems">
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

export default connect(mapStatesToProps)(MJUBox);