# Example-01-HelloWorld

This example demonstrates a C++ web application that is built by calling the command line
in an NPM script.

In this case, it changes to `./src` and calls `emscripten run em++ -o ../dist/index.html ./main.cpp`.

The `emscripten run` command activates the Emscripten SDK and accepts your build command.

## Usage

* `npm run build` -- Build the C/C++ code from `./src` and output into `./dist`
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
