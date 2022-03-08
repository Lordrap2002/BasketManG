import React from 'react';
import {connect} from 'react-redux';

function MHome(props){
	return(
		<div>
			<div>Home</div>
			<div>{props.text}</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		text: state.uiReducer.text
	};
}

export default connect(mapStateToProps)(MHome);