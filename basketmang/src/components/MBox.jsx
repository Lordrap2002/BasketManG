import {useState} from "react";
import "./MBox.css"
import MButton from './MButton';
import MContador from './MContador';
import MInput from './MInput';

function MBox(props){
  const [showRegister, setShowRegister] = useState(false);
  return(
    <nav className="mistyle">
      <div className="inerContainer">
        <MButton buttonName="Usuario:"/>
      </div>
      <MInput/>
      <div className='inerContainer'>
        <MButton buttonName='Contraseña:'/>
      </div>
      <MInput/>
      <div className="botContainer">
        <MContador/>
      </div>
    </nav>
  );
}

export default MBox;