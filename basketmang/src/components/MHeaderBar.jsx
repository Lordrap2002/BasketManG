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
				<MButton buttonName="PÁGINA PRINCIPAL" to='/'/>
				<MButton buttonName="NOTICIAS" to='/about'/>
				<MButton buttonName="COMUNIDAD"/>
				<MButton buttonName="ESTADÍSTICAS"/>
			</div>
			<div className="leftContainer">
				<MButton buttonName="LOG IN"/> 
			</div>
		</nav>
	);
}

export default MHeaderBar;

//onButtonClicked={() => {onHeaderBarLoginClicked();}}