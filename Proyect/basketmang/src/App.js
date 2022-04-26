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
import MPartido from './pages/MPartido';
import simpleParallax from 'simple-parallax-js';
import MTButton from './components/MButton/MTButton';

function App(props){
	const [users, setUsers] = useState([]);
	//useEffect(()=>{
	//	axios.get("http://localhost:5050/usuarios").then((response)=>{
	//		console.log(response.data.data);
	//		setUsers(response.data.data);
	//	});
	//});
	useEffect(()=>{
		var paginas = document.getElementsByClassName('spages');
		new simpleParallax(paginas, {
			scale: 2,
			delay: 1,
			orientation: 'up',
			overflow: true,
			transition: 'cubic-bezier(0,0,0,1)'});
	});
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
						<Route exact path='/partido' element={<MPartido/>}/>
					</Routes>
				</div>
			</div>
			<div className='footer'>
				<div className='fooitems'>
					BasketManG © 2022 - 2022
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
				<div className='login'>
					<MLoginBox/>
				</div>
				:
				null
			}
			{/*users.map(user => {
					return <div key={user.codigo_usuario}>{user.codigo_usuario}{" "}{user.nombre}{" "}{user.email}</div>
				})*/}
		</div>
	);
}

const mapStatesToProps = (state) => {
	return{
		showLogin: state.uiReducer.showLogin
	};
}

export default connect(mapStatesToProps)(App);

/*onHeaderBarLoginClicked={() => {onLoginButtonClicked();}}
const [showLogin, setShowLogin] = useState(false);
function onLoginButtonClicked(){
	const newShowLogin = !showLogin;
	setShowLogin(newShowLogin);
}*/