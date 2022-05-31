import "./PABox.css"
import MPartidoButton2 from "./MPartidoButton2";

function PABox(props){
  return(
    <nav className="pabox">
      <div className="patitle">
        Partido
      </div>
      <div className="paitems">
        <div className="taxt">
          Quedan 3 minutos y 11 segundos en el juego. 
        </div>
        <div className="taxt">
          Kobe lleva la pelota por la izquierda, de espaldas a la canasta. 
        </div>
        <div className="taxt">
          Examina la situación. Kobe gira, conduce y salta a la canasta, quitándose a dos defensores. 
        </div>
        <div className="taxt">
          Hace un lay-up, pone a los Lakers a 8 puntos. 
        </div>
        <div className="taxt">
          Después de una jugada de Utah, los Lakers vuelven a perder por 10. Kobe, en el ala izquierda pero ahora frente a su defensor, dribla de lado a lado. 
        </div>
        <div className="taxt">
          Se dirige hacia el centro, luego gira y se lanza al aro, obteniendo una falta. 
        </div>
        <div className="taxt">
          Se planta en la línea, mete ambos tiros libres.
        </div>
      </div>
    </nav>
  );
}

export default PABox;