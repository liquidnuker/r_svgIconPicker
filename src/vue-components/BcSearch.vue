<template>
  <div>
    <div class="col-sm-4 ic_breadcrumb">
      <a href="index.html#/">Home</a> <p>&gt;</p>&nbsp;
      <p>{{ this.$route.params.category }}</p>
    </div>
    <div class="col-sm-8 ic_search">
      <!-- begin search -->
      <label for='hy'>Search {{prCurrentCategory}}:</label>
      <input type="text" id='hy'/>
      <!-- end search -->
      </div>
  </div>
</template>
<script>

export default {
  data () {
    return {   

    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prCurrentCategory"
  ],
  components: {
  },
  mounted: function () {
    console.log(" mounted");
  },
  methods: {        
  }
}
</script>