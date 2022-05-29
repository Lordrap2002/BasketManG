
const INITIAL_STATE = {
    text: 'Hola React Redux!',
    showLogin: false,
    user: -1, //-1 para no iniciar sesión, 1 para iniciar sesión
    enter: false
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
        case "SET_ENTER":
            return{
                ...state,
                enter: action.payload.enter,
            }; 
        default:
            return state;
    }
}

export default uiReducer;