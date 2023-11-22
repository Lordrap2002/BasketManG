import React, { useState } from 'react';
import ErrorPopup from './ErrorPopup';  
import './Reserva.css';
import {connect} from "react-redux";
import axios from 'axios';

const ReservaForm = (props) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [horaInicial, setHoraInicial] = useState('');
  const [horaFinal, setHoraFinal] = useState('');
  const [email, setEmail] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [dispositivo, setDispositivo] = useState('robot');
  const [lugarReserva, setLugarReserva] = useState('1');
  const [lugarFinal, setLugarFinal] = useState('1');
  const [error, setError] = useState('');
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const fechaActual = new Date();
    const fechaSeleccionada = new Date(fecha);
    fechaActual.setDate(fechaActual.getDate() - 1);
  
    if (fechaSeleccionada < fechaActual) {
      setError('La fecha debe ser mayor o igual al día actual.');
      return;
    }
  
    // Si la fecha es válida, restablece el estado de error
    setError('');
  
    console.log('Reserva realizada:', { nombre, fecha, horaInicial, horaFinal, email, lugarFinal, dispositivo, lugarReserva });
    // Aquí puedes agregar la lógica para manejar la reserva, como enviarla a un servidor o almacenarla localmente.
  };

  const closeErrorPopup = () => {
    setError('');
  };

  function reset(){
    setRegister(!register);

  }

  function grabacion(){
    var v1 = nombre;
    var v2 = fecha;
    var v3 = horaInicial;
    var v5 = email;
    var v6 = descripcion;
    var v7 = dispositivo;
    var text = "http://localhost:5050/grabacion/" + v1 + "/" + v2 + "/" + v3 + "/" + v5 + "/" + v6 + "/" + v7;
    axios.get(text).then((response)=>{});
  }
  
  function pedido(){
    var v1 = nombre;
    var v2 = fecha;
    var v3 = horaInicial;
    var v4 = email;
    var v5 = dispositivo;
    var v6 = lugarReserva;
    var v7 = lugarFinal;
    var text = "http://localhost:5050/pedido/" + v1 + "/" + v2 + "/" + v3 + "/" + v4 + "/" + v5 + "/" + v6 + "/" + v7;
    axios.get(text).then((response)=>{});
  }

  return (
    <div className="center">
      {/* Muestra el pop-up de error si existe */}
      {error && <ErrorPopup message={error} onClose={closeErrorPopup} />}
      <div className='LoginRegister-button-container'>
      <button className= {register ? 'miLoginRegister-button' : 'miLoginRegister-button mLoginRegister-button-selected'} onClick={() => reset()}>
        GRABACIÓN
      </button>
      <button className= {!register ? 'miLoginRegister-button' : 'miLoginRegister-button mLoginRegister-button-selected'} onClick={() => reset()}>
        PEDIDO
      </button>
      </div>
      {props.user !== -1 ?(
        <div>
      { 
        !register ?(
      <form onSubmit={handleSubmit} className="two-columns-form">
        <div className="column">
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text" required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Fecha:</label>
            <input
              type="date" required
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Hora Inicio:</label>
            <input
              type="time"  min="06:00" max="18:00" required
              value={horaInicial}
              onChange={(e) => setHoraInicial(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Hora Fin:</label>
            <input
              type="time" min="06:00" max="18:00" required
              value={horaFinal}
              onChange={(e) => setHoraFinal(e.target.value)}
            />
          </div>
        </div>
        <div className="column">
          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Dispositivo:</label>
            <select
              value={dispositivo}
              onChange={(e) => setDispositivo(e.target.value)}
            >
              <option value="robot">Robot</option>
              <option value="dron">Dron</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" onClick={() => grabacion()}>Reservar</button>
          </div>
        </div>
      </form>
      ):(
      <form onSubmit={handleSubmit} className="two-columns-form">
        <div className="column">
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text" required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Fecha:</label>
            <input
              type="date" required
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Hora Inicial:</label>
            <input
              type="time" min="06:00" max="18:00" required
              value={horaInicial}
              onChange={(e) => setHoraInicial(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="column">
          <div className="form-group">
            <label>Lugar de Inicio:</label>
            <select
              value={lugarReserva}
              onChange={(e) => setLugarReserva(e.target.value)}
            >
              <option value="1">Acacias</option>
              <option value="2">Lagos</option>
              <option value="3">Almendros</option>
              <option value="4">Palmas</option>
              <option value="5">Cedro Rosado</option>
              <option value="6">Saman</option>
            </select>
          </div>
          <div className="form-group">
            <label>Lugar de Finalización:</label>
            <select
              value={lugarFinal}
              onChange={(e) => setLugarFinal(e.target.value)}
            >
              <option value="1">Acacias</option>
              <option value="2">Lagos</option>
              <option value="3">Almendros</option>
              <option value="4">Palmas</option>
              <option value="5">Cedro Rosado</option>
              <option value="6">Saman</option>
            </select>
          </div>
          <div className="form-group">
            <label>Dispositivo:</label>
            <select
              value={dispositivo}
              onChange={(e) => setDispositivo(e.target.value)}
            >
              <option value="robot">Robot</option>
              <option value="dron">Dron</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit" onClick={() => pedido()}>Reservar</button>
          </div>
        </div>
      </form>
      )}
      </div>):(
      <div className="ttNoLogin2">
        Inicia sesión primero
      </div>
      )}
    </div>
  );
};

const mapStatesToProps = (state) => {
	return{
		user: state.uiReducer.user
	};
}

export default connect(mapStatesToProps/*, mapActionsToProps*/)(ReservaForm);


