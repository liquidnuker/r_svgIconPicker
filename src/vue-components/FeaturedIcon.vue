<template>
  <div class="row featured_icon">
    <p>{{ featuredIconCategory }}</p>
    <p>{{ featuredIconId }}</p>
    <img v-bind:src="'img/icons/' + featuredIconCategory + '/' +
    featuredIconSrc">

  </div>
</template>
<script>
import 'whatwg-fetch';
import {checkStatus, parseJSON} from "../js/fetchutils.js";
import {iconCategories} from "../js/iconcategories.js";
import {getRandomInt} from "../js/randomint.js";
import {shuffleCategories} from "../js/shuffle.js";
export default {
  data () {
    return {
      featuredIconCategory: "",
      featuredIconId: "",
      featuredIconSrc: ""
    }
  },
  mounted: function() {
    console.log("FeaturedIcon.vue mounted");
    this.loadRandomIcon();
  },
  methods: {
    loadRandomIcon: function() {
      let selectedItems = shuffleCategories(iconCategories);
      let currentCategory = selectedItems[0];
      let featuredItem;
      const jsonUrl = "src/js/ajax/" + currentCategory + ".json";

      let self = this;
      fetch(jsonUrl)
          .then(checkStatus)
          .then(parseJSON)
          .then(function (data) {
            featuredItem = data[currentCategory];
          })
          .then(function() {
            // randomize index
            const x = getRandomInt(0, featuredItem.length);

            self.featuredIconCategory = currentCategory;
            self.featuredIconId = featuredItem[x].id;
            self.featuredIconSrc = featuredItem[x].src;
          })
          .catch(function (error) {
            console.log('request failed', error);
          });
    }
  }
}
</script>