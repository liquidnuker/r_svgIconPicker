import "./vendor/jPages.min.js";

const pager = {
  activate: function () {
    $(".jpages_pg").jPages({
      containerID: "jpages_pg-holder",
      first: "first",
      previous: "previous",
      next: "next",
      last: "last",
      links: "numeric", // blank || title
      delay: 0, // to remove fade
      fallback: 0, // to remove fade
      startPage: 1,
      perPage: 18,
      midRange: 5,
    });
  },
  reActivate: function (timeout) {
    setTimeout(function () {
      pager.activate();
    }, timeout);
  },
  destroy: function () {
    if ($(".jpages_pg").jPages()) {
      $(".jpages_pg").jPages("destroy");
    } else {
      return;
    }
  }
};

export {pager};