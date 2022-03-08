import React, {useEffect, useState} from 'react';
import './App.css';
import MHeaderBar from './components/MHeaderBar';
import MBox from './components/MBox';
import {Routes, Route} from 'react-router-dom';
import MHome from './pages/MHome';
import MAbout from './pages/MAbout';

function App(props){
	const [showLogin, setShowLogin] = useState(false);
	function onLoginButtonClicked(){
		const newShowLogin = !showLogin;
		setShowLogin(newShowLogin);
	}
	return(
		<div className="App">
			<MHeaderBar onHeaderBarLoginClicked={() => {onLoginButtonClicked();}}/>
			<Routes>
				<Route exact path='/' element={<MHome/>}/>
				<Route exact path='/about' element={<MAbout/>}/>
			</Routes>
			{/*showLogin ?
				<div className='login'>
					<MBox/>
				</div>
				:
				null
			*/}
		</div>
	);
}

export default App;
