import { vkApi } from "../api/vkApi";

const SEARCH_GROUP = '/groups/SEARCH_GROUP';

const initialState = {
  groups: []
}

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_GROUP:
      return {
        ...state,
        groups: action.payload.groups
      };
    default:
      return state;
  }
}

export const searchGroup = (dataForm) => async (dispatch) => {
  const result = await vkApi.searchGroup(dataForm.search).catch((err) => {
    alert(err);
  });
  if (result !== undefined) {
    dispatch(searchGroupAC(result));
  }
}

export const searchGroupAC = (groups) => {
  return { type: SEARCH_GROUP, payload: { groups } }
}

export default groupsReducer;