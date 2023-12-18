export class Excel {
  constructor(element, options) {
    this.$el = document.querySelector(element);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement("div");
    this.components.forEach((Component) => {
      const component = new Component();
      console.log("component", component);
      component.toHTML();
      console.log("comp to html", component.toHTML());
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
