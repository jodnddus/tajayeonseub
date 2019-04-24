import express from "express";
import React from "react";
import { StaticRouter } from 'react-router-dom';
import { renderToString } from "react-dom/server";
import App from '../shared/App';
import fs from 'fs';
import path from 'path';
import "@babel/polyfill";

const app = express();
app.use(express.static(path.resolve(__dirname, '../../public')));

const indexHTML = fs.readFileSync(
  path.resolve('public/index.html'),
  'utf8'
);

const createPage = (rootHtml) => {
  console.log("createPage");

  let html = indexHTML;

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${rootHtml}</div>`
  )
  return html;
};

const serverRender = async (req, res) => {
  console.log("serverRender func");

  const appRenderingResult = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(createPage(appRenderingResult));
};

app.get("*", (req, res) => {
  console.log("app.get func");
  return serverRender(req, res);
});

app.listen(5000, () => {
  console.log(`Server is listening on http://localhost:${5000}`)
});