import jsSHA from "jssha";
import * as env from "../../env.variables.js";

enum direction {
  "E" = "向東",
  "W" = "向西",
  "S" = "向南",
  "N" = "向北",
  "SE" = "向東南",
  "NE" = "向東北",
  "SW" = "向西南",
  "NW" = "向西北",
}

export class ApiDataService {
  /** Api 驗證 header */
  private static getAuthorizationHeader() {
    const AppID = env.AppId;
    const AppKey = env.AppKey;

    const UTCString = new Date().toUTCString();
    const ShaObj = new jsSHA("SHA-1", "TEXT");
    ShaObj.setHMACKey(AppKey, "TEXT");
    ShaObj.update("x-date: " + UTCString);
    const HMAC = ShaObj.getHMAC("B64");
    const Authorization =
      'hmac username="' +
      AppID +
      '", algorithm="hmac-sha1", headers="x-date", signature="' +
      HMAC +
      '"';
    return { Authorization: Authorization, "X-Date": UTCString };
  }

  // 取得附近公車站牌資訊(/v2/Bus/Station/NearBy)
  public static async getNearByStopInfo(
    position: position
  ): Promise<Array<stopInfo>> {
    return await fetch(
      `https://ptx.transportdata.tw/MOTC/v2/Bus/Station/NearBy?$orderby=StationName/Zh_tw,StationID&$spatialFilter=nearby(${position.latitude},${position.longitude},500)&$filter=Contains(StationUID,LocationCityCode)&$format=JSON`,
      {
        headers: this.getAuthorizationHeader(),
      }
    )
      .then((response) => response.json() as Promise<Array<BusStation>>)
      .then((dataList) =>
        dataList.map((data) => ({
          id: data.StationUID,
          name:
            (data?.StationName?.Zh_tw ?? data?.StationName?.En ?? "查無資料") +
            `(${direction[data.Bearing]})`,
          position: {
            latitude: data.StationPosition.PositionLat,
            longitude: data.StationPosition.PositionLon,
          },
          routes: data.Stops.map((stopInfo) => ({
            name:
              stopInfo?.RouteName?.Zh_tw ?? data?.StationName?.En ?? "查無資料",
            id: stopInfo.RouteUID,
          })),
        }))
      );
  }

  // 取得縣市的站牌路線[]
}
