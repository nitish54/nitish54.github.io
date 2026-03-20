# nitish54.github.io

Personal portfolio site for **Nitish Kumar Sinha** — Senior Software Engineer at Atlassian.

Live: [nitish54.github.io](https://nitish54.github.io)

## Stack

- React 16 (Create React App)
- Plain CSS with custom properties (dark theme)
- GitHub Actions → GitHub Pages (auto-deploy on push to `source`)
- Contact form → Google Sheets via Apps Script Web App

## Local development

```bash
npm install
npm start          # webpack dev server at http://localhost:3000
npm run build      # production build → ./build
npm run serve      # serve production build at http://localhost:3000
```

> Node 18+ requires `NODE_OPTIONS=--openssl-legacy-provider` due to webpack 4 — already set in the npm scripts.

## Deployment

Push to the `source` branch. GitHub Actions builds and publishes `./build` to the `master` branch automatically.

## Contact form setup

The contact form posts to a Google Apps Script Web App. To update the endpoint, replace the URL in `src/components/Contact.jsx`:

```js
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/.../exec';
```

Apps Script `doPost` function:

```js
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.email, data.subject, data.message]);
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Deploy as a Web App (Execute as: Me, Access: Anyone).

## Assets

| Path | Description |
|---|---|
| `public/images/profile.jpg` | Profile photo (circular, hero section) |
| `public/resume/NITISH KUMAR SINHA.pdf` | Resume (linked from navbar + hero CTA) |
