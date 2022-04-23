import React from 'react';
import MTitulo from '../components/MTitulo/MTitulo';
import MJIBox from '../components/MmiEquipo/MJIBox';
import MIBox from '../components/MmiEquipo/MIBox';
import MJBBox from '../components/MmiEquipo/MJBBox';
import "./MmiEquipo.css";
import simpleParallax from 'simple-parallax-js';

function MmiEquipo(){
	/*var paginas = document.getElementsByClassName('eright');
	new simpleParallax(paginas, {
		scale: 2,
		delay: 1,
		orientation: 'up',
		overflow: true,
		transition: 'cubic-bezier(0,0,0,1)'});*/
	return(
		<div className='estyle'>
			<MTitulo className="tituloMiEquipo" nombre="Mi Equipo"></MTitulo>
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