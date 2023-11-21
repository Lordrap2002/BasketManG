import React from 'react';

function MJUBox({ items }) {
  return (
    <div>
      <h2>En Uso</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <img src={item.imagen} alt={item.nombre} />
            <p>{item.nombre}</p>
            <p>Batería: {item.bateria}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MJUBox;
