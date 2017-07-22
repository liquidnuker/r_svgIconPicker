<template>
  <div>
    <div v-for="(i, index) in prCurrentItems" :key="i.id">
      <div class="col-xs-3 col-sm-2 ic_iconbox" id="ic_iconbox">
        <div>          
          <p class="ic_toggle">{{ i.id }}</p>
          <img v-bind:src="'img/icons/' + prCurrentCategory + '/' + i.src" v-bind:alt="i.id">
          <div class="ic_tooltip">
            <button class="ic_btn" v-on:click="addFavorite(i.id, i.src, i.type, i.svg, i.description)">add</button>
            <button class="ic_btn" v-on:click="">svg</button>  
          </div>        
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {store} from "../js/store.js";
import {favoriteExists} from "../js/favoriteexists.js";
export default {
  data() {
      return {

      }
    },
    watch: {
      // : function () {
      // }
    },
    props: [
      "prCurrentItems",
      "prCurrentCategory"
    ],
    components: {},
    mounted: function () {
      console.log(" grid mounted");
    },
    methods: {
      addFavorite: function (id, src, type, svg, desc) {
        // check before pushing
        if (favoriteExists(id) !== undefined) {
          console.log("already in favorites");
        } else {
          var x = Date().toString();
          store.favorites.push({
            category: this.currentCategory,
            id: id,
            type: type,
            src: src,
            svg: svg,
            description: desc,
            date: x,
            notes: ""
          });
        }
      }
    }
}
</script>