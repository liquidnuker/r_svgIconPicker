<template>
  <div>
    <div class="row svgpker">
      <div class="row ic_container">
        <!-- vcHeader mount-->
        <div id="vc-header-mount">          
        </div>
        <!-- end vcHeader mount -->
        <!-- featuredicon/carouselintro -->
        <div class="row stage">
          <section class="col-sm-4 featured_icon_container">
            <h2>Featured Icon</h2>
            <!-- featured-icon mount -->
            <div id="vc-featured-icon">              
            </div>
            <!-- end featured-icon mount -->
          </section>
          <div class="col-sm-8 carousel_container">
            <!-- begin carousel mount -->
            <div id="vc_home_carousel">              
            </div>
            <!-- end carousel mount -->
          </div>
        </div>
        <!-- end featuredicon/carouselintro -->
        <!-- news/iconcategoryselector -->
        <div class="row">
          <section class="col-sm-4 news_container">
            <h2>news</h2>
          </section>
          <section class="col-sm-8 home_cat_selector">
            <h2>iconcategory selector</h2>
            <!-- begin cat selector mount -->
            <div id="vc_home_cat_selector">              
            </div>
            <!-- end cat selector mount -->
          </section>
        </div>
        <!-- end news/iconcategoryselector -->
        <footer class="col-sm-12 row">
          mini footer        
        </footer>  
      </div>
    </div>
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
    this.mountHeader();
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
      this.mountCategorySelector();
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
      this.mountCarousel();
    },
    mountCategorySelector: function() {
      const vcHomeCatSelector = resolve => {
        require.ensure(['./HomeCategorySelector.vue'], () => {
          resolve(require('./HomeCategorySelector.vue'))
        })
      };
      new Vue({
        el: '#vc_home_cat_selector',
        render: h => h(vcHomeCatSelector)
      });
      this.mountFeaturedIcon();
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
    }
  }
}
</script>