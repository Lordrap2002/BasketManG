import "./MRBox.css"
import MTButton from "../MButton/MTButton";
import axios from 'axios';
import {connect} from "react-redux";
import { useState, useEffect} from 'react';

function MRBox(props){
  const [datos, setDatos] = useState([0,0,0,'-',0]);
	useEffect(() => {
		if(props.user !== -1){
			axios.get("http://localhost:5050/datos_usuarios/" + props.user).then((response)=>{
				setDatos([response.data[0].victorias,response.data[0].partidos,response.data[0].puntaje,response.data[0].liga,response.data[0].nivel]);
			});
		}
	  }, [props.user]);
  return(
    <nav className="Rbox">
      <div className="Rtitle">
        Usuario
      </div>
      {props.user !== -1 ?
        <div className="Ritems">
        <MTButton className="hbutton" text={"Porcetaje de victorias: " + datos[0]}></MTButton>
          <MTButton className="hbutton" text={"Partidos jugados: " + datos[1]}></MTButton>
          <MTButton className="hbutton" text={"Puntaje máximo: " + datos[2]}></MTButton>
          <MTButton className="hbutton" text={"Liga actual: " + datos[3]}></MTButton>
          <MTButton className="hbutton" text={"Nivel: " + datos[4]}></MTButton>
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