declare type BusStation = {
  /** 站位唯一識別代碼，規則為 {業管機關簡碼} + {StationID}，其中 {業管機關簡碼} 可於Authority API中的AuthorityCode欄位查詢 */
  StationUID: string;
  /** 站位代碼  */
  StationID: string;
  /** 站位名稱 */
  StationName: NameType;
  /** 站位位置 */
  StationPosition: PointType;
  /** 站位地址 */
  StationAddress: string;
  /** 站牌所屬的組站位ID */
  StationGroupID: string;
  /** 站牌與所行經此站牌之路線列表(資料會對路線展開，因此可能會有重複的站牌資料) */
  Stops: Array<StationStop>;
  /** 站牌位置縣市之代碼(國際ISO 3166-2 三碼城市代碼)[若為公路/國道客運路線則為空值] */
  LocationCityCode: string;
  /** 方位角，E:東行;W:西行;S:南行;N:北行;SE:東南行;NE:東北行;SW:西南行;NW:西北行 */
  Bearing: string;
  /** 資料更新日期時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) */
  UpdateTime: string;
  /** 資料版本編號 */
  VersionID: number;
};

declare type NameType = {
  /** 中文繁體名稱 */
  Zh_tw: string;
  /** 英文名稱 */
  En: string;
};

declare type PointType = {
  /** 位置經度(WGS84) */
  PositionLon: number;
  /** 位置緯度(WGS84) */
  PositionLat: number;
  /** 地理空間編碼 */
  GeoHash: string;
};

declare type StationStop = {
  /** 站牌唯一識別代碼，規則為 {業管機關簡碼} + {StopID}，其中 {業管機關簡碼} 可於Authority API中的AuthorityCode欄位查詢 */
  StopUID: string;
  /** 地區既用中之站牌代碼(為原資料內碼)  */
  StopID: string;
  /** 站牌名稱 */
  StopName: NameType;
  /** 路線唯一識別代碼，規則為 {業管機關簡碼} + {RouteID}，其中 {業管機關簡碼} 可於Authority API中的AuthorityCode欄位查詢 */
  RouteUID: string;
  /** 地區既用中之路線代碼(為原資料內碼) */
  RouteID: string;
  /** 路線名稱 */
  RouteName: NameType;
};
