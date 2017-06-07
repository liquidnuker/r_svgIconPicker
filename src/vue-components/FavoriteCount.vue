<template>
  <div>
    <div>
      <p v-if="favorites.length > 0">
        <a :href="'index.html#/favorites'">favorites:</a>
        <span class="ic_favorites_badge">{{ favorites.length }}</span>
      </p>
    </div>  
  </div>
</template>
<script>
import {store} from "../js/store.js";
export default {
  data () {
    return {
      favorites: store.favorites
    }
  },
  watch: {
    favorites: function() {
      console.log("fc-favorites triggered");
    }
  },
  mounted: function () {
    console.log("FavoriteCount.vue mounted");
  }
}
</script>