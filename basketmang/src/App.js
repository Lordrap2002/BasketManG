import React, {useEffect, useState} from 'react';
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

function App(props){
	return(
		<div className="App">
			<MHeaderBar/>
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
			{props.showLogin ?
				<div className='login'>
					<MLoginBox/>
				</div>
				:
				null
			}
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