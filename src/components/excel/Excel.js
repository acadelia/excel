export class Excel {
  constructor(element, options) {
    this.$el = document.querySelector(element);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement("div");
    $root.classList.add("excel");
    this.components.forEach((Component) => {
      const $el = document.createElement("div");
      $el.classList.add(Component.className);
      const component = new Component($el);
      //     console.log("component", component);
      component.toHTML();
      //  console.log("comp to html", component.toHTML());
      $el.innerHTML = component.toHTML();
      $root.append($el);
    });
    return $root;
  }

  render() {
    // this.$el.insertAdjacentHTML("afterbegin", "hello");
    const node = document.createElement("h1");
    node.textContent = "hello";
    this.$el.append(this.getRoot());
  }
}
