import React from 'react';
import MTitulo from '../components/MTitulo/MTitulo';
import MJIBox from '../components/MmiEquipo/MJIBox';
import MIBox from '../components/MmiEquipo/MIBox';
import MJBBox from '../components/MmiEquipo/MJBBox';
import "./MmiEquipo.css";

function MmiEquipo(){
	return(
		<div className='estyle'>
			<MTitulo className="tituloMiEquipo" nombre="Grabaciones"></MTitulo>
			<div className='ebottom'>
				<MJIBox></MJIBox>
				<MJBBox></MJBBox>
			</div>
		</div>
		
	)
}

export default MmiEquipo;