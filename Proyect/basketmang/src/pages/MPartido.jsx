import React from 'react';
import MTitulo from '../components/MTitulo/MTitulo';
import MCBox from '../components/MPartido/MCBox';
import MRBox from '../components/MPartido/MRBox';
import "./MPartido.css"

function MPartido(){
	return(
		<div className='pstyle'>
			<MTitulo className="titulopartido" nombre="Partido"></MTitulo>
			<div className='pbottom'>
				<MCBox></MCBox>
			</div>
		</div>
	)
}

export default MPartido;