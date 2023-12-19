export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error("root doesn't exist in DOM Listener");
    }
    this.$root = $root;
  }
}
