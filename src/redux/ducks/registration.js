const initialState = {
  loading: false,
  token: localStorage.getItem('auth-token'),
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

    case 'auth/succeed':
      return {
        ...state,
        token: action.payload,
        authorizing: false,
        error: false,
      };

    case 'auth/failed':
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
    fetch('http://localhost:3005/admin')
      .then((response) => response.json())
      .then((json) => {
        const random = Math.random();
        if (random < 0.5) {
          dispatch({
            type: 'auth/failed',
            payload: json,
          });
        } else {
          localStorage.setItem('auth-token', json.token);
          dispatch({
            type: 'auth/succeed',
            payload: json,
          });
        }
      });
  };
};

//выход из аккаунта

export const authReset = () => {
  localStorage.removeItem('auth-token');
  return {
    type: 'auth/reset',
  };
};
