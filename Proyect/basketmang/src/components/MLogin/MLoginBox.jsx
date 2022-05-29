
import "./MLoginBox.css";
import axios from 'axios';
import React from 'react';
import { useState, useEffect} from 'react';
import {setUsuario, setShowLogin, setLoadedData} from "../../store/actions/ui";
import {connect} from "react-redux";

function MLoginBox(props){
  const [register, setRegister] = useState(false);
  const [enter, setEnter] = useState(false);
  const [input1, setInput1] = useState('');
  const actualizarInput1 = char => {setInput1(char.target.value);};
  const [input2, setInput2] = useState('');
  const actualizarInput2 = char => {setInput2(char.target.value);};
  const [usuario, setUser] = useState(-1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/usuarios/").then((response)=>{
			  setUsers(response.data.data);
		  });
  });

  function login(){
    var u = -1;
    for (var i = 0; i < users.length; i++){
      if (users[i].email === input1 && users[i].contraseña === input2){
        setUser(users[i].codigo_usuario);
        u = users[i].codigo_usuario;
      }
    }
    if(u !== -1){
      props.setUsuario(u);
      props.setShowLogin(false);
    }
  }

  return(
    <div className='mLoginRegister-container'>
      <button className= {register ? 'mLoginRegister-button' : 'mLoginRegister-button mLoginRegister-button-selected'} onClick={() => setRegister(false)}>
        INICIA SESIÓN
      </button>
      <button className= {!register ? 'mLoginRegister-button' : 'mLoginRegister-button mLoginRegister-button-selected'} onClick={() => setRegister(true)}>
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
            <button className='mLoginRegister-action-button' onClick={() => login()}>
              INICIA SESIÓN
            </button>
          </div>
        </div>
        :
        <div className='mLoginRegister-input-container'>
          <input 
            className='mLoginRegister-input'
            placeholder='Crea tu nombre de usuario'/>
          <input
            className='mLoginRegister-input'
            placeholder='Ingresa tu dirección de correo electrónico'/>
          <input 
            className='mLoginRegister-input'
            placeholder='Crea tu contraseña'/>
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

const mapActionsToProps = {
  setUsuario,
  setShowLogin,
  setLoadedData
};

const mapStatesToProps = (state) => {
	return{
		user: state.uiReducer.user,
    showLogin: state.uiReducer.showLogin,
    loadedData: state.uiReducer.loadedData
	};
}

export default connect(mapStatesToProps, mapActionsToProps)(MLoginBox);