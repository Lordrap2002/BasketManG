import React from 'react';
import MTitulo from '../components/MTitulo/MTitulo';
import MJBox from '../components/MTienda/MJBox';
import MTBox from '../components/MTienda/MTBox';
import "./MTienda.css"

function MTienda(){
	return(
		<div className='tstyle'>
			<div className='tback'></div>
			<div className='tfront'>
				<MTitulo className="titulotienda" nombre="Tienda"></MTitulo>
				<div className='tbottom'>
					<MJBox></MJBox>
					<MTBox></MTBox>
				</div>
			</div>
		</div>
	)
}

export default MTienda;