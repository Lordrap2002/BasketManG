import React from 'react';
import MTitulo from '../components/MmiEquipo/MTitulo';
import MJIBox from '../components/MmiEquipo/MJIBox';
import MIBox from '../components/MmiEquipo/MIBox';
import MJBBox from '../components/MmiEquipo/MJBBox';
import "./MmiEquipo.css"

function MmiEquipo(){
	return(
		<div className='estyle'>
			<MTitulo></MTitulo>
			<div className='ebottom'>
				<div className='eright'>
				<MJIBox></MJIBox>
				<MJBBox></MJBBox>
				</div>
				<div className='eleft'>
				<MIBox></MIBox>
				</div>
				
			</div>
		</div>
	)
}

export default MmiEquipo;