export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error("root doesn't exist in DOM Listener");
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  initDomListeners() {
    console.log(this.listeners);
  }
  removeDomListeners() {}
}
