// app.js -- Test Emscripten-built library

const liblerp = require('./dist/lib.js');

// Instantiate liblerp by calling it. Promise returns an instance
// which contains your exported function.
liblerp()
.then(instance => {
  console.log(`${instance.lerp(100, 200, 0.5)}`);
  console.log(`${instance.lerp(10, 20, 0.5)}`);
  console.log(`${instance.lerp(1, 2, 0.5)}`);
});
