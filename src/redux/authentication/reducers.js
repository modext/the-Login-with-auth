import { LOGIN, LOGOUT } from "./actions";

const INITIAL_STATE = {
  status: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        status: true,
      };
    case LOGOUT:
      return {
        ...state,
        status: false,
      };

    default:
      return state;
  }
};
