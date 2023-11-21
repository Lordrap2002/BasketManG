import "./MTBox.css"
import MFButton from "../MButton/MFButton";
import axios from 'axios';
import { useState, useEffect} from 'react';
import {setPrecio, setShowComprar, setMonedas} from "../../store/actions/ui";
import {connect} from "react-redux";

function MTBox(props){
	const [datos, setDatos] = useState([{"foto":"","precio":10,"codigo_jugador":1},{"foto":"","precio":30,"codigo_jugador":2},{"foto":"","precio":54,"codigo_jugador":3}]);
  useEffect(() => {
    axios.get("http://localhost:5050/fotosPrecio_jugadores").then((response)=>{
			  setDatos(response.data);
		  });
  });
  return(
    <nav className="ttbox">
      <div className="tttitle">
        Pedidos Pendientes
      </div>
      {props.user !== -1 ?
      <div className="ttitems">
        <MFButton className="tbutton" url="https://r9asv1v2iki1zzs4aaqy3fig-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Screenshot-2016-11-22-23.24.58.png"></MFButton>
        <MFButton className="tbutton" url="https://r9asv1v2iki1zzs4aaqy3fig-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Screenshot-2016-11-22-23.24.05.png"></MFButton>
      </div>
      :
      <div className="tttNoLogin">
          Inicia sesión primero
        </div>
        }
    </nav>
  );
}

const mapActionsToProps = {
  setShowComprar,
  setPrecio,
  setMonedas
};

const mapStatesToProps = (state) => {
	return{
		user: state.uiReducer.user,
    precio: state.uiReducer.precio,
    showComprar: state.uiReducer.showComprar,
    jugador: state.uiReducer.jugador,
    monedas: state.uiReducer.monedas,
	};
}

export default connect(mapStatesToProps, mapActionsToProps)(MTBox);