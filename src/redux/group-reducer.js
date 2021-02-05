import { vkApi } from "../api/vkApi";
import { filterFeed } from "../utils/filter-feed";
import { sortForFeed, sortTypeEnum } from "../utils/sorting-feed";

const SELECT_SORT = '/group/SELECT_SORT',
  SELECT_FILTER = '/group/SELECT_FILTER',
  GET_FEED = '/group/GET_FEED';

const initialState = {
  sorting: {
    type: sortTypeEnum.default,
    order: false
  },
  feed: null,
  filterFeed: null
}

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SORT:
      const stateCopy = { ...state };
      stateCopy.sorting = {
        type: action.payload.sortType,
        order: state.sorting.type === action.payload.sortType ? !state.sorting.order : false
      }
      stateCopy.feed = stateCopy.feed.sort((a, b) => sortForFeed(a, b, stateCopy.sorting))
      if (stateCopy.filterFeed) {
        stateCopy.filterFeed = stateCopy.filterFeed.sort((a, b) => sortForFeed(a, b, stateCopy.sorting))
      }
      return stateCopy;
    case SELECT_FILTER:
      return {
        ...state,
        filterFeed: filterFeed(state.feed, action.payload.filterType)
      }
    case GET_FEED:
      return {
        ...state,
        feed: action.payload.feed
      }
    default:
      return state;
  }
}

export const getFeed = (owner_id) => async (dispatch) => {
  const result = await vkApi.getFeedGroup(owner_id).catch((err) => {
    alert(err);
  });

  if (result !== undefined) {
    dispatch(getFeedAC(result));
  }
}

export const selectSort = (sortType) => {
  return { type: SELECT_SORT, payload: { sortType } }
}

export const selectFilter = (filterType) => {
  return { type: SELECT_FILTER, payload: { filterType } }
}

const getFeedAC = (feed) => {
  return { type: GET_FEED, payload: { feed } }
}

export default groupReducer;