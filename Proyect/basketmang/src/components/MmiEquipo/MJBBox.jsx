import "./MJBBox.css"
import MFButton from "../MButton/MFButton";
import axios from 'axios';
import {connect} from "react-redux";
import { useState, useEffect} from 'react';

function MJBBox(props){
  const [fotos, setFotos] = useState([]);
	useEffect(() => {
		if(props.user !== -1){
			axios.get("http://localhost:5050/jugadores_usuario/" + props.user).then((response)=>{
				setFotos(response.data);
			});
		}
	}, [props.user]);

  return(
    <nav className="tJBbox">
      <div className="tJBtitle">
        Grabaciones Pendientes
      </div>
      {props.user !== -1 ?
        <div className="tJBitems">
          <MFButton className="t1button" url="hola"></MFButton>
          <MFButton className="t1button" url="hola"></MFButton>
        </div>
        :
        <div className="tttNoLogin">
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

export default connect(mapStatesToProps)(MJBBox);