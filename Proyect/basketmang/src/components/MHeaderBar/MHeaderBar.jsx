import "./MHeaderBar.css"
import MButton from './MButton';
import MLoginButton from './MLoginButton';

function MHeaderBar(props){
	return(
		<nav className='mHeaderBar-navbar'>
			<div className='mHeaderBar-leftContainer'>
				<img 
				alt='app-logo' 
				className='mHeaderBar-logo'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Basketball_Clipart.svg/240px-Basketball_Clipart.svg.png'/>
				<MButton buttonName="MENU PRINCIPAL" to='/'/>
				<MButton buttonName="TIENDA" to= '/tienda'/>
				<MButton buttonName="MI EQUIPO" to='/miEquipo'/>
				<MButton buttonName="ESTADÍSTICAS" to='/estadisticas'/>
				<img 
				alt='app-logo' 
				className='mHeaderBar-logo'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Basketball_Clipart.svg/240px-Basketball_Clipart.svg.png'/>
			</div>
			<div className='mHeaderBar-rightContainer'>
				<MLoginButton buttonName="LOG IN"/>
				<MButton buttonName="settings" to='/settings'/>
			</div>
		</nav>
	);
}
export default MHeaderBar;

/*onButtonClicked={() => {onHeaderBarLoginClicked();}}
	function onHeaderBarLoginClicked(){
		props.onHeaderBarLoginClicked();
	}
	*/