
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

export const setShowComprar = (showComprar) => (dispatch) => {
    dispatch({
        type: "SET_SHOWCOMPRAR",
        payload: {showComprar}
    })
}

export const setPrecio = (precio) => (dispatch) => {
    dispatch({
        type: "SET_PRECIO",
        payload: {precio}
    })
}

export const setJugador = (jugador) => (dispatch) => {
    dispatch({
        type: "SET_JUGADOR",
        payload: {jugador}
    })
}
