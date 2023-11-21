import React, { useState } from 'react';
import ErrorPopup from './ErrorPopup';  
import './Reserva.css';

const ReservaForm = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [email, setEmail] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [servicio, setServicio] = useState('robot');
  const [horasServicio, setHorasServicio] = useState('1');
  const [lugarReserva, setLugarReserva] = useState('1');
  const [error, setError] = useState('');

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
  
    console.log('Reserva realizada:', { nombre, fecha, hora, email, descripcion, servicio, horasServicio, lugarReserva });
    // Aquí puedes agregar la lógica para manejar la reserva, como enviarla a un servidor o almacenarla localmente.
  };

  const closeErrorPopup = () => {
    setError('');
  };

  return (
    <div className="center">
      {/* Muestra el pop-up de error si existe */}
      {error && <ErrorPopup message={error} onClose={closeErrorPopup} />}
      <form onSubmit={handleSubmit} className="two-columns-form">
        <div className="column">
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Fecha:</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Hora:</label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <label>Servicio:</label>
            <select
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
            >
              <option value="robot">Robot</option>
              <option value="dron">Dron</option>
            </select>
          </div>
          <div className="form-group">
            <label>Horas del Servicio:</label>
            <select
              value={horasServicio}
              onChange={(e) => setHorasServicio(e.target.value)}
            >
              <option value="1">1 hora</option>
              <option value="2">2 horas</option>
              <option value="3">3 horas</option>
            </select>
          </div>
          <div className="form-group">
            <label>Lugar de Reserva:</label>
            <select
              value={lugarReserva}
              onChange={(e) => setLugarReserva(e.target.value)}
            >
              <option value="1">Acacias</option>
              <option value="2">Lagos</option>
              <option value="3">Almendros</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit">Reservar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReservaForm;


