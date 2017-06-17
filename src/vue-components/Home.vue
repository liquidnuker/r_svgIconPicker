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
      <!-- featuredicon/carouselintro -->
      <div class="row home_stage">
        <section class="col-sm-4 home_fi_container">
          <!-- featured-icon mount -->
          <div id="vc-featured-icon">              
          </div>
          <!-- end featured-icon mount -->
        </section>
        <div class="col-sm-8 home_carousel_container">
          <!-- begin carousel mount -->
          <div id="vc_home_carousel">              
          </div>
          <!-- end carousel mount -->
        </div>
      </div>
      <!-- end featuredicon/carouselintro -->
      <!-- news/iconcategoryselector -->
      <div class="row home_news_categories">
        <section class="col-sm-4 home_news_container">
          <!-- begin commit fetcher mount-->
          <div id="vc_commit_fetcher">
          </div>
          <!-- end commit fetcher mount-->
        </section>
        <section class="col-sm-8 home_ic_selector">
          <!-- begin cat selector mount -->
          <div id="vc_home_ic_selector">              
          </div>
          <!-- end cat selector mount -->
        </section>
      </div>
      <!-- end news/iconcategoryselector -->
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
export default {
  data () {
    return {
    
    }
  },
  mounted: function () {
    console.log("home.vue mounted");
    // this.refreshItems();  
    this.mountHeader(); // [1]
  },
  methods: {
  mountHeader: function() {
      const vcHeader = resolve => {
        require.ensure(['./Header.vue'], () => {
          resolve(require('./Header.vue'))
        })
      };
      new Vue({
        el: '#vc-header-mount',
        render: h => h(vcHeader)
      });
      this.mountCategorySelector(); // [2]
    },
    mountCategorySelector: function() {
      const vcHomeCatSelector = resolve => {
        require.ensure(['./HomeCategorySelector.vue'], () => {
          resolve(require('./HomeCategorySelector.vue'))
        })
      };
      new Vue({
        el: '#vc_home_ic_selector',
        render: h => h(vcHomeCatSelector)
      });
      this.mountFeaturedIcon(); // [3]
    },
    mountFeaturedIcon: function() {
      const vcFeaturedIcon = resolve => {
        require.ensure(['./FeaturedIcon.vue'], () => {
          resolve(require('./FeaturedIcon.vue'))
        })
      };
      new Vue({
        el: '#vc-featured-icon',
        render: h => h(vcFeaturedIcon)
      });
      this.mountCarousel(); // [4]
    },
    mountCarousel: function() {
      const vcHomeCarousel = resolve => {
        require.ensure(['./HomeCarousel.vue'], () => {
          resolve(require('./HomeCarousel.vue'))
        })
      };
      new Vue({
        el: '#vc_home_carousel',
        render: h => h(vcHomeCarousel)
      });
      this.mountCommitFetcher(); // [5]
    },
    mountCommitFetcher: function() {
      const vcCommitFetcher = resolve => {
        require.ensure(['./HomeCommitFetcher.vue'], () => {
          resolve(require('./HomeCommitFetcher.vue'))
        })
      };
      new Vue({
        el: '#vc_commit_fetcher',
        render: h => h(vcCommitFetcher)
      });
    }
  }
}
</script>