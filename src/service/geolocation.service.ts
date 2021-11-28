import Wkt from "wicket";

export class GeoLocationService {
  public static async getCurrentLocation(): Promise<position> {
    const position: GeolocationPosition = await new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
    return {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    };
  }

  public static wkt2GeoJson(wellKnownText: string) {
    const wkt = new Wkt.Wkt();
    wkt.read(wellKnownText);
    console.log(JSON.stringify(wkt.toJson()));
    return JSON.stringify(wkt.toJson());
  }
}
