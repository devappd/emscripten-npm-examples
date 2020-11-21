# Example-06-SDL-OpenGL

This example demonstrates a C++ web application built with SDL and OpenGL. It is compiled via
CMake and built with the command line `emscripten build "./src"`.

The program is installed into `./dist` and is invoked by calling `emscripten install "./src"`.
The NPM build script invokes both commands.

## Notes

Emscripten supports building SDL and OpenGL programs without installing additional libraries. It
translates OpenGL calls to their WebGL equivalents. SDL support is enabled by passing the compiler
flags `-s USE_SDL=2`.

WebGL is a subset of OpenGL features. The main difference is that WebGL does not support client-side
arrays. With a compile flag `-s FULL_ES2=1`, Emscripten emulates client-side arrays by automatically
binding your buffer objects to the GPU.

Besides this, a lot of your OpenGL code can be run as-is. Refer to these resources for more info on
compatibility:

* [OpenGL support in Emscripten](https://emscripten.org/docs/porting/multimedia_and_graphics/OpenGL-support.html)
* [WebGL and OpenGL differences](https://www.khronos.org/webgl/wiki/WebGL_and_OpenGL_Differences)

### OpenGL 1.x and 2.x code

If you are working with older code designed for a fixed-function pipeline (i.e., OpenGL 1.x, 2.x, and
ES 1.x), your best course of action is to modernize your pipeline. While Emscripten provides
a compatibility option for old code (`-s LEGACY_GL_EMULATION=1`), it does not emulate all features.

## Usage

Don't forget to `npm install` before running these commands.

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

## Acknowledgement

The OpenGL program in `./src/src` is sourced from [erik-larsen/emscripten-sdl2-ogles2](https://github.com/erik-larsen/emscripten-sdl2-ogles2).

Code outside of that directory is MIT License.
