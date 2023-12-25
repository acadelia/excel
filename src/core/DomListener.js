import { capital } from "./utils";

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
      const method = `on${capital(listener)}`;
      console.log(method);
      this.$root.on(listener, () => {
        console.log("hello");
      });
    });
  }
  removeDomListeners() {}
}
