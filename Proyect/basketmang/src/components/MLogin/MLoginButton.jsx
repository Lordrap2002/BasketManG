import React, { Component } from 'react';
import './MLoginButton.css';

class MLoginRegister extends Component {
  render() {
    return(
      <div className='mLoginRegister-container'>
        <button className='mLoginRegister-button mLoginRegister-button-selected'>
          INICIA SESIÓN
        </button>
        <button className='mLoginRegister-button'>
          REGÍSTRATE
        </button>
        {
          !this.state.showRegister ?
          <div className='mLoginRegister-input-container'>
            <input 
              className='mLoginRegister-input'
              placeholder='Ingresa tu dirección de correo electrónico'
              type='text'/>
            <input
              className='mLoginRegister-input'
              placeholder='Ingresa tu contraseña' 
              type='password'/>
            <div className='mLoginRegister-password-help-container'>
              <button className='mLoginRegister-password-help'>
                Ayuda con la contraseña
              </button>
            </div>
            <div className='mLoginRegister-action-button-container'>
              <button className='mLoginRegister-action-button'>
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

  constructor(props) {
    super(props);

    this.state = {
      showRegister: true
    };
  }
}

export default MLoginRegister;
