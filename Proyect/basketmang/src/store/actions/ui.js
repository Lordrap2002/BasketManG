
export const setShowLogin = (showLogin) => (dispatch) => {
    dispatch({
        type: "SET_SHOW_LOGIN",
        payload: {showLogin}
    })
}

export const setUsuario = (user) => (dispatch) => {
    dispatch({
        type: "SET_USER",
        payload: {user}
    })
}

export const setEnter = (enter) => (dispatch) => {
    dispatch({
        type: "SET_ENTER",
        payload: {enter}
    })
}
