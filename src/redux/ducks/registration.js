const initialState = {
  loading: false,
  token: localStorage.getItem('token'),
  authorizing: false,
  error: false,
};

//редьюсер

export const registration = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/started':
      return {
        ...state,
        authorizing: true,
        error: false,
      };

    case 'login/succeed':
      return {
        ...state,
        token: action.payload,
        authorizing: false,
        error: false,
      };

    case 'login/error':
      return {
        ...state,
        authorizing: false,
        error: true,
      };
    case 'auth/reset':
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

//санки

//авторизация
export const loginStart = (login, password) => {
  return (dispatch) => {
    dispatch({
      type: 'auth/started',
    });
    fetch(`/authorization/login=${login}/password=${password}`)
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem('token', json);
        dispatch({
          type: 'login/succeed',
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
        return dispatch({ type: 'login/error' });
      });
  };
};

//выход из аккаунта

export const authReset = () => {
  localStorage.removeItem('token');
  return {
    type: 'auth/reset',
  };
};
