# Example-03-CMake

This example demonstrates a C++ web application that is built with CMake. [See the live sample here](https://devappd.github.io/emscripten-npm-examples/Example-03-CMake/dist/index.html).

## Notes

This specific project is built by populating the settings file `emscripten.settings.js`. It allows
you to specify the paths to the `./CMakeLists.txt` script, the cached build, and the install path.
You can also specify arguments to the `./CMakeLists.txt` script and the compiler.

[You can view the settings format here](https://github.com/devappd/emscripten-build-npm#settings-files).

The NPM build script calls `emscripten configure`, `emscripten build` and `emscripten install` without arguments. This searches the project's root directory for `emscripten.settings.js`.

You can also build an application by:

* Using a shell command -- [see the HelloWorld example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-01-HelloWorld).
* Passing a Makefile or CMakeLists.txt -- [see the Make example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-02-Make).
* Using JS bindings -- [see the Autotools example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-04-Autotools).

## Usage

* `npm run clean` -- Cleans the build via the Make `clean` target.
* `npm run build` -- Build the C/C++ code from `./src` and install into `./dist`

## License

MIT License.
