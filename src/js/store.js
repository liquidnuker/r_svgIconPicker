const store = {
  // for default items. not filtered
  allItems: "",

  // for filteredItems
  currentitems: "",

  // for category selector
  currentCategory: "",
  
  // favorites.vue
  favorites: [
    {
      category: "category1",
      id: "id1",
      type: "",
      src: "src1",
      svg: "svg1",
      date: "date1",
      notes: "notes1",
      description: "description1"
    }
  ]
};

export {store};