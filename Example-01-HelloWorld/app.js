////////////////////////////////////////////////////////////////////////
// Web server with file watcher sample
////////////////////////////////////////////////////////////////////////

const express = require('express');
const path = require('path');
const open = require('open');
const serveIndex = require('serve-index');

////////////////////////////////////////////////////////////////////////
// Read args
////////////////////////////////////////////////////////////////////////

let watch = false;
let sourceDir = './src';
let distPath = path.join(__dirname, 'dist');
let port = 3000;
let openWeb = false;

// --watch: Watch for changes in sourceDir, then rebuild
if (process.argv.includes('--watch'))
  watch = true;

// --source "./src": Path to watch for source changes
let sourceIndex = process.argv.indexOf('--source');
if (sourceIndex >= 0 && ++sourceIndex < process.argv.length)
  sourceDir = path.resolve(process.argv[sourceIndex]);

// --dist "./dist": Path to folder to serve web files from
let distIndex = process.argv.indexOf('--dist');
if (distIndex >= 0 && ++distIndex < process.argv.length)
  distPath = path.resolve(process.argv[distIndex]);

// --port 3000: Web server port
let portIndex = process.argv.indexOf('--port');
if (portIndex >= 0 && ++portIndex < process.argv.length) {
  let testVal = parseInt(process.argv[portIndex]);
  if (!isNaN(testVal))
    port = testVal;
}

// --open: Open web page upon server start
if (process.argv.includes('--open'))
  openWeb = true;

////////////////////////////////////////////////////////////////////////
// Watch for C/C++ changes
// Calls `npm run build` on changes to `sourceDir`
////////////////////////////////////////////////////////////////////////

if (watch) {
  const { spawn } = require('promisify-child-process');
  const which = require('which');
  const npmPath = which.sync('npm');

  function wp_onChange(wp, filePath, mtime, explanation) {
    let dateString = mtime ? `- ${new Date(mtime).toLocaleTimeString("en-US")}` : '';
    console.log(`Source ${dateString} - ${path.basename(filePath)} - ${explanation}`);
    wp.pause();
    
    spawn(npmPath, ['run', 'build'], { stdio: ['inherit', 'inherit', 'inherit'] })
    .then(_ => {
      console.log('Build is complete!');
      wp.watch(watchOpts)
    })
    .catch(_ => {
      console.log('Build errored!');
      wp.watch(watchOpts)
    });
  }

  function wp_onRemove(wp, filePath, explanation) {
    wp_onChange(wp, filePath, null, explanation);
  }

  // Initiate file watching
  const Watchpack = require("watchpack");

  let wp = new Watchpack({
    aggregateTimeout: 2000
  });

  let watchOpts = {
    directories: [sourceDir]
  }

  wp.watch(watchOpts);

  wp.on("change", function(filePath, mtime, explanation) {
    wp_onChange(wp, filePath, mtime, explanation);
  });

  wp.on("remove", function(filePath, explanation) {
    wp_onRemove(wp, filePath, explanation);
  });

  console.log(`Watching for source changes in ${sourceDir}...`);
}

////////////////////////////////////////////////////////////////////////
// HTTP server
////////////////////////////////////////////////////////////////////////

// Server setup
const app = express();

// Turn on the watcher for the HTTP static assets
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const liveReloadServer = livereload.createServer();

liveReloadServer.watch(distPath);
app.use(connectLivereload());

// Turn on the HTTP server
app.use(express.static(distPath));
app.use(serveIndex(distPath));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

  // Open the web page (Promise)
  if (openWeb)
    open(`http://localhost:${port}`);
});
