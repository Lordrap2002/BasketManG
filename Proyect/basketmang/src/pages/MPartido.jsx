import React from 'react';
import MTitulo from '../components/MTitulo/MTitulo';
import MCBox from '../components/MPartido/MCBox';
import MJRBox from '../components/MPartido/MJRBox';
import PABox from '../components/MPartido/PABox';
import MPartidoButton2 from '../components/MPartido/MPartidoButton2';
import "./MPartido.css"

function MPartido(){
	return(
		<div>
			<div className='pstyle'>
				<MTitulo className="titulopartido" nombre="Partido"></MTitulo>
			</div>
			<div className='pbottom'>
				<MCBox></MCBox>
				<MJRBox></MJRBox>
			</div>
			<div className='pbottomRa'></div>
			<div className='pbottom'>
				<PABox></PABox>
				<div className="padis">
        			<MPartidoButton2 buttonName="Cambiar Jugador"></MPartidoButton2>
        			<MPartidoButton2 buttonName="Cambiar Estrategia"></MPartidoButton2>
        			<MPartidoButton2 buttonName="Time Out"></MPartidoButton2>
      			</div>
			</div>
		</div>
	)
}

export default MPartido;