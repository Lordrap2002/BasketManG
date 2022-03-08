
const INITIAL_STATE = {
    text: 'Hola React Redux!'
};

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export default uiReducer;