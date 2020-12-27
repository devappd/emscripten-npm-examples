module.exports = {
  "myProject": {
    "type": "cmake",
  
    "configure": {
      "path": "./src",
      "generator": "Ninja",
      "type": "Release",
      "definitions": {
        "GREETER": "Node Jackson"
      }
    },
  
    "build": {
      "path": "./build"
    },
  
    "install": {
      "path": "./dist"
    }
  }
};
