<template>
  <div>
    <div class="row svgpker">
      <div class="row ic_container">
        <!-- vcHeader mount-->
        <div id="vc-header-mount">          
        </div>
        <!-- end vcHeader mount -->
        <!-- featuredicon/carouselintro -->
        <div class="row">
          <div class="col-sm-4">
            <!-- featured-icon mount -->
            <div id="vc-featured-icon">              
            </div>
            <!-- end featured-icon mount -->
          </div>
          <div class="col-sm-8">
            carousel/introtext
          </div>
        </div>
        <!-- end featuredicon/carouselintro -->
        <!-- news/iconcategoryselector -->
        <div class="row">
          <div class="col-sm-4">
            news
          </div>
          <div class="col-sm-8 home_cat_selector">
            <p>iconcategory selector</p>
            <div class="row home_cat_icons">
              <div class="col-sm-4">1</div>
              <div class="col-sm-4">2</div>
              <div class="col-sm-4">3</div>
              <div class="col-sm-4">4</div>
              <div class="col-sm-4">5</div>
              <div class="col-sm-4">6</div>
            </div>    
          </div>
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