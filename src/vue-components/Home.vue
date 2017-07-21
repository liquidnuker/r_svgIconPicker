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
      <!-- featuredicon/carouselintro -->
      <div class="row home_stage">
        <section class="col-sm-4 home_fi_container">
          <vcFeaturedIcon />
        </section>
        <div class="col-sm-8 home_carousel_container">
          <vcHomeCarousel />
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
          <vcHomeCatSelector />
        </section>
      </div>
      <!-- end news/iconcategoryselector -->
    </div>
    <!-- spreader -->
    <div class="row container-fluid spreader2">
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
const vcHomeCatSelector = () => import('./HomeCategorySelector.vue');
const vcFeaturedIcon = () => import('./FeaturedIcon.vue');
const vcHomeCarousel = () => import('./HomeCarousel.vue');

import {inject} from "../js/componentinjector.js";
export default {
  data () {
    return {    
    }
  },
  components: {
    vcHeader: vcHeader,
    vcHomeCatSelector: vcHomeCatSelector,
    vcFeaturedIcon: vcFeaturedIcon,
    vcHomeCarousel: vcHomeCarousel
  },
  mounted: function () {
    
  },
  methods: {
    // todo: inject this later
    mountCommitFetcher: function() {
      const vcCommitFetcher = resolve => {
        require.ensure(['./HomeCommitFetcher.vue'], () => {
          resolve(require('./HomeCommitFetcher.vue'))
        })
      };
      inject('#vc_commit_fetcher', vcCommitFetcher);
    }
  }
}
</script>