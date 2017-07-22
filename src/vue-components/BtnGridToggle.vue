<template>
  <div>
    <button class="ic_gridlist_toggle ic_btn" v-on:click="toggleGrid()">{{ prGridView ? "list" : "grid" }}</button>      
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
    "prGridView"
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