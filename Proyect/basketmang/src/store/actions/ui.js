
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

export const setLoadedData = (loadedData) => (dispatch) => {
    dispatch({
        type: "SET_LOADEDDATA",
        payload: {loadedData}
    })
}
