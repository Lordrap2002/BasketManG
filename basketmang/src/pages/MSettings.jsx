import React from 'react';
import MTitulo from '../components/MSettings/MTitulo';
import MGBox from '../components/MSettings/MGBox';
import MPBox from '../components/MSettings/MPBox';
import "./MSettings.css"

function MSettings(){
	return(
		<div className='sstyle'>
			<MTitulo></MTitulo>
			<div className='sbottom'>
				<MGBox></MGBox>
				<MPBox></MPBox>
			</div>
		</div>
	)
}

export default MSettings;