
import "./MLoginBox.css";
import React, { Component } from 'react';
import MLoginButton from './MLoginButton';
import MContador from './MContador';
import MInput from './MInput';
import { useState, useEffect} from 'react';

function MLoginBox(){
  const [register, setRegister] = useState(false);
  const [enter, setEnter] = useState(false);
  const [input1, setInput1] = useState('');
  const actualizarInput1 = char => {setInput1(char.target.value);};
  const [input2, setInput2] = useState('');
  const actualizarInput2 = char => {setInput2(char.target.value);};
  const [user, setUser] = useState(['','']);

  useEffect(() => {
    if(enter){
      setUser([input1,input2]);
      setEnter(false);
    }
  }, [enter, input1, input2]);

  return(
    <div className='mLoginRegister-container'>
      <button className='mLoginRegister-button mLoginRegister-button-selected'>
        INICIA SESIÓN
      </button>
      <button className='mLoginRegister-button'>
        REGÍSTRATE
      </button>
      {
        !register ?
        <div className='mLoginRegister-input-container'>
          <input 
            className='mLoginRegister-input'
            placeholder='Ingresa tu dirección de correo electrónico'
            type='text'
            id="input1" autoComplete="off" onChange={actualizarInput1}/>
          <input
            className='mLoginRegister-input'
            placeholder='Ingresa tu contraseña' 
            type='password'
            id="input2" autoComplete="off" onChange={actualizarInput2}/>
          <div className='mLoginRegister-password-help-container'>
            <button className='mLoginRegister-password-help'>
              Ayuda con la contraseña
            </button>
          </div>
          <div className='mLoginRegister-action-button-container'>
            <button className='mLoginRegister-action-button' onClick={() => setEnter(true)}>
              INICIA SESIÓN
            </button>
          </div>
        </div>
        :
        <div className='mLoginRegister-input-container'>
          <input 
            className='mLoginRegister-input'
            placeholder='Ingresa el nombre de tu jugador'/>
          <input
            className='mLoginRegister-input'
            placeholder='Ingresa tu dirección de correo electrónico'/>
          <input 
            className='mLoginRegister-input'
            placeholder='Ingresa tu contraseña'/>
          <div className='mLoginRegister-action-button-container'>
            <button className='mLoginRegister-action-button'>
              REGÍSTRATE
            </button>
          </div>
        </div>
      }
    </div>
  );
}


export default MLoginBox;