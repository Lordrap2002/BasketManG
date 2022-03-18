
const INITIAL_STATE = {
    text: 'Hola React Redux!',
    showLogin: false
};

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "SET_SHOW_LOGIN":
            return{
                ...state,
                showLogin: action.payload.showLogin
            };    
        default:
            return state;
    }
}

export default uiReducer;