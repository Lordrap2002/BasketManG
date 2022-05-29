
import "./MLoginBox.css";
import axios from 'axios';
import React from 'react';
import { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {setUsuario, setShowLogin, setEnter} from "../../store/actions/ui";
import {connect} from "react-redux";

function MLoginBox(props){
  const [register, setRegister] = useState(false);
  const [enter, setEnter] = useState(false);
  const [input1, setInput1] = useState('');
  const actualizarInput1 = char => {setInput1(char.target.value);};
  const [input2, setInput2] = useState('');
  const actualizarInput2 = char => {setInput2(char.target.value);};
  const [user, setUser] = useState(-1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/usuarios/").then((response)=>{
			  setUsers(response.data.data);
		  });
  });

  useEffect(() => {
    if(props.enter){
      props.setEnter(false);
      for (var i = 0; i < users.length; i++){
        if (users[i].email === input1 && users[i].contraseña === input2){
          setUser(users[i].codigo_usuario);
        }
      }
      if(user !== -1){
        props.setUsuario(user);
        props.setShowLogin(false);
      } 
      
    }
  }, [enter, input1, input2, users, user]);

  function onLogin(){
    
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
            <button className='mLoginRegister-action-button' onClick={() => props.setEnter(true)}>
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
  setEnter
};

const mapStatesToProps = (state) => {
	return{
		user: state.uiReducer.user,
    enter: state.uiReducer.enter,
    showLogin: state.uiReducer.showLogin
	};
}

export default connect(mapStatesToProps, mapActionsToProps)(MLoginBox);