<template>
  <div>
    <div v-for="(i, index) in prCurrentItems" :key="i.id">    
      <div class="col-sm-12 row ic_listview">
        <p class="ic_list_id">
          <a href="#">{{ i.id }}</a>
        </p>
        <div class="col-sm-2">
          <div class="ic_list_iconbox">
            <img v-bind:src="'img/icons/' + prCurrentCategory + '/' + i.src" v-bind:alt="i.id">
          </div>
        </div> 
        <div class="col-sm-5 ic_listview_details">           
          <p>{{ i.description }}</p>
          <button class="ic_btn" v-on:click="addFavorite(i.id, i.src, i.type, i.svg)">Add to favorites</button>
          <button class="ic_btn" v-on:click="">More info</button>
        </div>  
        <div class="col-sm-5 ic_listview_svg">
          <!-- svg code -->            
          <textarea class="col-xs-12">{{ i.svg }}</textarea>
          <!-- end svg code -->
          <button class="ic_btn">Copy svg</button>
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
      "prCurrentCategory",
      "prCurrentItems"
    ],
    components: {},
    mounted: function () {},
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