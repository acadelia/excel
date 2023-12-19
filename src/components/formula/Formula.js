import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = "excel__formula";
  toHTML() {
    return `<div class="info">Fx</div>
    <div contenteditable="true" class="input" spellcheck="false"></div>`;
  }
}
