# Example-02-Make

This example demonstrates a C++ web application that is built via Makefile.

## Notes

The command used to build is `emscripten build "./src"`. This researches the `./src` directory
for a Makefile and invokes `make`. 

The Makefile invokes the `em++` compile with an output `index.html`. It installs the binaries into
`./dist`.

If you are editing an existing Makefile, you'll have to change the compiler from `gcc/g++` to `emcc/em++`.
You'll also specify the output file with an `*.html` or `*.js` filetype.

Finally, consider making your Makefile cross-compatible with Windows to support `mingw32-make`. This means
using correct `mkdir`, `copy` commands, etc.

You can also build an application by:

* Using a shell command -- [see the HelloWorld example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-01-HelloWorld).
* Passing a JS settings file -- [see the CMake example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-03-CMake).
* Using JS bindings -- [see the Autotools example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-04-Autotools).

## Usage

Don't forget to `npm install` before running these commands.

* `npm run clean` -- Cleans the build via the Makefile `clean` target.
* `npm run build` -- Build the C/C++ code from `./src` and install into `./dist`

## License

MIT License.
