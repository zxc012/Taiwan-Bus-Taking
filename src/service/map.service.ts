import L from "leaflet";
import * as env from "../../env.variables.js";

export class MapService {
  private static map: L.Map;
  public static createMap(mapId: string) {
    this.map = L.map(mapId).setView([25.0455775, 121.5217241], 15);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoienhjMDEyIiwiYSI6ImNrdzJhdndkeGJvZzgybnF3bGM3MDNkYjkifQ.DM60EYi4EHbkfNJMg1Z0pA",
      }
    ).addTo(this.map);
  }

  public static async setLocation(position: position, zoom?: number) {
    this.map.setView([position.latitude, position.longitude], zoom);
  }

  public static addMarker(position: position, iconOption: L.IconOptions) {
    const icon = L.icon(iconOption);
    const marker = L.marker([position.latitude, position.longitude], {
      icon: icon,
    }).addTo(this.map);

    return marker;
  }

  public static changeMarkerIcon(marker: L.Marker, iconOption: L.IconOptions) {
    marker.setIcon(L.icon(iconOption));
  }
}
