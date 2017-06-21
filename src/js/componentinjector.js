// for injecting components in mounts
const inject = function (mount, component) {
  new Vue({
    el: mount,
    render: h => h(component)
  });
};

export {inject};