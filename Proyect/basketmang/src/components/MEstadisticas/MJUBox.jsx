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
			});
      var minP = 0, minA = 0, minD = 0, minR = 0, minN = 0;
      var rP = '', rA = '', rD = '', rR = '', rN = '';
      for(var i = 0; i < datos.length; i++){
        if(datos[i].precio > minP){
          minP = datos[i].precio;
          rP = datos[i].nombre;
        }
        if(datos[i].ataque > minA){
          minA = datos[i].ataque;
          rA = datos[i].nombre;
        }
        if(datos[i].defensa > minD){
          minD = datos[i].defensa;
          rD = datos[i].nombre;
        }
        if(datos[i].resistencia > minR){
          minR = datos[i].resistencia;
          rR = datos[i].nombre;
        }
        if(datos[i].poder > minN){
          minN = datos[i].poder;
          rN = datos[i].nombre;
        }
      }
      setResult([rP,rA,rD,rR,rN]);
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