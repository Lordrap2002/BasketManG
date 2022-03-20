import {useEffect, useState} from "react";
import "./MHeaderBar.css"
import MButton from './MButton';

function MHeaderBar(props){
	function onHeaderBarLoginClicked(){
		props.onHeaderBarLoginClicked();
	}
	return(
		<nav className="mystyle">
			<div className="innerContainer">
				<MButton buttonName="MENU PRINCIPAL" to='/'/>
				<MButton buttonName="TIENDA" to='/about'/>
				<MButton buttonName="MI EQUIPO"/>
				<MButton buttonName="ESTADÍSTICAS"/>
			</div>
			<div className="leftContainer">
				<MButton buttonName="LOG IN"/>
				<MButton buttonName="CONFIGURACIÓN"/>
			</div>
		</nav>
	);
}
export default MHeaderBar;

//onButtonClicked={() => {onHeaderBarLoginClicked();}}