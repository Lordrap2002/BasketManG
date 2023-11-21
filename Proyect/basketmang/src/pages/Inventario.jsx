import React from 'react';
import MTitulo from '../components/MTitulo/MTitulo';
import MEQBox from '../components/Inventario/Disponible';
import MJUBox from '../components/Inventario/EnUso';
import MRBox from '../components/Inventario/Reparación';
import "./Inventario.css"

function Inventario(){
	return(
		<div className='ESstyle'>
			<MTitulo className="tituloEstadisticas" nombre="Inventario"></MTitulo>
			<div className='ESbottom'>
				<MJUBox></MJUBox>
				<MEQBox></MEQBox>
				<MRBox></MRBox>
			</div>
		</div>
	)
}

export default Inventario;