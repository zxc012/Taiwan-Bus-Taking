import jsSHA from "jssha";
import * as env from "../../env.variables.js";

export class DataService {
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
}
