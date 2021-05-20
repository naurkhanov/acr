const initialState = {
  loading: false,
  token: '',
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
        token: action.payload.token,
        authorizing: false,
        error: false,
      };

    case 'auth/failed':
      return {
        ...state,
        authorizing: false,
        error: true,
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

    fetch('http://localhost:3005/admin/')
      .then((response) => response.json())
      .then((json) => {
        const random = Math.random();
        if (random < 0.5) {
          dispatch({
            type: 'auth/failed',
            payload: json,
          });
        } else {
          dispatch({
            type: 'auth/succeed',
            payload: json,
          });
        }
      });
  };
};
