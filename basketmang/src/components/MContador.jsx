import { useState, useEffect} from 'react';

function MContador(){
	const [count, setCount] = useState(5);
	return (
		<div>
			<p>Intentos restantes: {count}.</p>
			<button onClick={() => setCount(count ? count - 1 : 0)}>
				Ingresar
			</button>
		</div>
	);
}

export default MContador;