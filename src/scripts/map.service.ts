import L from "leaflet";
import Wkt from "wicket";
import * as env from "../../env.variables.js";

export class MapService {
  // private static map: L.Map;
  // public static createMap(mapId: string) {
  //   this.map = L.map(mapId).setView([25.0597679, 121.5519794], 15);
  //   L.tileLayer(
  //     "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  //     {
  //       attribution:
  //         'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //       maxZoom: 18,
  //       id: "mapbox/streets-v11",
  //       tileSize: 512,
  //       zoomOffset: -1,
  //       accessToken: env.MapKey,
  //     }
  //   ).addTo(this.map);
  // }
  // public static async setLocation(lng: number, lat: number, zoom?: number) {
  //   this.map.setView([lng, lat], zoom);
  // }
  // public static addMarker(lng: number, lat: number) {
  //   const marker = L.marker([lng, lat]).addTo(this.map);
  //   marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  // }
  // public static wkt2GeoJson(wellKnownText: string) {
  //   const wkt = new Wkt.Wkt();
  //   wkt.read(wellKnownText);
  //   console.log(JSON.stringify(wkt.toJson()));
  //   return JSON.stringify(wkt.toJson());
  // }
}
