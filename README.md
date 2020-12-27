# emscripten-npm-examples

Example node.js projects which bundle a C/C++ emscripten component by using [emscripten-build-npm](https://github.com/devappd/emscripten-build-npm).

## Projects

1. [Hello world](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-01-HelloWorld) - A C++ "Hello world" web application.
2. [Hello world with Make](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-02-Make) - A C++ web application built with Make by using the `emscripten-build` CLI.
3. [Hello world with CMake](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-03-CMake) - A C++ web application built with CMake by using an `emscripten-build` settings file.
4. [Hello world with Autotools](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-04-Autotools) - A C++ web application built with Autotools and Make by using the `emscripten-build` JS API.
5. [C++ library with JS bindings](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-05-Library) - A C++ library which is callable from JavaScript.
6. [SDL and OpenGL application](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-06-SDL-OpenGL) - A 3D C++ "Hello triangle" web application.
7. [Web development server](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-07-Dev-Server) - A C++ web application with a development server that can reload changes live on your browser.

## Install

Clone this project to start experimenting with each example:

```sh
git clone https://github.com/devappd/emscripten-npm-examples
```

Before calling `npm install` on these projects, you must have at least Python 3.6 on your system. You may download it at [python.org](https://www.python.org/downloads/), or refer to your OS's package manager.

Optionally, you should configure a custom install path for the emscripten SDK. Otherwise, the SDK will
be duplicated into each project. Specify a custom path by
[modifying your NPM config](https://docs.npmjs.com/cli/v6/using-npm/config) via one of the following:

|Method|Command
|------|-------
| Commit the path to your user `.npmrc` | `npm config set emsdk "/your/install/path"`
| Set an environment variable | `set NPM_CONFIG_EMSDK=/your/install/path`
| Use a config argument to NPM temporarily | `npm [command] --emsdk="/your/install/path"`

## License

MIT License except where noted.
