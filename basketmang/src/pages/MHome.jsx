import React from 'react';
import {connect} from 'react-redux';
import MMenuButton from '../components/MMenuButton';
import MPartidoButton from "../components/MPartidoButton"
import MGBox from '../components/MSettings/MGBox';
import './MHome.css';

function MHome(props){
	return(
		<div>
			<div className></div>
			<div className='hback'>
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