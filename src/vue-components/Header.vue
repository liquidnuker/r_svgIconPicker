<template>
<!-- logo/favorites -->
<header class="row main_header">
  <div class="col-sm-4 header_logo_container">logo</div>
  <div class="col-sm-8">
    <!-- FavoriteCount.vue mount -->
    <div id="vc-fc-mount">
    </div>
    <!-- end FavoriteCount.vue mount -->
  </div>
</header>
<!-- end logo/favorites --> 
</template>
<script>
// import Vue from "vue";
export default {
  data () {
    return {

    }
  },
  mounted: function() {
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