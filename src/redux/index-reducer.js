import { vkApi } from "../api/vkApi";

const VK_LOGIN_SUCCESS = 'VK_LOGIN_SUCCESS';

const initialState = {
  isAuth: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case VK_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true
      }
    default:
      return state;
  }
}

export const vkLogin = () => (dispatch) => {
  vkApi.login(dispatch);
}

export const vkLoginSuccess = () => {
  return { type: VK_LOGIN_SUCCESS }
}

export default loginReducer;