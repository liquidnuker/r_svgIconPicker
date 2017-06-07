<template>
<div>
<!-- logo/favorites -->
<div class="row">
  <div class="col-sm-4">logo</div>
  <div class="col-sm-8">
    <!-- FavoriteCount.vue mount -->
    <div id="vc-fc-mount">
    </div>
    <!-- end FavoriteCount.vue mount -->
  </div>
</div>
<!-- end logo/favorites --> 
</div>
</template>
<script>
// import Vue from "vue";
export default {
  data () {
    return {

    }
  },
  mounted: function() {
    console.log("Header.vue mounted");
    this.mountFavorites();
  },
  methods: {
    mountFavorites: function() {
    const vcFavoriteCount = resolve => {
        require.ensure(['./FavoriteCount.vue'], () => {
          resolve(require('./FavoriteCount.vue'))
        })
      };
      new Vue({
        el: '#vc-fc-mount',
        render: h => h(vcFavoriteCount)
      });
    }
  }
}
</script>