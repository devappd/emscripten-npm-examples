# Example-05-Library

This example demonstrates a C++ library that exposes a method to JavaScript.

This specific project is built by calling the `em++` compiler directly in the NPM build script.

You can also build an application by:

* Passing a Makefile -- [see the Make example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-02-Make).
* Passing a JS configuration file -- [see the CMake example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-03-CMake).
* Using JS bindings -- [see the Autotools example](https://github.com/devappd/emscripten-npm-examples/tree/master/Example-04-Autotools).

## Notes

You expose your library by using the
[Embind interface](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html).
You write `EMSCRIPTEN_BINDINGS()` in your C++ code to set up the JavaScript-side calls.
For example:

```cpp
#include <emscripten/bind.h>

using namespace emscripten;

float your_method(float a, float b, float t) {
    return (1 - t) * a + t * b;
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("your_method", &your_method);
}
```

The compiler flags `-s MODULARIZE=1 --bind` enable the JS bindings. Make sure that your output filetype is
`.js`, as shown above.

In JavaScript, your method is called like this:

```js
const lib = require('./dist/your-emscripten-lib.js');

lib().then(instance => {
    instance.your_method('input');
});
```

Your library is imported as a factory function which you must call to use your method.

If you set your package's entry point in `package.json` to the compiled library, you are free to `require()` it in
your node.js project.

See `test.js` for a working example.

### Limitations

Emscripten outputs working CommonJS module code when you output to `.js`. Support also exists to
output a ECMAScript library if you change the output filetype to `.mjs`.

However, as of November 2020, ECMAScript module support does not work completely.
See [emscripten#11792](https://github.com/emscripten-core/emscripten/issues/11792) for details.

## Usage

* `npm run test` -- Run a test script to demonstrate the included library.
* `npm run build` -- Build the C/C++ code from `./src` and output into `./dist`

## License

MIT License.
