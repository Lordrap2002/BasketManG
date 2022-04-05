
import {useState} from "react";
import "./MLoginBox.css"
import MLoginButton from './MLoginButton';
import MContador from './MContador';
import MInput from './MInput';

function MLoginBox(props){
  const [showRegister, setShowRegister] = useState(false);
  return(
    <nav className="loginmistyle">
      <div className="logininerContainer">
        <MLoginButton buttonName="Usuario:"/>
      </div>
      <MInput/>
      <div className='logininerContainer'>
        <MLoginButton buttonName='Contraseña:'/>
      </div>
      <MInput/>
      <div className="loginbotContainer">
        <MContador/>
      </div>
    </nav>
  );
}

export default MLoginBox;