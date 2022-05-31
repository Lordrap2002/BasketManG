import "./MJBox.css"
import MFButton from "../MButton/MFButton";
import axios from 'axios';
import { useState, useEffect} from 'react';
import {setPrecio, setShowComprar, setMonedas} from "../../store/actions/ui";
import {connect} from "react-redux";


function MJBox(props){
  const [datos, setDatos] = useState([{"foto":"","precio":10,"codigo_jugador":1},{"foto":"","precio":30,"codigo_jugador":2},{"foto":"","precio":54,"codigo_jugador":3},{"foto":"","precio":30,"codigo_jugador":4},{"foto":"","precio":34,"codigo_jugador":5},{"foto":"","precio":12,"codigo_jugador":6},{"foto":"","precio":50,"codigo_jugador":7},{"foto":"","precio":27,"codigo_jugador":8}]);
  const [aceptado, setAceptado] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5050/fotosPrecio_jugadores").then((response)=>{
			  setDatos(response.data);
		  });
  });

  function verificarCompra(){
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
  }

  return(
    <nav className="tjbox">
      <div className="tjtitle">
        Jugadores
      </div>
      <div className="tjitems">
        {datos.map(d => {
					return <MFButton key={d.codigo_jugador} className="tbutton" tienda="true" valor={d.precio} code={d.codigo_jugador} url={d.foto}></MFButton>
				})}
      </div>
      {props.showComprar ?
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
        :null}
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

export default connect(mapStatesToProps, mapActionsToProps)(MJBox);