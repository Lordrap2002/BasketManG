import "./MJBox.css"
import MFButton from "../MButton/MFButton";
import axios from 'axios';
import { useState, useEffect} from 'react';
import {connect} from "react-redux";

function MJBox(props){
  const [datos, setDatos] = useState([{"foto":"","precio":10,"codigo_jugador":1},{"foto":"","precio":30,"codigo_jugador":2},{"foto":"","precio":54,"codigo_jugador":3}]);
  //const [aceptado, setAceptado] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5050/fotosPrecio_jugadores").then((response)=>{
			  setDatos(response.data);
		  });
  });

  /*function verificarCompra(){
    var dinero = 0;
    axios.get("http://localhost:5050/usuarios/" + props.user).then((response)=>{
			  dinero = response.data.data[0].dinero;
        if(dinero >= props.precio){
          var id = 0;
          axios.get("http://localhost:5050/enlace").then((response)=>{
            id = response.data.length + 1;
            var text = "http://localhost:5050/comprar_jugador/" + props.user + "/" + props.jugador + "/" + id;
            axios.get(text).then((response)=>{});
            var text2 = "http://localhost:5050/quitar_dinero/" + props.user + "/" + props.precio;
            axios.get(text2).then((response)=>{});
            props.setMonedas(dinero - props.precio);
          });
          props.setShowComprar(false);
        }else{
          setAceptado(false);
        }
		  });
  }

  function reset(){
    props.setShowComprar(false);
    setAceptado(true);
  }*/

  return(
    <nav className="tjbox">
      <div className="tjtitle">
        Pedidos Activos
      </div>
      {props.user !== -1 ?
          <div className="tjitems">
            <MFButton className="tbutton"></MFButton>
            <MFButton className="t1button"></MFButton>
            <MFButton className="tbutton"></MFButton>
          </div>
        :
        <div className="ttNoLogin">
          Inicia sesión primero
        </div>
        }
      {/*props.showComprar ?
        props.user !== -1 ?
          <div className="compra">
            El jugador vale:{props.precio} ¿Quieres comprarlo?
            {!aceptado ?
              <div>Dinero insuficiente</div>
              :null}
            <button className='compra1' onClick={() => verificarCompra()}>
              Aceptar
            </button>
            <button className='compra1' onClick={() => reset()}>
              Cancelar
            </button>
          </div>
          :null
            :null*/}
    </nav>
  );
}

/*const mapActionsToProps = {
  setShowComprar,
  setPrecio,
  setMonedas
};*/

const mapStatesToProps = (state) => {
	return{
		user: state.uiReducer.user
	};
}

export default connect(mapStatesToProps/*, mapActionsToProps*/)(MJBox);