# Taiwan-Bus-Taking

## DEMO 網頁

https://zxc012.github.io/Taiwan-Bus-Taking

## 作品說明

The F2E 第三週 全台公車動態時刻查詢應用服務

## 系統說明

專案運行

1.請先執行 npm i 或 npm install 下載 node_modules 檔案

2.專案運行可使用以下指令

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
