import React from 'react';
import {connect} from 'react-redux';
import MMenuButton from '../components/MMenuButton';

function MHome(props){
	return(
		<div>
			<div>Home</div>
			{/*<div>{props.text}</div>*/}		
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