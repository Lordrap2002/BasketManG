import React from 'react';
import MTitulo from '../components/MTienda/MTitulo';
import MJBox from '../components/MTienda/MJBox';
import MTBox from '../components/MTienda/MTBox';
import "./MTienda.css"

function MTienda(){
	return(
		<div className='tstyle'>
			<MTitulo></MTitulo>
			<div className='tbottom'>
				<MJBox></MJBox>
				<MTBox></MTBox>
			</div>
		</div>
	)
}

export default MTienda;