import React from 'react';
import MTitulo from '../components/MTitulo/MTitulo';
import MJBox from '../components/MHelp/MJBox';
import MEBox from '../components/MHelp/MEBox';
import "./MHelp.css"

function MHelp(){
	return(
		<div className='hstyle'>
			<MTitulo className="titulohelp" nombre="Tutoriales"></MTitulo>
			<div className='hbottom'>
				<MJBox></MJBox>
				<MEBox></MEBox>
			</div>
		</div>
	)
}

export default MHelp;