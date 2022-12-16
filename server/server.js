/** 3.3 Setting up Server Side */

import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = 8000;

const app = express();

//* ^ is means "beginning of the line" and $ mean "end of the line"
app.use('^/$', (req, res, next) => {
  /** BEFORE going any farther, "npm run build" */

  /** Now we read the "build" file */
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }

    /** We'll use the 'build' file to render the page (by updating the index.html from here by targeting the root div) */
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`,
      ),
    );
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
