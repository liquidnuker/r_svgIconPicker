<template>
  <div class="commit_fetcher">
    <ul v-for="i in commits">
      <li>
        <small>{{ i.commit.committer.date }}</small>
        <p>{{ i.sha.slice(0, 7) }}</p>
        <small>{{ i.commit.message }}</small>
      </li>
    </ul>
  </div>
</template>
<script>
import 'whatwg-fetch';
import {checkStatus, parseJSON} from "../js/fetchutils.js";
export default {
  data () {
    return {
      commits: ""
    }
  },
  mounted: function() {
    this.fetchCommits();
  },
  methods: {
    fetchCommits: function() {
      const apiUrl = "https://api.github.com/repos/liquidnuker/r_svgIconPker/commits?per_page=4&sha=master";
      let self= this;

      fetch(apiUrl)
      .then(checkStatus)
      .then(parseJSON)
      .then(function (data) {
        self.commits = data;
      })
      .catch(function (error) {
        console.log('request failed', error);
      });
    }
  }
}
</script>