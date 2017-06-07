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
            featuredicon
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
          <div class="col-sm-8">
            iconcategory selector<br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    }
  }
}
</script>