<template>
  <div class="row svgpker">
    <!-- spreader -->
    <div class="row container-fluid spreader">
      <div class="ic_container">
        <vcHeader />
      </div>
    </div>
    <!-- /spreader -->
    <div class="row ic_container">
     <!-- edit note -->
      <div class="modal1_bg" v-if="editNote">
        <div class="modal1_container col-xs-12">
          <label for="currentNote">edit note for: {{ editNoteId }}</label>
          <textarea id="currentNote" rows="3" v-model="currentNote"></textarea>
          <button class="ic_btn" v-on:click="updateNote(editNoteId, currentNote)">update note</button>
          <button class="ic_btn" v-on:click="cancelEdit()">cancel</button>
        </div>
      </div>
      <!-- end edit note -->

      <!-- add new note -->
      <div class="modal1_bg" v-if="addNewNote">
        <div class="modal1_container col-xs-12">
          <label for="note">add note for: {{ noteTitle }}</label>
          <textarea id="note" rows="3" v-model="note"></textarea>
          <button class="ic_btn" v-on:click="addNote(noteTitle, note)">save</button>
          <button class="ic_btn" v-on:click="cancelNote()">cancel</button>
          <hr>
        </div>
      </div>
      <!-- end add new note -->

      <!-- breadcrumb/search -->
      <div class="row bc_search_container">
        <div class="col-sm-12 ic_breadcrumb">
          <a href="index.html#/">Home</a>
          <p>&gt;</p>&nbsp;
          <p>Favorites</p>
        </div>
      </div>
      <!-- end breadcrumb/search -->

      <!-- category/type -->
      <div class="row ic_cattype_container">
        <div class="col-sm-4">
          extra
        </div>
        <div class="col-sm-8">
          <span v-if="fcVisible" class="ic_filter-controls">
            <p>Type:</p>
            <img v-on:click="filterItems('all')" src="img/icons/unsorted/noborders_transpa1.svg" alt="show all">
            <img v-on:click="filterItems('noborder')" src="img/icons/unsorted/noborders_transpa1.svg" alt="show noborders">
            <img v-on:click="filterItems('square')" src="img/icons/unsorted/square_transpa1.svg" alt="show square">
            <img v-on:click="filterItems('circle')" src="img/icons/unsorted/circle_transpa1.svg" alt="show circle">
            <img v-on:click="filterItems('triangle')" src="img/icons/unsorted/triangle_transpa1.svg" alt="show triangle">
            <img v-on:click="filterItems('roundedborder')" src="img/icons/unsorted/rounded_transpa1.svg" alt="show rounded border">
          </span>
          <button class="ic_gridlist_toggle ic_btn" v-on:click="toggleGrid()">{{ gridView ? "list" : "grid" }}</button>
        </div>
      </div>
      <!-- end category/type -->

      <!--top ic_pg-controls -->
      <div class="row pg_container">
        <div class="col-sm-12 row ic_pg-controls">
          <div class="jpages_pg">
            top paginator
          </div>          
        </div>  
      </div>
      <!--end top ic_pg-controls -->

      <!-- ic_pg-holder -->
      <div class="row ic_pg_container">
        <div class="col-sm-12" id="jpages_pg-holder">
          <!-- gridview -->
          <div v-if="gridView" v-for="(i, index) in currentItems" :key="i">
            <div class="col-xs-3 col-sm-2 fav_ic_iconbox" id="ic_iconbox">          
              <div class="fav_ic_holder">
                <p class="ic_toggle">{{ i.id }}</p>
              <img v-bind:src="'img/icons/' + i.category + '/' + i.src" v-bind:alt="i.id">
              <div class="ic_tooltip">
                <button class="ic_btn" v-on:click="removeItem(i.id)">remove</button>
              </div> 
              </div>       
            </div>
          </div>
          <!-- end gridview -->
          <!-- listview -->
          <div v-else>
            <div class="col-sm-12 row ic_listview">
              <div class="row favorites_list_title">
                <p class="ic_list_id">
                  <a href="#">{{ i.id }}</a>
                </p>
                <button class="ic_btn" v-on:click="removeItem(i.id)">remove from favorites</button>
              </div>
              <p class="favorites_category">category: {{ i.category }}</p>
              <div class="col-sm-2">
                <div class="ic_list_iconbox">
                  <img v-bind:src="'img/icons/' + i.category + '/' + i.src" v-bind:alt="i.id">
                </div>
              </div> 
              <div class="col-sm-5 ic_listview_details">           
                <p>{{ i.description }}</p>
                <div v-if="i.notes !==''">
                  <p v-model="i.notes">{{ i.notes }}</p>
                  <button class="ic_btn" v-on:click="editNoteToggle(i.id, i.notes)">update note</button>
                  <button class="ic_btn" v-on:click="deleteNote(i.id)">delete note</button>
                </div>
                <div v-else>
                  <button class="ic_btn" v-on:click="addNoteToggle(index, i.id)">add note for {{ i.id }}</button>
                </div>
              </div>  
              <div class="col-sm-5 ic_listview_svg">
                <!-- svg code -->
                <textarea class="col-xs-12">{{ i.svg }}</textarea>
                <!-- end svg code -->
                <button class="ic_btn">copy svg</button>
              </div>
            </div>              
          </div>
          <!-- end listview -->
        </div>
      </div>
      <!-- end ic_pg-holder -->

      <!--bottom ic_pg-controls -->
      <div class="row pg_container">
        <div class="col-sm-12 row ic_pg-controls">
          <div class="jpages_pg">
            top paginator
          </div>          
        </div>  
      </div>
      <!--end bottom ic_pg-controls -->
    </div>
    <!-- spreader -->
    <div class="row container-fluid spreader">
      <div class="ic_container">
        <footer class="col-sm-12 row main_footer">
          mini footer
        </footer>
      </div>
    </div>
    <!-- /spreader -->
  </div>
</template>
<script>
const vcHeader = () => import('./Header.vue');

import {pager} from "../js/paginator.js";
import {store} from "../js/store.js";
import {indexFinder} from "../js/indexfinder.js";
export default {
  data () {
    return {
      // for default items. not filtered
      allItems: store.favorites,

      // used for filter.
      currentItems: store.favorites,

      // add-notes
      addNewNote: false,
      noteTitle: "",
      note: "",
      noteIndex: "",

      // edit-notes
      editNote: false,
      editNoteId: "",
      currentNote: "",

      // filter buttons      
      fcVisible: true,

      gridView:  false
    };
  },
  components: {
    vcHeader: vcHeader
  },
  watch: {
    allItems: function () {
      // console.log("favorites triggered");
      // destroy paginator instance
      pager.destroy();
      // optional
      this.refreshItems();
    }
  },
  mounted: function () {
    this.refreshItems();  
    this.mountHeader();
      
  },
  methods: {
    mountHeader: function() {
      const vcHeader = resolve => {
        require.ensure(["./Header.vue"], () => {
          resolve(require("./Header.vue"));
        });
      };
      new Vue({
        el: "#vc-header-mount",
        render: h => h(vcHeader)
      });
    },
    toggleGrid: function() {
      this.gridView = !this.gridView;         
    },
    refreshItems: function() {   
      pager.activate();
    },
    pushitem: function() {
      var x = Date().toString();
      store.favorites.push({
        id: "id2",
        src: "src2",
        type: "type2",
        svg: "svg2",
        notes: x,
        date: x
      });
    },
    removeItem: function(id) {
      pager.destroy();
      // items change index when filtered, so lets find index by id
      let indexToRemove = indexFinder(id);
      store.favorites.splice(indexToRemove, 1);
      this.currentItems = this.allItems;
    },
    editNoteToggle: function(id, notes) {
      this.editNote = true;
      this.editNoteId = id;
      this.currentNote = notes;
    },
    addNoteToggle: function(index, id) {
      this.addNewNote = true;
      this.noteTitle = id;
    },
    addNote: function(noteTitle, newNote) {    
      let newNoteIndex = indexFinder(noteTitle);
      store.favorites[newNoteIndex].notes = newNote;
      
      // reset + close addNote area
      this.cancelNote();
    },
    cancelNote: function() {
      this.note = "";
      this.addNewNote = false;
    },
    updateNote: function(id, updatedNote) {      
      let indexToUpdate = indexFinder(id);
      store.favorites[indexToUpdate].notes = updatedNote;
      this.cancelEdit();
    },
    cancelEdit: function() {
      this.currentNote = "";
      this.editNote = false;
    },
    deleteNote: function(id) {      
      let indexToDelete = indexFinder(id);
      store.favorites[indexToDelete].notes = "";
    },
    filterItems: function(typeToFilter) {
      if (typeToFilter === "all") {
        pager.destroy();

        // set currentItems to default allItems
        this.currentItems = this.allItems;
        pager.reActivate(50);
      } else {
        pager.destroy();
        let filteredType = "";
        console.log(typeToFilter);

        filteredType = this.allItems.filter(function (el) {
          return el.type === typeToFilter; 
          // && el.property2 === "this2";
        });  

        // set currentItems to filtered items
        this.currentItems = filteredType;
        pager.reActivate(50);          
      }        
    }
  }
};
</script>