import { vkLoginSuccess } from "../redux/index-reducer";

const VK_VERSION = '5.54';

export const vkApi = {
  searchGroup: (search) => {
    return new Promise((resolve, reject) =>
      //eslint-disable-next-line no-undef
      VK.Api.call('groups.search',
        {
          q: search !== undefined ? search : ' ',
          v: VK_VERSION
        },
        function (r) {
          if (r.response) {
            resolve(r.response.items);
          } else {
            reject(r.error.error_msg);
          }
        })
    )
  },
  login: (dispatch) => {
    //eslint-disable-next-line no-undef
    VK.Auth.login(function (response) {
      if (response.session) {
        dispatch(vkLoginSuccess());
      }
    });
  },
  getFeedGroup: (owner_id) => {
    return new Promise((resolve, reject) =>
      //eslint-disable-next-line no-undef
      VK.Api.call('wall.get',
        {
          owner_id: -owner_id,
          v: VK_VERSION
        },
        function (r) {
          if (r.response) {
            resolve(r.response.items);
          } else {
            reject(r.error.error_msg);
          }
        })
    )
  }
}