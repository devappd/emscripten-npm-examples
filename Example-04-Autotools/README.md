# Example-04-Autotools

This example demonstrates a C++ web application that is built with an Autotools `./configure` script.

This example may not work on Windows due to potential difficulty with setting up Bash and the
Emscripten SDK.

## Notes

This specific project is built via a `./build.js` script which calls the `emscripten-build` JS API.
It passes build settings as an argument to the JS functions `emscripten.build()`
and `emscripten.install()`.

The settings format matches the one for an `emscripten.settings.js` file, as shown in the
[third example with CMake](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-03-CMake).

[You can view the settings format here](https://github.com/devappd/emscripten-build-npm#settings-files).

You can also build an application by:

* Using a shell command -- [see the HelloWorld example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-01-HelloWorld).
* Passing a Makefile -- [see the Make example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-02-Make).
* Passing a JS settings file -- [see the CMake example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-03-CMake).

## Usage

* `npm run clean` -- Cleans the build via the Make `clean` target.
* `npm run build` -- Configure Automake, build the C/C++ code from `./src`, and install into `./dist`

## License

MIT License.
