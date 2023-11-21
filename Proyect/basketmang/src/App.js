import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import MHeaderBar from './components/MHeaderBar/MHeaderBar';
import MLoginBox from './components/MLogin/MLoginBox';
import {Routes, Route} from 'react-router-dom';
import MHome from './pages/MHome';
import MTienda from './pages/MTienda';
import MHelp from './pages/MHelp';
import MSettings from './pages/MSettings'; 
import {connect} from "react-redux";
import MmiEquipo from './pages/MmiEquipo';
import MEstadisticas from './pages/MEstadisticas';
import Reserva from './pages/Reserva';
import simpleParallax from 'simple-parallax-js';
import MMenuButton from './components/MMenuButton';
import MModal from './components/MModal/MModal';
import {setShowLogin} from "./store/actions/ui";

function App(props){
	const [users, setUsers] = useState([]);
	useEffect(()=>{
		axios.get("http://localhost:5050/usuarios/").then((response)=>{
			//console.log(response.data.data);
			setUsers(response.data.data);
		});
		document.title = "Javvi"
	});
	var paginas = document.getElementsByClassName('spages');
		new simpleParallax(paginas, {
			scale: 2,
			delay: 1,
			orientation: 'up',
			overflow: true,
			transition: 'cubic-bezier(0,0,0,1)'});

	return(
		<div className="App">
			<div className='home'>
				<div className='back'></div>
				<div className='headbar'>
					<MHeaderBar/>
				</div>
				<div className='spages'>
					<Routes>
						<Route exact path='/' element={<MHome/>}/>
						<Route exact path='/tienda' element={<MTienda/>}/>
						<Route exact path='/help' element={<MHelp/>}/>
						<Route exact path='/settings' element={<MSettings/>}/>
						<Route exact path='/miEquipo' element={<MmiEquipo/>}/>
						<Route exact path='/estadisticas' element={<MEstadisticas/>}/>
						<Route exact path='/partido' element={<Reserva/>}/>
					</Routes>
				</div> 
				
			</div>
			<div className='footer'>
				<div className='fooitems'>
					Javvi © 2023 - 2023
				</div>
				<div className='fooitems'>
					Terminos de Servicio
				</div>
				<div className='fooitems'>
					Política de Privacidad
				</div>
				<div className='fooitems'>
					Contacto
				</div>
			</div>
			{props.showLogin ?
				props.user === -1 ?
					<MModal>
						<div className='login'>
							<MLoginBox/>
						</div>
					</MModal>
					:
					<MModal>
						<div className='logi'>
							<MMenuButton buttonName='¿Cerrar Sesión?' className='logOut1'/>
							<button className='logOut2' onClick={() => window.location.reload()}>
								Aceptar
							</button>
							<button className='logOut3' onClick={() => props.setShowLogin(false)}>
								Cancelar
							</button>
						</div>
					</MModal>
				:
				null
			}
			{/*users.map(usuario => {
					return <div key={usuario.codigo_usuario}>{usuario.codigo_usuario}{" "}{usuario.nombre}{" "}{usuario.email}</div>
				})*/}
			 {/*user.map(usu => {
					return <div key={usu.codigo_usuario}>{usu.codigo_usuario}{" "}{usu.nombre}{" "}{usu.email}</div>
				})*/} 
		</div>
	);
}

const mapActionsToProps = {
	setShowLogin
  };

const mapStatesToProps = (state) => {
	return{
		showLogin: state.uiReducer.showLogin,
		user: state.uiReducer.user
	};
}

export default connect(mapStatesToProps,mapActionsToProps)(App);

/*onHeaderBarLoginClicked={() => {onLoginButtonClicked();}}
const [showLogin, setShowLogin] = useState(false);
function onLoginButtonClicked(){
	const newShowLogin = !showLogin;
	setShowLogin(newShowLogin);
}*/