import React from 'react';
import {connect} from 'react-redux';
import MMenuButton from '../components/MMenuButton';
import MPartidoButton from "../components/MPartidoButton"
import MGBox from '../components/MSettings/MGBox';
import './MHome.css';

function MHome(props){
	return(
		<div className='hstyle'>
			{/*<div></div>*/}
			<div>Home</div>
			{/*<div>{props.text}</div>*/}	
			<div className='hmiddle'>
				<div className='hmiddle2'></div>
				<MPartidoButton buttonName="PARTIDO" to='/partido'/>
			</div>	
			<MMenuButton buttonName="¿Necesitas ayuda?" to='/help'/>

		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		text: state.uiReducer.text
	};
}

export default connect(mapStateToProps)(MHome);