import "./MHeaderBar.css"
import MButton from './MButton';
import MLoginButton from './MLoginButton';

function MHeaderBar(props){
	return(
		<nav className="mystyle">
			<div className="innerContainer">
				<MButton buttonName="MENU PRINCIPAL" to='/'/>
				<MButton buttonName="TIENDA" to='/tienda'/>
				<MButton buttonName="MI EQUIPO" to='/miEquipo'/>
				<MButton buttonName="ESTADÍSTICAS" to='/estadisticas'/>
			</div>
			<div className="leftContainer">
				<MLoginButton buttonName="LOG IN"/>
				<MButton buttonName="CONFIGURACIÓN" to='/settings'/>
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