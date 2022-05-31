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
    <button className={`${props.className}`} url={props.url} onClick={() => {onButtonClick();}}>
      <img 
				alt='prueba'
				className='pruebita'
				src={props.url}/>
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