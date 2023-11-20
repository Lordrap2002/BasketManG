
import "./MLoginBox.css";
import axios from 'axios';
import React from 'react';
import { useState, useEffect} from 'react';
import {setUsuario, setShowLogin, setLoadedData} from "../../store/actions/ui";
import {connect} from "react-redux";

function MLoginBox(props){
  const [register, setRegister] = useState(false);
  const [input1, setInput1] = useState('');
  const actualizarInput1 = char => {setInput1(char.target.value);};
  const [input2, setInput2] = useState('');
  const actualizarInput2 = char => {setInput2(char.target.value);};
  const [input3, setInput3] = useState('');
  const actualizarInput3 = char => {setInput3(char.target.value);};
  const [usuario, setUser] = useState(-1);
  const [users, setUsers] = useState([]);
  const [aceptado, setAceptado] = useState(true);
  const [valido, setValido] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5050/usuarios/").then((response)=>{
			  setUsers(response.data.data);
		  });
  });

  function login(){
    var u = -1;
    for (var i = 0; i < users.length; i++){
      if (users[i].email === input1 && users[i].contraseña === input3){
        setUser(users[i].codigo_usuario);
        u = users[i].codigo_usuario;
      }
    }
    if(u !== -1){
      props.setUsuario(u);
      props.setShowLogin(false);
    }else{
      setAceptado(false);
    }
  }

  function registro(){
    if(input1.length !== 0 && input2.length !== 0 && input3.length > 4){
      var u = true;
      for (var i = 0; i < users.length; i++){
        if (users[i].email === input2 || users[i].nombre === input1){
          u = false
        }
      }
      if(u){
        var num = users.length + 1;
        var v1 = input1;
        var v2 = input2;
        var v3 = input3;
        var text = "http://localhost:5050/create_user/" + v1 + "/" + v2 + "/" + v3 + "/" + num;
        axios.get(text).then((response)=>{});
        props.setUsuario(users.length + 1);
        props.setShowLogin(false);
      }else{
        setAceptado(false);
      }
    }else{
      setValido(false);
    }
  }

  useEffect(() => {
    if(!props.showLogin){
      setAceptado(true);
      setValido(true);
    }
  });

  function reset(){
    setRegister(!register);
    setAceptado(true);
    setValido(true);
  }

  return(
    <div className='mLoginRegister-container'>
      <button className= {register ? 'mLoginRegister-button' : 'mLoginRegister-button mLoginRegister-button-selected'} onClick={() => reset()}>
        INICIA SESIÓN
      </button>
      <button className= {!register ? 'mLoginRegister-button' : 'mLoginRegister-button mLoginRegister-button-selected'} onClick={() => reset()}>
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
            id="input3" autoComplete="off" onChange={actualizarInput3}/>
          {!aceptado ?
            <div className='mLoginRegister-password-help-container'>
              <button className='mLoginRegister-password-help'>
                Datos Incorrectos
              </button>
            </div>
            
            :null}
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
            placeholder='Crea tu nombre de usuario'
            type='text'
            id="input4" autoComplete="off" onChange={actualizarInput1}/>
          <input
            className='mLoginRegister-input'
            placeholder='Ingresa tu dirección de correo electrónico'
            type='text'
            id="input5" autoComplete="off" onChange={actualizarInput2}/>
          <input 
            className='mLoginRegister-input'
            placeholder='Crea tu contraseña(más de 14 caracteres)'
            type='password'
            id="input6" autoComplete="off" onChange={actualizarInput3}/>
          {!aceptado ?
            <div className='mLoginRegister-password-help-container'>
              <button className='mLoginRegister-password-help'>
                El usuario o correo ya están registrados
              </button>
            </div>
            :!valido ?
            <div className='mLoginRegister-password-help-container'>
              <button className='mLoginRegister-password-help'>
                Contraseña muy corta
              </button>
            </div>
            :null}
          <div className='mLoginRegister-action-button-container'>
            <button className='mLoginRegister-action-button' onClick={() => registro()}>
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