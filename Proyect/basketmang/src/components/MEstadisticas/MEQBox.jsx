import "./MEQBox.css"
import MTButton from "../MButton/MTButton";
import axios from 'axios';
import {connect} from "react-redux";
import { useState, useEffect} from 'react';

function MEQBox(props){
  const [datos, setDatos] = useState([]);
  const [result, setResult] = useState([0,0,0,0]);
	useEffect(() => {
    axios.get("http://localhost:5050/datos_jugadores/" + props.user).then((response)=>{
      setDatos(response.data);
      var data = response.data;
      var rP = 0, rA = 0, rD = 0, rR = 0, rN = 0;
      for(var i = 0; i < data.length; i++){      
          rP = rP + data[i].precio;
          rA = rA + data[i].ataque;
          rD = rD + data[i].defensa;
          rR = rR + data[i].resistencia;     
          rN = rN + data[i].poder;
      }
      rN = rN / data.length;
      setResult([rP,rA,rD,rR,rN]);
    });
	  }, [props.user]);
  return(
    <nav className="EQbox">
      <div className="EQtitle">
        Equipo
      </div>
      {props.user !== -1 ?
        <div className="EQitems">
          <MTButton className="hbutton" text={"Precio total del equipo: " + result[0]}></MTButton>
          <MTButton className="hbutton" text={"Total de ataque: " + result[1]}></MTButton>
          <MTButton className="hbutton" text={"Total de defensa: " + result[2]}></MTButton>
          <MTButton className="hbutton" text={"Total de resistencia: " + result[3]}></MTButton>
          <MTButton className="hbutton" text={"Nivel promedio: " + result[4]}></MTButton>
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