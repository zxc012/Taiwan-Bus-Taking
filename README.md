# Taiwan-Bus-Taking

## DEMO 網頁

https://zxc012.github.io/Taiwan-Bus-Taking

## 作品說明

The F2E 第三週 全台公車動態時刻查詢應用服務

此專案採用了TDX運輸資料流通服務作為資料來源(https://tdx.transportdata.tw/api-service/swagger)，使用了webpack將sass、typescript及html打包，另外為了做出SPA的效果，在專案中自行設計了router服務作為頁面的切換。

## 系統說明

專案運行步驟如下

1.請先將專案以任一種方式clone下來

2.執行 npm i 或 npm install 下載 node_modules 檔案

3.在專案的根目錄底下新增檔案「.env」檔案，在檔案中新增以下內容

```
APPID=TDX API的APPID
APPKEY=TDX API的APPKEY
```

※若沒有申請TDX的APPKEY，可以透過上面的連結申請，或者直接不使用也可，TDX有提供一天數十次的額度。

4.專案運行可使用以下指令

- npm run dev 以 development 模式建置
- npm run build 以 production 模式建置
- npm run start 開啟開發伺服器

## 資料夾說明

- assets － 靜態資源
  - images 存放圖片、icon 及 logo 等圖檔
  - styles 存放全域樣式表
  - fonts 存放字型
- components － 自定義元件
- service － 服務
  - api.data.service.ts TDX api 資料服務
  - geolocation.serive.ts 座標物件處理服務
  - map.service.ts 地圖服務
  - router.service.ts 路由服務
- typing － typescript 定義檔
- views － 頁面
  - home 首頁
  - nearBy-bus-stop 附近的公車站牌

## 使用技術

- webpack
- bootstrap

## 第三方服務

- leaflet(MapBox)
