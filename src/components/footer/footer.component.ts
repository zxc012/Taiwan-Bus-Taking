import template from "./footer.component.html";
import "./footer.component.scss";

export default class {
  private container = document.createElement("div");
  constructor() {
    this.container.innerHTML = template;
  }

  get view() {
    return this.container.childNodes[0];
  }
}
