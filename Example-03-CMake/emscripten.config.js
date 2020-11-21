module.exports = {
  "myProject": {
    "type": "cmake",
  
    "configure": {
      "path": "./src",
      "generator": "Ninja",
      "type": "Release",
      "arguments": [
        "-DGREETER=\"Node Jackson\""
      ]
    },
  
    "build": {
      "path": "./build"
    },
  
    "install": {
      "path": "./dist"
    }
  }
};
