# Example-07-Dev-Server

This example demonstrates a C++ web application with a development server.

With the included `app.js`, you can start a test server and watch for changes in the C++ code. On
each code change, you can rebuild the C++ code and enable live reloading on your browser.

## Usage

* `npm run clean` -- Cleans the build via the Make `clean` target.
* `npm run build` -- Build the C/C++ code from `./src` and install into `./dist`
* `npm run start` -- Start a web server. Reloads on changes to `./dist`
* `npm run dev` -- Start a development server. Reloads on changes to `./dist` and rebuilds the C++
code on changes to `./src`

### Web Server Arguments

`node ./app.js`

* `--watch` -- Watch for changes in source path, then rebuild
* `--source "./src"` -- Path to watch for C/C++ changes
* `--dist "./dist"` -- Path to serve web files from
* `--port 3000` -- Web server port
* `--open` -- Open web page upon server start

## License

MIT License.
