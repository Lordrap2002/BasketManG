import React from 'react';
import {connect} from 'react-redux';
import MMenuButton from '../components/MMenuButton';
import MPartidoButton from "../components/MPartidoButton"
import MGBox from '../components/MSettings/MGBox';
import './MHome.css';

function MHome(props){
	return(
		<div>
			<div className='up'></div>
			<div className='hmiddle'>
				<MPartidoButton buttonName="GENERAR RESERVA" to='/reserva'/>
			</div>
			{/*<div className='hmiddle2'>
				<MMenuButton buttonName="¿Necesitas ayuda?" to='/help' className='myButton2'/>
			</div>	*/}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		text: state.uiReducer.text
	};
}

export default connect(mapStateToProps)(MHome);