import template from "./home.view.html";
import "./home.view.scss";

import FooterComponent from "@root/components/footer/footer.component";
import { RouterService } from "@root/service/router.service";

export default class {
  mount(container: Element) {
    // console.log("styles :>> ", styles);
    container.innerHTML = "";

    document.title = "Taiwan Bus Taking－台灣搭公車";

    const content = document.createElement("div");
    content.innerHTML = template;

    container.appendChild(content?.childNodes[0]);
    container.appendChild(new FooterComponent().view);

    this.bindBtnEvent(container);
  }

  private bindBtnEvent(container: Element) {
    const searchNearByBusStop: HTMLDivElement = container.querySelector(
      "#searchNearByBusStop"
    );

    searchNearByBusStop.addEventListener("click", () => {
      RouterService.go("/nearBy-bus-stop/");
    });
  }
}
