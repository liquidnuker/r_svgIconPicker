<template>
  <div class="ic_category_select">
    <!-- category select -->
    <p>Category:</p>
    <select v-model="selected">
    <option v-for="i in options" v-bind:value="i" v-on:click="switchCategory(i)">
      {{ i }}
    </option>
  </select>
  <!-- end category select -->
</div>
</template>
<script>
import {store} from "../js/store.js";
import {iconCategories} from "../js/iconcategories.js";
import {router} from "../js/router.js";
export default {
  data () {
    return {
      selected: store.currentCategory,
      options: iconCategories,
    }
  },
  mounted: function() {
    this.selected = store.currentCategory;
  },
  methods: {
    switchCategory: function(category) {
      router.push(category);
    }
  }
}
</script>