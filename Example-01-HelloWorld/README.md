# Example-01-HelloWorld

This example demonstrates a C++ web application that is built by calling the command line
in an NPM script. [See the live sample here](https://devappd.github.io/emscripten-npm-examples/Example-01-HelloWorld/dist/index.html).

In this case, it changes to `./src` and calls `emscripten run em++ -o ../dist/index.html ./main.cpp`.

The `emscripten run` command activates the Emscripten SDK and accepts your build command.

You can also build an application by:

* Passing a Makefile -- [see the Make example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-02-Make).
* Passing a JS settings file -- [see the CMake example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-03-CMake).
* Using JS bindings -- [see the Autotools example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-04-Autotools).

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
