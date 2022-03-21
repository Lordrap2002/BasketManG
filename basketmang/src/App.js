import React, {useEffect, useState} from 'react';
import './App.css';
import MHeaderBar from './components/MHeaderBar/MHeaderBar';
import MLoginBox from './components/MLogin/MLoginBox';
import {Routes, Route} from 'react-router-dom';
import MHome from './pages/MHome';
import MTienda from './pages/MTienda';
import {connect} from "react-redux";

function App(props){
	return(
		<div className="App">
			<MHeaderBar/>
			<Routes>
				<Route exact path='/' element={<MHome/>}/>
				<Route exact path='/tienda' element={<MTienda/>}/>
			</Routes>
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