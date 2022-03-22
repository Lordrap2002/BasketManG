import React from 'react';
import MTitulo from '../components/MPartido/MTitulo';
import MCBox from '../components/MPartido/MCBox';
import MRBox from '../components/MPartido/MRBox';
import "./MPartido.css"

function MPartido(){
	return(
		<div className='pstyle'>
			<MTitulo></MTitulo>
			<div className='pbottom'>
				<MCBox></MCBox>
			</div>
		</div>
	)
}

export default MPartido;