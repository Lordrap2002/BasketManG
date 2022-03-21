import React from 'react';
import MTitulo from '../components/MEstadisticas/MTitulo';
import MEQBox from '../components/MEstadisticas/MEQBox';
import MJUBox from '../components/MEstadisticas/MJUBox';
import MRBox from '../components/MEstadisticas/MRBox';
import "./MEstadisticas.css"

function MEstadisticas(){
	return(
		<div className='ESstyle'>
			<MTitulo></MTitulo>
			<div className='ESbottom'>
				<MJUBox></MJUBox>
				<MEQBox></MEQBox>
				<MRBox></MRBox>
			</div>
		</div>
	)
}

export default MEstadisticas;