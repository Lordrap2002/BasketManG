import React, { useState, useEffect } from 'react';
import "./Inventario.css";
import MTitulo from '../components/MTitulo/MTitulo';
import {connect} from "react-redux";

const Inventario = (props) => {
  const inventoryData = [
	{ id: 1, tipo: 'Robot', estado: 'En uso', imagen: 'https://noticiaslogisticaytransporte.com/wp-content/uploads/2016/04/starship-robot.jpg', carga: 80 },
	{ id: 2, tipo: 'Drone', estado: 'Disponible', imagen: 'https://us.123rf.com/450wm/edlefler/edlefler1706/edlefler170600002/79991848-drone-blanco-con-la-c%C3%A1mara-de-la-acci%C3%B3n-4k-aislada-en-el-fondo-blanco.jpg?ver=6', carga: 20 },
	{ id: 3, tipo: 'Drone', estado: 'Reparación', imagen: 'https://us.123rf.com/450wm/edlefler/edlefler1706/edlefler170600002/79991848-drone-blanco-con-la-c%C3%A1mara-de-la-acci%C3%B3n-4k-aislada-en-el-fondo-blanco.jpg?ver=6', carga: 0 },
	{ id: 4, tipo: 'Robot', estado: 'En uso', imagen: 'https://noticiaslogisticaytransporte.com/wp-content/uploads/2016/04/starship-robot.jpg', carga: 70 },
	{ id: 5, tipo: 'Drone', estado: 'Disponible', imagen: 'https://us.123rf.com/450wm/edlefler/edlefler1706/edlefler170600002/79991848-drone-blanco-con-la-c%C3%A1mara-de-la-acci%C3%B3n-4k-aislada-en-el-fondo-blanco.jpg?ver=6', carga: 30 },
	{ id: 6, tipo: 'Drone', estado: 'Reparación', imagen: 'https://us.123rf.com/450wm/edlefler/edlefler1706/edlefler170600002/79991848-drone-blanco-con-la-c%C3%A1mara-de-la-acci%C3%B3n-4k-aislada-en-el-fondo-blanco.jpg?ver=6', carga: 0 },
	{ id: 7, tipo: 'Drone', estado: 'En uso', imagen: 'https://us.123rf.com/450wm/edlefler/edlefler1706/edlefler170600002/79991848-drone-blanco-con-la-c%C3%A1mara-de-la-acci%C3%B3n-4k-aislada-en-el-fondo-blanco.jpg?ver=6', carga: 50 },
	{ id: 8, tipo: 'Robot', estado: 'En uso', imagen: 'https://noticiaslogisticaytransporte.com/wp-content/uploads/2016/04/starship-robot.jpg', carga: 55 },
	{ id: 9, tipo: 'Robot', estado: 'Reparación', imagen: 'https://noticiaslogisticaytransporte.com/wp-content/uploads/2016/04/starship-robot.jpg', carga: 0 },
	{ id: 10, tipo: 'Robot', estado: 'Disponible', imagen: 'https://noticiaslogisticaytransporte.com/wp-content/uploads/2016/04/starship-robot.jpg', carga: 76 },
  ];

  // Estado para gestionar la visualización de los elementos
  const [visibleInventory, setVisibleInventory] = useState('En uso');

  // Filtrar el inventario según el estado seleccionado
  const filteredInventory = inventoryData.filter(item => item.estado === visibleInventory);

  return (
	  
	  <div className="sstyle">
	 <MTitulo className="tituloMiEquipo" nombre="Inventario"></MTitulo>

	 <div>
		<button className="enUso" onClick={() => setVisibleInventory('En uso')}>En uso</button>
		<button className="disponible" onClick={() => setVisibleInventory('Disponible')}>Disponible</button>
		<button className="reparacion" onClick={() => setVisibleInventory('Reparación')}>Reparación</button>
	 </div>
	  {props.user !== -1 ? (
			<ul>
			{filteredInventory.map(item => (
				<li key={item.id}>
				<div>
					<img src={item.imagen} alt={`${item.tipo} - Imagen`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
				</div>
				<div>
					<p className="etiqueta">ID:</p>
					<p className="valor">{item.id}</p>
					<p className="etiqueta">Tipo:</p>
					<p className="valor">{item.tipo}</p>
					<p className="etiqueta">Carga:</p>
					<p className="valor">{item.carga}%</p>
				</div>
				</li>
			))}
			</ul>
	  ):(
        <div className="ttNoLogin">
          Inicia sesión primero
        </div>
        )} 
    </div>
  );
};

const mapStatesToProps = (state) => {
	return{
		user: state.uiReducer.user
	};
}

export default connect(mapStatesToProps/*, mapActionsToProps*/)(Inventario);
