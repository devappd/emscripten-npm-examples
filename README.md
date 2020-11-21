# emscripten-npm-examples

Example node.js projects which bundle a C/C++ emscripten component by using [emscripten-build-npm](https://github.com/devappd/emscripten-build-npm).

## Projects

1. [Hello world](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-01-HelloWorld) - A C++ "Hello world" web application. Includes a development server to rebuild on changes.
2. [Hello world with Make](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-02-Make) - Same as above, but built with Make using the `emscripten-build` CLI.
3. [Hello world with CMake](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-03-CMake) - Same as above, but built with CMake using an `emscripten-build` configuration file.
4. [Hello world with Autotools](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-04-Autotools) - Same as above, but built with `./configure` and Make using the `emscripten-build` JS API.
5. [C++ library with JS bindings](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-05-Library) - A C++ library which is callable from JavaScript.
6. [SDL and OpenGL application](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-06-SDL-OpenGL) - A 3D C++ "Hello triangle" web application.

## License

MIT License except where noted.
