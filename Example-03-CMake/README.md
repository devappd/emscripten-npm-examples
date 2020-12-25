# Example-03-CMake

This example demonstrates a C++ web application that is built with CMake.

## Notes

This specific project is built by populating the configuration file `emscripten.config.js`. It allows
you to specify the paths to the `./CMakeLists.txt` script, the cached build, and the install path.
You can also specify arguments to the `./CMakeLists.txt` script and the compiler.

[You can view the configuration format here](https://github.com/devappd/emscripten-build-npm#configuration-files).

The NPM build script calls `emscripten configure`, `emscripten build` and `emscripten install` without arguments. This searches the project's root directory for `emscripten.config.js`.

You can also build an application by:

* Using a shell command -- [see the HelloWorld example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-01-HelloWorld).
* Passing a Makefile or CMakeLists.txt -- [see the Make example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-02-Make).
* Using JS bindings -- [see the Autotools example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-04-Autotools).

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
