# 聯合福委會網頁 — 設計規格

## 技術選型
- 純 HTML + CSS
- 字型：Noto Sans TC（Google Fonts）

---

## 色彩系統

| 變數名 | Hex | 用途 |
|--------|-----|------|
| `--primary` | `#EB5A41` | Logo 顏色 |
| `--primary-400` | `#F8C4BB` | 卡牌顏色（粉紅） |
| `--primary-200` | `#FBE1DD` | Table 顏色 |
| `--secondary-dark` | `#428ECC` | 連結顏色 |
| `--secondary-light` | `#C1E3FF` | 卡牌顏色（淺藍） |
| `--yellow` | `#FAD782` | 卡牌顏色（黃） |
| `--green-light` | `#BEE2BA` | 卡牌顏色（淺綠） |
| `--text` | `#4A4A4A` | 主要文字 |
| `--text-secondary` | `#808080` | 次要文字 |
| `--border` | `#ECF1F4` | 表格框線 |
| `--bg` | `#F7F0E7` | 首頁背景 |
| `--bg-light` | `#FDFCFA` | 內頁背景 |

> 未使用：`--secondary` `#52B1FF`、`--green` `#4AAF40`

---

## 字型

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
font-family: 'Noto Sans TC', sans-serif;
```

---

## Icon 檔案

位置：`icon/`

| 檔案路徑 | 用途 |
|----------|------|
| `icon/logo.svg` | Header Logo |
| `icon/hero-icon/scholarship.svg` | 常用服務 — 子女獎學金 |
| `icon/hero-icon/envelope.svg` | 常用服務 — 婚喪生育禮金 |
| `icon/hero-icon/luggage.svg` | 常用服務 — 旅遊活動 |
| `icon/hero-icon/contest.svg` | 常用服務 — 院長盃 |
| `icon/hero-icon/club.svg` | 常用服務 — 社團活動 |

---

## 頁面結構

### 1. Navbar
- 雙層：上方工具列（尋找工人 / 電子簽核系統 / ITRIWeb）+ 下方主選單
- Logo 靠左，選單靠右
- 主選單：員工福利 / 旅遊活動 / 社團與競賽 / 關於聯合福委會

### 2. 常用服務（Hero Section）
- 背景色：`--bg` (`#F7F0E7`)，左右有裝飾圖案
- 5 個服務卡片橫排，底部波浪分隔線

| 卡片 | Icon | 背景色 |
|------|------|--------|
| 子女獎學金 | `scholarship.svg` | `--secondary-light` `#C1E3FF` |
| 婚喪生育禮金 | `envelope.svg` | `--primary-400` `#F8C4BB` |
| 旅遊活動 | `luggage.svg` | `--green-light` `#BEE2BA` |
| 院長盃 | `contest.svg` | `--yellow` `#FAD782` |
| 社團活動 | `club.svg` | `--primary-400` `#F8C4BB` |

### 3. 最新活動
- 列表形式，左側類別標籤 `【旅遊】`，右側日期靠右對齊

### 4. 行事曆
- 3欄 × 4列 CSS Grid（12個月）
- 每月：白底圓角卡片，標題有彩色星號裝飾，內容為 bullet list

### 5. Footer
- 深色背景
- Email / Office / Ext 資訊
- 版權文字
