<template>
  <div class="home_commit_fetcher">
    <h2>Latest News</h2>
    <ul v-for="i in commits">
      <li>
        <p>{{ i.commit.committer.date }}</p>
        <p class="commit_fetcher_sha">{{ i.sha.slice(0, 7) }}</p>
        <p class="commit_fetcher_message">{{ i.commit.message }}</p>
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