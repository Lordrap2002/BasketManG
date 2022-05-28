
const INITIAL_STATE = {
    text: 'Hola React Redux!',
    showLogin: false,
    user: -1
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
        default:
            return state;
    }
}

export default uiReducer;