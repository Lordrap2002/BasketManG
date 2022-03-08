import { useEffect, useState} from "react";

function MInput(){
    const [input, setInput] = useState('');
    const [valido, setValido] = useState(false);
    const actualizarInput = char => {setInput(char.target.value);};
    useEffect(() => {
        if (input.length < 5 || input.length > 10 || /\d/.test(input)) {
            setValido(false);
        } else {
            setValido(true);
        }
    }, [input]);
    return(
        <>
        <input type="text" id="input" autoComplete="off" onChange={actualizarInput} style={{ height: '1rem', width: '10rem'}} />
        <p><span style={valido ? { backgroundColor: 'lightgreen', padding: '.2rem' } : { backgroundColor: 'lightpink', padding: '.2rem' }}>{valido ? 'Válido' : 'Inválido'}</span></p>
        </>
    );
};

export default MInput;