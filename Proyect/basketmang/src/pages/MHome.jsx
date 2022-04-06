import React from 'react';
import {connect} from 'react-redux';
import MMenuButton from '../components/MMenuButton';
import MPartidoButton from "../components/MPartidoButton"
import MGBox from '../components/MSettings/MGBox';
import './MHome.css';

function MHome(props){
	return(
		<div>
<<<<<<< HEAD:Proyect/basketmang/src/pages/MHome.jsx
			{/*<div className='hback'></div>*/}
			<div className='hstyle'>
=======
			<div className></div>
			<div className='hback'>
>>>>>>> 3dea43af36bf233794d7203c6c287f90915dcda6:basketmang/src/pages/MHome.jsx
				<div className='hmiddle'>
					<div className='hmiddle2'></div>
					<MPartidoButton buttonName="PARTIDO" to='/partido'/>
				</div>	
				<MMenuButton buttonName="¿Necesitas ayuda?" to='/help'/>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		text: state.uiReducer.text
	};
}

export default connect(mapStateToProps)(MHome);