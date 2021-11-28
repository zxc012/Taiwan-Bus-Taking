import template from "./nearBy-bus-stop.view.html";
import "./nearBy-bus-stop.view.scss";

import HeaderComponent from "@component/header/header.component";
import FooterComponent from "@component/footer/footer.component";
import { MapService } from "@root/service/map.service";
import { ApiDataService } from "@root/service/api.data.service";
import { GeoLocationService } from "@root/service/geolocation.service";

import userLocationIcon from "@img/icon-user-location.svg";
import markerDefaultIcon from "@img/icon-marker-default.svg";
import markerActiveIcon from "@img/icon-marker-active.svg";
import stopInfoComponent from "@root/components/stopInfo/stopInfo.component";
import { Marker } from "leaflet";

export default class {
  async mount(container: Element) {
    container.innerHTML = "";

    document.title = "Taiwan Bus Taking－台灣搭公車 查詢附近公車站牌";

    const content = document.createElement("div");
    content.innerHTML = template;

    container.appendChild(new HeaderComponent().view);
    container.appendChild(content.childNodes[0]);
    container.appendChild(new FooterComponent().view);
    MapService.createMap("map");

    const location = await GeoLocationService.getCurrentLocation();

    const markerList = [];

    MapService.setLocation(location);
    markerList.push(
      MapService.addMarker(location, { iconUrl: userLocationIcon })
    );

    const nearByStopInfo = await ApiDataService.getNearByStopInfo(location);

    let activeMarker: Marker;
    let activeStopInfoElement: Element;

    nearByStopInfo.forEach((stopInfo) => {
      const marker = MapService.addMarker(stopInfo.position, {
        iconUrl: markerDefaultIcon,
      });
      markerList.push(marker);
      marker.addEventListener("click", () => {
        if (activeMarker !== marker) {
          if (activeMarker) {
            MapService.changeMarkerIcon(activeMarker, {
              iconUrl: markerDefaultIcon,
            });
          }
          MapService.changeMarkerIcon(marker, { iconUrl: markerActiveIcon });
          activeMarker = marker;

          if (activeStopInfoElement) {
            activeStopInfoElement.classList.remove("border-info");
          }
          const stopInfoElement = container.querySelector(`#${stopInfo.id}`);
          stopInfoElement.classList.add("border-info");
          activeStopInfoElement = stopInfoElement;
        }
      });
    });

    console.log(nearByStopInfo);

    const stopList = container.querySelector("#stopList");
    nearByStopInfo.forEach((stopInfo) => {
      const stopInfoElement = new stopInfoComponent(stopInfo).view;
      stopList.appendChild(stopInfoElement);
    });
  }
}
