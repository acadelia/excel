export class DOM {
  constructor(selector) {
    this.$el =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
  }

  html(html) {
    if (typeof html === "string") {
      this.$el.innerHTML = html;
      return this;
    }
    return this.el.outerHTML.trim();
  }

  append(node) {
    if (node instanceof DOM) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild();
    }
    return this;
  }

  clear() {
    this.html("");
    return this;
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }
}

export function $($el) {
  return new DOM($el);
}

$.create = (tagName, classes = "") => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
