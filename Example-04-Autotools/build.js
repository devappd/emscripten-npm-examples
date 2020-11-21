const emscripten = require('emscripten-build');
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const buildDir = path.join(__dirname, 'build');

// Initialize a build "bootstrap" object with a build configuration.
// The build() call then configures and builds the program.
emscripten.build({
  "type": "autotools",
  "configure": {
    "path": "./src",
    "arguments": [
      "CPPFLAGS=-DGREETER=Node",
      // This installs executables to ./dist instead of ./dist/bin.
      // Above, we resolved ./dist because this is passed verbatim.
      `--bindir="${distDir}"`
    ]
  },
  "build": {
    "path": buildDir
  },
  "install": {
    "path": distDir
  }
}).then(bootstrap =>
  // The "bootstrap" object can be re-used with the same configuration.
  // Here, the install() call refers to the install path listed above.
  bootstrap.install()
).then(_ => {
  // However, note that the install copied only the index.html file.
  // We need to copy the index.js and index.wasm files too!
  //
  // This JS Promise API is useful for performing manual operations
  // after compile.

  fs.copyFileSync(
    `${path.join(buildDir, 'src', 'index.js')}`, 
    `${path.join(distDir, 'index.js')}`
  );

  fs.copyFileSync(
    `${path.join(buildDir, 'src', 'index.wasm')}`, 
    `${path.join(distDir, 'index.wasm')}`
  );
}).then(_ =>
  // We're done!
  process.exit(0)
).catch(err => {
  console.error(err);
  process.exit(1);
});
