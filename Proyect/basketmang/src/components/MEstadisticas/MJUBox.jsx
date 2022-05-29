import "./MJUBox.css"
import MTButton from "../MButton/MTButton";
import axios from 'axios';
import {connect} from "react-redux";
import { useState, useEffect} from 'react';

function MJUBox(props){
  const [datos, setDatos] = useState([]);
  const [result, setResult] = useState(['-','-','-','-','-']);
	useEffect(() => {
		if(props.user !== -1){
			axios.get("http://localhost:5050/datos_jugadores/" + props.user).then((response)=>{
				setDatos(response.data);
        var data = response.data;
        var minP = 0, minA = 0, minD = 0, minR = 0, minN = 0;
        var rP = '', rA = '', rD = '', rR = '', rN = '';
        for(var i = 0; i < data.length; i++){
          if(data[i].precio > minP){
            minP = data[i].precio;
            rP = data[i].nombre;
          }
          if(data[i].ataque > minA){
            minA = data[i].ataque;
            rA = data[i].nombre;
          }
          if(data[i].defensa > minD){
            minD = data[i].defensa;
            rD = data[i].nombre;
          }
          if(data[i].resistencia > minR){
            minR = data[i].resistencia;
            rR = data[i].nombre;
          }
          if(data[i].poder > minN){
            minN = data[i].poder;
            rN = data[i].nombre;
          }
        }
        setResult([rP,rA,rD,rR,rN]);
			});
		}
	  }, [props.user]);
  return(
    <nav className="JUbox">
      <div className="JUtitle">
        Jugadores
      </div>
      {props.user !== -1 ?
        <div className="JUitems">
          <MTButton className="hbutton" text={"Jugador más caro: " + result[0]}></MTButton>
          <MTButton className="hbutton" text={"Jugador más ofensivo: " + result[1]}></MTButton>
          <MTButton className="hbutton" text={"Jugador más defensivo: " + result[2]}></MTButton>
          <MTButton className="hbutton" text={"Jugador más resistente: " + result[3]}></MTButton>
          <MTButton className="hbutton" text={"Jugador de mayor nivel: " + result[4]}></MTButton>
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