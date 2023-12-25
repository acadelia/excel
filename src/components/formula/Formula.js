import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = "excel__formula";

  constructor($root) {
    super($root, { listeners: ["input", "click"] });
  }

  onInput(ev) {
    console.log("formula on input", ev);
  }

  toHTML() {
    return `<div class="info">Fx</div>
    <div contenteditable="true" class="input" spellcheck="false"></div>`;
  }
}
