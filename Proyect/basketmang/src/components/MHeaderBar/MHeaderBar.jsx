import "./MHeaderBar.css"
import MButton from './MButton';
import MLoginButton from './MLoginButton';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {setMonedas} from "../../store/actions/ui";

function MHeaderBar(props){
	const [userName, setUserName] = useState('');
	useEffect(() => {		
			axios.get("http://localhost:5050/nombre_usuario/" + props.user).then((response)=>{
				setUserName(response.data[0].nombre); 
				props.setMonedas(response.data[0].dinero);
			});
			//setUserName("prueba");
	  }, [props.user]);
	return(
		<nav className='mHeaderBar-navbar'>
			<div className='mHeaderBar-leftContainer'>
				<img 
				alt='app-logo' 
				className='mHeaderBar-logo'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Basketball_Clipart.svg/240px-Basketball_Clipart.svg.png'/>
				<MButton buttonName="MENU PRINCIPAL" to='/'/>
				<MButton buttonName="TIENDA" to= '/tienda'/>
				<MButton buttonName="MI EQUIPO" to='/miEquipo'/>
				<MButton buttonName="ESTADÍSTICAS" to='/estadisticas'/>
				<img 
				alt='app-logo' 
				className='mHeaderBar-logo'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Basketball_Clipart.svg/240px-Basketball_Clipart.svg.png'/>
			</div>
			<div className='mHeaderBar-rightContainer' >
				{props.user !== -1?
				<MLoginButton buttonName={userName + " " + props.monedas}/>
				:
				<MLoginButton buttonName="LOG IN"/>
				}
				
				<MButton buttonName="settings" to='/settings'/>
			</div>
		</nav>
	);
}

const mapActionsToProps = {
	setMonedas
  };

const mapStatesToProps = (state) => {
	return{
		user: state.uiReducer.user,
		precio: state.uiReducer.precio,
		showComprar : state.uiReducer.showComprar,
		monedas: state.uiReducer.monedas
	};
}

export default connect(mapStatesToProps, mapActionsToProps)(MHeaderBar);

/*onButtonClicked={() => {onHeaderBarLoginClicked();}}
	function onHeaderBarLoginClicked(){
		props.onHeaderBarLoginClicked();
	}
	*/