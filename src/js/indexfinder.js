import {store} from "./store.js";

// index finder
const indexFinder = function (value) {
  for (var key = 0; key < store.favorites.length; key++) {
    if (store.favorites[key].id == value) {
      return key;
    }
  }
};

export {indexFinder};