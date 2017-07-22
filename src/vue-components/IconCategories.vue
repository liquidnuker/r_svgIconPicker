<template>
  <div class="row svgpker">
    <!-- spreader -->
    <div class="row container-fluid spreader">
      <div class="ic_container">
        <vcHeader />
      </div>
    </div>
    <!-- /spreader -->
    <div class="row ic_container">

      <!-- breadcrumb/search -->
      <div class="row bc_search_container">
        <BcSearch :pr-current-category="currentCategory" />
      </div>
      <!-- end breadcrumb/search -->

      <!-- category/type -->
      <div class="row ic_cattype_container">
        <div class="col-sm-4">
          <!-- category selector mount -->
          <div id="cat-selector-mount">
          </div>
          <!-- end category selector mount -->
        </div>
        <div class="col-sm-8 ic_filter-controls">
          <span v-if="fcVisible">
            <p>Type:</p>
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
      <div class="row pg_container">
        <div class="col-sm-12 ic_pg-controls">
          <div class="jpages_pg">
          top paginator
          </div>          
        </div>  
      </div>
      <!--end top ic_pg-controls -->

      <!-- ic_pg-holder -->
      <div class="row ic_pg_container">
        <div class="col-sm-12" id="jpages_pg-holder">
        <!-- grid view -->
        <div v-if="gridView">
        <vcGridView 
        :pr-current-items="currentItems"
        :pr-current-category="currentCategory" />   
        </div>       
        <!-- end grid view -->
        <!-- list view -->
        <div v-else>
          <vcListView 
          :pr-current-items="currentItems"
          :pr-current-category="currentCategory" />
        </div>   
        <!-- end list view -->
      </div>
    </div>
    <!-- end ic_pg-holder -->

    <!--bottom ic_pg-controls -->
    <div class="row pg_container">
      <div class="col-sm-12 ic_pg-controls">
        <div class="jpages_pg">
          top paginator
        </div>          
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
const vcHeader = () => import('./Header.vue');
const BcSearch = () => import('./BcSearch.vue');
const vcGridView = () => import('./IcGridView.vue');
const vcListView = () => import('./IcListView.vue');

import 'whatwg-fetch';
import {inject} from "../js/componentinjector.js";
import {checkStatus, parseJSON} from "../js/fetchutils.js";
import {store} from "../js/store.js";
import {iconCategories} from "../js/iconcategories.js";
import {itemExists} from "../js/itemexists.js";
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
    components: {
      vcHeader: vcHeader,
      BcSearch: BcSearch,
      vcGridView: vcGridView,
      vcListView: vcListView
    },
    mounted: function () {
      this.checkCategory();
      // this.mountHeader();
    },
    watch: {
      $route: function () {
        pager.destroy();
        this.checkCategory();
      }
    },
    methods: {
      mountCatSelector: function () {
        const vcCatSelector = resolve => {
          require.ensure(['./CategorySelector.vue'], () => {
            resolve(require('./CategorySelector.vue'))
          })
        };
        inject('#cat-selector-mount', vcCatSelector);
      },
      refreshItems: function () {
        this.favorites = store.favorites;
        this.currentItems = store.currentItems;
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
      }
      
    }
}
</script>