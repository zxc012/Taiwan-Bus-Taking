import template from "./stopInfo.component.html";
import "./stopInfo.component.scss";

export default class {
  constructor(stopInfo: stopInfo) {
    const renderContent = template
      .replace(/{{id}}/g, stopInfo.id)
      .replace(/{{title}}/g, stopInfo.name)
      .replace(
        /{{content}}/g,
        stopInfo.routes.map((route) => route.name).join(", ")
      );

    this.container.innerHTML = renderContent;
  }

  private container = document.createElement("div");

  get view() {
    return this.container.childNodes[0];
  }
}
