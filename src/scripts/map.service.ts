import L from "leaflet";
import Wkt from "wicket";
import * as env from "../../env.variables.js";

// const fakeData =
//   "MULTILINESTRING ((120.567977424533 24.3286993887771,120.57099863795 24.3399073580033,120.568998760168 24.3405380455584,120.567058932669 24.3367749302846,120.559831887246 24.3400406494367,120.560119206996 24.341645294573,120.56050073268 24.3433882742156,120.561257757954 24.3453169549065,120.562551232482 24.3470892173183,120.563535936648 24.3476820984649,120.565464761423 24.3490373892965,120.565095274482 24.3497148591028,120.566609332459 24.3510306898687,120.569453773726 24.3529916082852,120.571997807626 24.3549524931009,120.574756422652 24.358047120834,120.575792398919 24.3591643622231,120.576098826164 24.3607507274842,120.5778901983 24.3632621355412,120.582502933879 24.3682457162288,120.583012211529 24.36828442569,120.583778992799 24.3703559125438,120.584041509915 24.3713523581958,120.584475695487 24.3715278896223,120.585290412785 24.3720255319533,120.586298258936 24.3723081754004,120.586060880801 24.3730884709426,120.58592677005 24.3740791705489,120.585967000999 24.3735483945393,120.585899946435 24.3742098729933,120.585639770774 24.3751840748487,120.585229396551 24.3764318945271,120.585207942768 24.3773456041844,120.586162805623 24.3792487594024,120.587804319503 24.3808782586779,120.590465065559 24.3828106665129,120.590003726759 24.3833371262019,120.589413637525 24.3836681466351,120.588709558055 24.383690741778,120.588005486379 24.3834006424109,120.586646944592 24.3834036961525,120.585824847503 24.3832894830644,120.585340708559 24.3830384719,120.585629044474 24.3826701925647,120.584381815004 24.3824026884931,120.584607122983 24.3837560893498,120.584778787257 24.384442562636,120.585250849678 24.3849335956445,120.586259357353 24.3860133639737,120.588576788713 24.3888861992902,120.589072998056 24.3897851693986,120.589440463256 24.3911531505249,120.589832063017 24.3935373150173,120.590424837727 24.3948368678137,120.591146354331 24.3961363955752,120.59233993391 24.3975922453911,120.593054744329 24.3979000235229,120.593769546139 24.397816979911))";

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
