<template>
  <div class="row svgpker">
    <!-- spreader -->
    <div class="row container-fluid spreader">
      <div class="ic_container">
        <!-- vcHeader mount-->
        <div id="vc-header-mount">          
        </div>
        <!-- end vcHeader mount -->
      </div>
    </div>
    <!-- /spreader -->
    <div class="row ic_container">

      <div class="row ic_tophover">
        <div class="col-sm-6">
          <p>{{ hoveritem }}</p>
        </div>
        <div class="col-sm-6">
          <p>{{ snippet }}</p>
        </div>
      </div>

      <!-- breadcrumb/search -->
      <div class="row">
        <div class="col-sm-4 ic_breadcrumb">
          <a href="index.html#/">Home</a> <p>&gt;</p>&nbsp;{{ this.$route.params.category }}
        </div>
        <div class="col-sm-8 ic_search">
          <!-- begin search -->
          <label for='hy'>search {{currentCategory}}:</label>
          <input type="text" id='hy'/>
          <!-- end search -->
        </div>
      </div>
      <!-- end breadcrumb/search -->

      <!-- category/type -->
      <div class="row ic_cattype">
        <div class="col-sm-4">
          <!-- category selector mount -->
          <div id="cat-selector-mount">
          </div>
          <!-- end category selector mount -->
        </div>
        <div class="col-sm-8 ic_filter-controls">
          <span v-if="fcVisible">
            type:
            <img v-on:click="filterItems('all')" src="img/icons/unsorted/noborders_transpa1.svg" alt="show all">
            <img v-on:click="filterItems('noborder')" src="img/icons/unsorted/noborders_transpa1.svg" alt="show noborders">
            <img v-on:click="filterItems('square')" src="img/icons/unsorted/square_transpa1.svg" alt="show square">
            <img v-on:click="filterItems('circle')" src="img/icons/unsorted/circle_transpa1.svg" alt="show circle">
            <img v-on:click="filterItems('triangle')" src="img/icons/unsorted/triangle_transpa1.svg" alt="show triangle">
            <img v-on:click="filterItems('roundedborder')" src="img/icons/unsorted/rounded_transpa1.svg" alt="show rounded border">
          </span>
          <button class="ic_gridlist_toggle ic_btn" v-on:click="toggleGrid()">{{ gridView ? "list" : "grid" }}</button>        
        </div>
      </div>
      <!-- end category/type -->

      <!--top ic_pg-controls -->
      <div class="col-sm-12 row ic_pg-controls">
        <div class="jpages_pg">
          top paginator
        </div>          
      </div>  
      <!--end top ic_pg-controls -->

      <!-- ic_pg-holder -->
      <div class="row col-sm-12" id="jpages_pg-holder" v-on:mouseout="showIconInfo()">
        <!-- grid view -->
        <div v-if="gridView" v-for="(i, index) in currentItems" :key="i.id">
          <div class="col-xs-3 col-sm-2 ic_iconbox" id="ic_iconbox" 
          v-on:mouseover="showIconInfo(i.id)" 
          v-on:click="selectitem(i.svg)">          
          <p class="ic_toggle">{{ i.id }}</p>
          <img v-bind:src="'img/icons/' + currentCategory + '/' + i.src" v-bind:alt="i.id">
          <div class="ic_tooltip">
            <button class="ic_btn" v-on:click="addFavorite(i.id, i.src, i.type, i.svg, i.description)">add</button>
            <button class="ic_btn" v-on:click="">svg</button>  
          </div>        
        </div>
      </div>
      <!-- end grid view -->
      <!-- list view -->
      <div v-else>
        <div class="col-sm-12 row ic_listview">
          <p class="ic_list_id">{{ i.id }}</p>
          <div class="col-sm-2">
            <div class="ic_list_iconbox">
              <img v-bind:src="'img/icons/' + currentCategory + '/' + i.src" v-bind:alt="i.id">
            </div>
          </div> 
          <div class="col-sm-5 ic_listview_details">            
            <p>{{ i.description }}</p>
            <button class="ic_btn" v-on:click="addFavorite(i.id, i.src, i.type, i.svg)">add to favorites</button>
            <button class="ic_btn" v-on:click="">more info</button>
          </div>  
          <div class="col-sm-5">
            <!-- svg code -->            
              <textarea class="col-xs-12">{{ i.svg }}</textarea>
            <!-- end svg code -->
            <button class="ic_btn">copy svg</button>
          </div>              
        </div>
      </div>   
      <!-- end list view -->
    </div>
    <!-- end ic_pg-holder -->

    <!--bottom ic_pg-controls -->
    <div class="col-sm-12 row ic_pg-controls">
      <div class="jpages_pg">
        top paginator
      </div>          
    </div>  
    <!--end bottom ic_pg-controls -->
  </div>
  <!-- spreader -->
  <div class="row container-fluid spreader">
    <div class="ic_container">
      <footer class="col-sm-12 row main_footer">
        mini footer
      </footer>
    </div>
  </div>
  <!-- /spreader -->
</div>
</template>
<script>
// import Vue from "vue";
import 'whatwg-fetch';
import {checkStatus, parseJSON} from "../js/fetchutils.js";
import {store} from "../js/store.js";
import {iconCategories} from "../js/iconcategories.js";
import {itemExists} from "../js/itemexists.js";
import {favoriteExists} from "../js/favoriteexists.js";
import {removeParamColons} from "../js/removeparamcolons.js";
import {pager} from "../js/paginator.js";
import horsey from "../js/vendor/horsey.min.js";
export default {
  data() {
      return {
        currentCategory: "",

        // for displaying items
        currentItems: "",

        hoveritem: "",
        snippet: "",

        // filter buttons
        fcVisible: false,

        gridView: true,

        favorites: store.favorites,
      }
    },
    mounted: function () {
      this.checkCategory();
      this.mountHeader();
    },
    watch: {
      $route: function () {
        pager.destroy();
        this.checkCategory();
      }
    },
    methods: {
      mountHeader: function () {
        const vcHeader = resolve => {
          require.ensure(['./Header.vue'], () => {
            resolve(require('./Header.vue'))
          })
        };
        new Vue({
          el: '#vc-header-mount',
          render: h => h(vcHeader)
        });
      },
      mountCatSelector: function () {
        const vcCatSelector = resolve => {
          require.ensure(['./CategorySelector.vue'], () => {
            resolve(require('./CategorySelector.vue'))
          })
        };
        new Vue({
          el: '#cat-selector-mount',
          render: h => h(vcCatSelector)
        });
      },
      refreshItems: function () {
        this.favorites = store.favorites;
        this.currentItems = store.currentItems;
      },
      showIconInfo: function (item) {
        this.hoveritem = item;
      },
      selectitem: function (item) {
        this.snippet = item;
      },
      checkCategory: function () {
        // check if category exists before loading json
        let categoryToCheck = removeParamColons(this.$route.params.category);
        if (!itemExists(categoryToCheck, iconCategories)) {
          console.log("404");
        } else {
          this.currentCategory = categoryToCheck;
          this.loadItems();
        }
      },
      loadItems: function () {
        let jsonUrl = "./src/js/ajax/" + this.currentCategory + ".json";
        let self = this;

        fetch(jsonUrl)
          .then(checkStatus)
          .then(parseJSON)
          .then(function (data) {
            // insert to allitems/default items.
            store.allItems = data[self.currentCategory];

            // insert to currentItems
            store.currentItems = data[self.currentCategory];

            // for category selector
            store.currentCategory = self.currentCategory;
          })
          .then(function () {
            // set currentItems to allitems/default
            self.currentItems = store.currentItems;
          })
          .then(function () {
            self.refreshItems();
            // item type filter
            self.fcVisible = true;
            self.mountCatSelector();
            self.activateSearch();
            pager.activate();
          })
          .catch(function (error) {
            console.log('request failed', error);
          });
      },
      filterItems: function (typeToFilter) {
        if (typeToFilter === "all") {
          pager.destroy();

          this.currentItems = store.allItems;
          pager.reActivate(4);

        } else {
          pager.destroy();

          let filteredType = "";
          filteredType = store.allItems.filter(function (el) {
            return el.type === typeToFilter;
          });

          store.currentItems = filteredType;

          this.refreshItems();
          pager.reActivate(4);
        }
      },
      activateSearch: function () {
        horsey(document.querySelector('#hy'), {
          source: [{
            list: this.currentItems
          }],
          getText: 'id',
          limit: 6
            // getValue: 'value'
        });

        // events of horsey instance
        document.getElementById("hy").addEventListener('horsey-show', function () {
        // console.log('h-show')
        });
      },
      toggleGrid: function () {
        pager.destroy();
        this.gridView = !this.gridView;
        pager.reActivate(4);
      },
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