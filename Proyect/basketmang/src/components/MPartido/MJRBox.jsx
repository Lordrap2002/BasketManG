import "./MJRBox.css"
import MFButton from "../MButton/MFButton";
import axios from 'axios';
import {connect} from "react-redux";
import { useState, useEffect} from 'react';

function MJRBox(props){
  const [fotos, setFotos] = useState([]);
	useEffect(() => {
		if(props.user !== -1){
			axios.get("http://localhost:5050/jugadores_usuario/" + props.user).then((response)=>{
				setFotos([response.data[0],response.data[1],response.data[2]]);
        console.log(1)
			});
		}
	  }, [props.user]);
  return(
    <nav className="sjrbox">
      <div className="sjrtitle">
        Jugadores En Banca
      </div>
      {props.user !== -1 ?
        <div className="sjritems">
          {fotos.map(f => {
            return <MFButton key={f.codigo_jugador} className="ebutton" url={f.foto}></MFButton>
          })}
        </div>
        :
        <div className="aNoLogin">
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

export default connect(mapStatesToProps)(MJRBox);