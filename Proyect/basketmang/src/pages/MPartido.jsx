import React from 'react';
import MTitulo from '../components/MTitulo/MTitulo';
import MCBox from '../components/MPartido/MCBox';
import MJRBox from '../components/MPartido/MJRBox';
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
		</div>
	)
}

export default MPartido;