export const setShowLogin = (showLogin) => (dispatch) => {
    dispatch({
        type: "SET_SHOW_LOGIN",
        payload: {showLogin}
    })
}
