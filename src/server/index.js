import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from '../shared/App';

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root">${renderToString(<App />)}</div>
          <script type="text/javascript" src="/bundle.js"></script>
        </body>
      </html>
    `);
});

app.listen(5000, () => {
    console.log(`Server is listening on port: 5000`)
});