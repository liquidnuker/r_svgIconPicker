<template>
  <div class="row svgpker">
    <div class="row ic_container">
      <!-- vcHeader mount-->
      <div id="vc-header-mount">          
      </div>
      <!-- end vcHeader mount -->

      <!-- edit note -->
      <div class="modal1_bg" v-if="editNote">
        <div class="modal1_container col-xs-12">
          edit note for: {{ editNoteId }}
          <textarea rows="3" v-model="currentNote"></textarea>
          <button class="ic_btn" v-on:click="updateNote(editNoteId, currentNote)">update note</button>
          <button class="ic_btn" v-on:click="cancelEdit()">cancel</button>
        </div>
      </div>
      <!-- end edit note -->

      <!-- add new note -->
      <div class="modal1_bg" v-if="addNewNote">
        <div class="modal1_container col-xs-12">
          add note for: {{ noteTitle }}
          <textarea rows="3" v-model="note"></textarea>
          <button class="ic_btn" v-on:click="addNote(noteTitle, note)">save</button>
          <button class="ic_btn" v-on:click="cancelNote()">cancel</button>
          <hr>
        </div>
      </div>
      <!-- end add new note -->
      <!-- breadcrumb/search -->
      <div class="row">
        <div class="col-sm-4 ic_breadcrumb">
          Home &gt; Favorites
        </div>
        <div class="col-sm-8">
          search
        </div>
      </div>
      <!-- end breadcrumb/search -->
      <!-- category/type -->
      <div class="row ic_cattype">
        <div class="col-sm-4">
          extra
        </div>
        <div class="col-sm-8">
          <span v-if="fcVisible" class="ic_filter-controls">
            type:
            <img v-on:click="filterItems('all')" src="img/icons/unsorted/noborders_transpa1.svg">
            <img v-on:click="filterItems('noborder')" src="img/icons/unsorted/noborders_transpa1.svg">
            <img v-on:click="filterItems('square')" src="img/icons/unsorted/square_transpa1.svg">
            <img v-on:click="filterItems('circle')" src="img/icons/unsorted/circle_transpa1.svg">
            <img v-on:click="filterItems('triangle')" src="img/icons/unsorted/triangle_transpa1.svg">
            <img v-on:click="filterItems('roundedborder')" src="img/icons/unsorted/rounded_transpa1.svg">
          </span>
          <button class="ic_gridlist_toggle ic_btn" v-on:click="toggleGrid()">{{ gridView ? "list" : "grid" }}</button>
        </div>
      </div>
      <!-- end category/type -->
      <!--top ic_pg-controls -->
      <div class="col-sm-12 row ic_pg-controls">
        <div class="jpages_pg">
          top paginator
        </div>          
      </div>  
      <!--end top ic_pg-controls -->
      <!-- ic_pg-holder -->
      <div class="row col-sm-12" id="jpages_pg-holder">
        <!-- gridview -->
        <div v-if="gridView" v-for="(i, index) in currentItems" :key="i">
          <div class="col-xs-3 col-sm-2 ic_iconbox" id="ic_iconbox">          
            <p class="ic_toggle"></p>
            <img>
            <div class="ic_tooltip">
              <button class="ic_btn">add</button>
              <button class="ic_btn" v-on:click="">svg</button>  
            </div>        
          </div>
        </div>
        <!-- end gridview -->
        <!-- listview -->
        <div v-else>
          <div class="col-sm-12 row ic_listview">
            <p class="ic_list_id">{{ i.id }}</p>
            <button class="ic_btn" v-on:click="removeItem(i.id)">remove from favorites</button>
            <p>category: {{ i.category }}</p>
            <div class="col-sm-2">
              <div class="ic_list_iconbox">
                <img v-bind:src="'img/icons/' + i.category + '/' + i.src">
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
            <div class="col-sm-5">
              <!-- svg code -->
              <pre>
                <code>
                  {{ i.svg }}
                </code>
              </pre>
              <!-- end svg code -->
              <button class="ic_btn">copy svg</button>
            </div>
          </div>              
        </div>
        <!-- end listview -->
      </div>
      <!-- end ic_pg-holder -->
      <!--bottom ic_pg-controls -->
      <div class="col-sm-12 row ic_pg-controls">
        <div class="jpages_pg">
          top paginator
        </div>          
      </div>  
      <!--end bottom ic_pg-controls -->
    </div>
    <!-- /ic_container -->
  </div>
</template>
<script>
// import Vue from "vue";
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

      // notes-related
      addNewNote: false,
      noteTitle: '',
      note: '',
      noteIndex: '',

      editNote: false,
      editNoteId: '',
      currentNote: '',

      // filter buttons      
      fcVisible: true,

      // grid/list view
      gridView:  false
    }
  },
  watch: {
    allItems: function () {
      console.log("favorites triggered");

      // destroy paginator instance
      pager.destroy();
      // optional update, just to be sure
      this.refreshItems();
    }
  },
  mounted: function () {
    console.log("Favorites.vue mounted");
    this.refreshItems();  
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
      // this.noteIndex = index;
    },
    addNote: function(noteTitle, newNote) {
    
    let newNoteIndex = indexFinder(noteTitle);
    store.favorites[newNoteIndex].notes = newNote;
      
    // reset + close addNote area
    this.cancelNote();
    },
    cancelNote: function() {
      // reset notes placeholder
      this.note = '';
      // close addNote area
      this.addNewNote = false;
    },
    updateNote: function(id, updatedNote) {      
      let indexToUpdate = indexFinder(id);
      store.favorites[indexToUpdate].notes = updatedNote;

      this.cancelEdit();
    },
    cancelEdit: function() {
      this.currentNote = '';
      this.editNote = false;
    },
    deleteNote: function(id) {      
      let indexToDelete = indexFinder(id);
      store.favorites[indexToDelete].notes = '';
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

        // lodash  
        // filteredType = filter(this.allItems, {
        //   type: typeToFilter
        // });

        // vanilla filter
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
}
</script>