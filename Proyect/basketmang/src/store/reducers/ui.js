
const INITIAL_STATE = {
    text: 'Hola React Redux!',
    showLogin: false,
    user: -1, //-1 para no iniciar sesión, 1 para iniciar sesión
    loadedData: false,
    precio: 0,
    showComprar: false,
    jugador: 0
};

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "SET_SHOW_LOGIN":
            return{
                ...state,
                showLogin: action.payload.showLogin,
            };  
        case "SET_USER":
            return{
                ...state,
                user: action.payload.user,
            };
        case "SET_LOADEDDATA":
            return{
                ...state,
                loadedData: action.payload.loadedData,
            };
        case "SET_SHOWCOMPRAR":
            return{
                ...state,
                showComprar: action.payload.showComprar,
            };
        case "SET_PRECIO":
            return{
                ...state,
                precio: action.payload.precio,
            };
        case "SET_JUGADOR":
            return{
                ...state,
                jugador: action.payload.jugador,
            };
        default:
            return state;
    }
}

export default uiReducer;