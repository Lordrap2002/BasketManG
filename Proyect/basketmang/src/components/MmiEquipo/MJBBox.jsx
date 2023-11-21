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

const mapStatesToProps = (state) => {
	return{
		user: state.uiReducer.user
	};
}

export default connect(mapStatesToProps)(MJBBox);