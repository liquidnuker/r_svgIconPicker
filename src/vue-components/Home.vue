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
            carousel/introtext
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
            <div class="row home_cat_icons">
              <div class="col-xs-4">
                <p>category1</p>
                <img src="img/icons/ui/check1.svg">
              </div>
              <div class="col-xs-4">
                <p>category1</p>
                <img src="img/icons/ui/check1.svg">
              </div>
              <div class="col-xs-4">
                <p>category1</p>
                <img src="img/icons/ui/check1.svg">
              </div>
              <div class="col-xs-4">
                <p>category1</p>
                <img src="img/icons/ui/check1.svg">
              </div>
              <div class="col-xs-4">
                <p>category1</p>
                <img src="img/icons/ui/check1.svg">
              </div>
              <div class="col-xs-4">
                <p>category1</p>
                <img src="img/icons/ui/check1.svg">
              </div>
            </div>    
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

      this.mountFeaturedIcon();
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
    }
  }
}
</script>