import {
  ERROR,
  LOADING,
  LOGINSUCCESS,
  LOGOUT,
  REGISTERSUCCESS,
  USERINFOSUCCESS,
  USERINFOUPDATESUCCESS,
} from "./actionTypes";

const initialState = {
  loggedIn: false,
  userInformation: null,
  token: null,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return { ...state, isLoading: !state.isLoading };
    }
    case ERROR: {
      return { ...state, isError: !state.isError };
    }
    case LOGINSUCCESS: {
      return {
        ...state,
        loggedIn: !state.loggedIn,
        isLoading: !state.isLoading,
        token: payload.token,
      };
    }
    case REGISTERSUCCESS: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    case USERINFOSUCCESS: {
      return {
        ...state,
        isLoading: !state.isLoading,
        userInformation: payload,
      };
    }
    case USERINFOUPDATESUCCESS: {
      const newInformation = { ...state.userInformation, ...payload };
      return {
        ...state,
        isLoading: !state.isLoading,
        userInformation: newInformation,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
