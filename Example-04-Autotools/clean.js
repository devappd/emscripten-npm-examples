const emscripten = require('emscripten-build');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const buildDir = path.join(__dirname, 'build');

// Initialize a build "bootstrap" object with a build configuration.
// The clean() call invokes the Makefile "clean" target.
emscripten.clean({
  "type": "autotools",
  "configure": {
    "path": "./src",
    "arguments": [
      "CPPFLAGS=-DGREETER=Node",
      `--bindir="${distDir}"`
    ]
  },
  "build": {
    "path": buildDir
  },
  "install": {
    "path": distDir
  }
}).then(_ =>
  // We're done!
  process.exit(0)
).catch(err => {
  console.error(err);
  process.exit(1);
});
