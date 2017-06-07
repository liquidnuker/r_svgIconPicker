import {store} from "./store.js";

// check if value exists in object inside array
// returns index
// favoriteExists("nonexistent")); // undefined
const favoriteExists =  function (value) {
  for (var key = 0; key < store.favorites.length; key++) {
    if (store.favorites[key].id == value) {
      return key;
    }
  }
};

export {favoriteExists};

