# 四國，秋日慢行｜GitHub Pages 版

這個資料夾是可以直接部署到 GitHub Pages 的靜態網站，不需要安裝套件、不需要執行建置，也沒有壓縮或混淆程式碼。

## 檔案內容

- `index.html`：網頁結構與文字區塊
- `styles.css`：完整視覺樣式
- `app.js`：12 天行程資料與互動功能
- `assets/cover.png`：網站封面
- `.nojekyll`：避免 GitHub Pages 使用 Jekyll 處理網站

## 部署方法

1. 在 GitHub 建立新的 repository。
2. 把這個資料夾內的所有檔案與 `assets` 資料夾上傳到 repository 根目錄。
3. 進入 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**。
5. Branch 選擇 `main`，資料夾選擇 `/ (root)`，按下 **Save**。
6. 等待 GitHub 顯示網站網址。

## 修改行程

使用文字編輯器開啟 `app.js`。每一天都位於 `days` 陣列中；景點的時間、標題、摘要、詳細說明、地圖及標籤都能直接修改。

網站沒有依賴外部框架或資料庫，所有行程內容都保留在可閱讀的原始檔裡。
