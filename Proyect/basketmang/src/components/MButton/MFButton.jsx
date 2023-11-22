import './MFButton.css';
import {Link} from "react-router-dom";
import {setPrecio, setShowComprar, setJugador} from "../../store/actions/ui";
import {connect} from "react-redux";

function MFButton(props){
  function onButtonClick(){
    if(props.tienda && props.user != -1){
      props.setPrecio(props.valor);
      props.setJugador(props.code);
      props.setShowComprar(true);
    }
  }
  return(
    <button className={`${props.className}`} url={props.url}>
      {props.className === 'tbutton' ?
      <img 
        height="60"
        width="60"
				src='https://static.thenounproject.com/png/3776617-200.png'
        />
        :
        <img 
        height="40"
        width="40"
				src='https://cdn3.iconfinder.com/data/icons/drone-delivery-service/500/yul578_7_top_view_drone_business_logo_silhouette_technology-512.png'
        />
        }
        {props.url !== "hola" ?
        'Tiempo restante: 20 min Batería: 30%'
        :
        'Hora: 3:20pm Lugar: Lago'
        }
        
    </button>
    
  );
}

const mapActionsToProps = {
  setShowComprar,
  setPrecio,
  setJugador
};

const mapStatesToProps = (state) => {
	return{
		user: state.uiReducer.user,
    precio: state.uiReducer.precio,
    showComprar: state.uiReducer.showComprar,
    jugador: state.uiReducer.jugador
	};
}

export default connect(mapStatesToProps, mapActionsToProps)(MFButton);