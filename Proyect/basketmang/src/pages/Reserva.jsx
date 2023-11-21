// ReservaForm.js
import React, { useState } from 'react';
import './Reserva.css'; // Importa los estilos

const ReservaForm = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [servicio, setServicio] = useState('robot');
  const [horasServicio, setHorasServicio] = useState('1');
  const [lugarReserva, setLugarReserva] = useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reserva realizada:', { nombre, fecha, hora, email, telefono, descripcion, servicio, horasServicio, lugarReserva });
    // Aquí puedes agregar la lógica para manejar la reserva, como enviarla a un servidor o almacenarla localmente.
  };

  return (
    <div className="center">
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
            <label>Teléfono:</label>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
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
              <option value="helado">Helado</option>
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
              <option value="1">Lugar 1</option>
              <option value="2">Lugar 2</option>
              <option value="3">Lugar 3</option>
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


