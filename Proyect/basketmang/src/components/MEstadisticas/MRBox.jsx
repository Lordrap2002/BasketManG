import "./MRBox.css"
import MTButton from "../MButton/MTButton";
import axios from 'axios';
import {connect} from "react-redux";
import { useState, useEffect} from 'react';

function MRBox(props){
  return(
    <nav className="Rbox">
      <div className="Rtitle">
        Usuario
      </div>
      {props.user !== -1 ?
        <div className="Ritems">
        <MTButton className="hbutton" text="Porcetaje de victorias: 65%."></MTButton>
          <MTButton className="hbutton" text="Partidos jugados: 23."></MTButton>
          <MTButton className="hbutton" text="Puntaje máximo: 4358."></MTButton>
          <MTButton className="hbutton" text="Liga actual: Plata II."></MTButton>
          <MTButton className="hbutton" text="Nivel: 8."></MTButton>
        </div>
        :
        <div className="tNoLogin">
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