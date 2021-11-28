import template from "./header.component.html";
import "./header.component.scss";

export default class {
  private container = document.createElement("div");
  constructor() {
    this.container.innerHTML = template;
  }

  get view() {
    return this.container.childNodes[0];
  }
}
