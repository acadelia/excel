import { capital } from "./utils";

export const getMethodName = (eventName) => {
  return `on${capital(eventName)}`;
};

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error("root doesn't exist in DOM Listener");
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        const name = this.name || "";
        throw new Error(
          `method ${method} is not implemented in ${name} component`
        );
      }
      console.log(method);
      this.$root.on(listener, this[method].bind(this));
    });
  }
  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (this[method]) {
        this.$root.off(listener, this[method].unbind(this));
      }
    });
  }
}
