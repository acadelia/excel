import { $ } from "@core/dom.js";

export class Excel {
  constructor(element, options) {
    this.$el = $(element);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create("div", "excel");
    this.components.forEach((Component) => {
      const $el = $.create("div", Component.className);
      const component = new Component($el);
      component.toHTML();
      $el.html(component.toHTML());
      $root.append($el);
    });
    return $root;
  }

  render() {
    // this.$el.insertAdjacentHTML("afterbegin", "hello");
    const node = document.createElement("h1");
    node.textContent = "hello";
    this.$el.append(this.getRoot().$el);
  }
}
