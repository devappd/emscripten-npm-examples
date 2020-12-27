cmake_minimum_required(VERSION 3.00)

project(HelloWorld
    VERSION "1.0.0"
    LANGUAGES CXX
)

set(GREETER "Christopher Make" CACHE STRING
    "Name of the person who is saying 'Hello World'")

add_compile_definitions(GREETER="${GREETER}")

add_executable(HelloWorld
    src/main.cpp
    src/dice.cpp
)

set_target_properties(HelloWorld PROPERTIES
    OUTPUT_NAME "index"
    SUFFIX ".html"
)

install(FILES
        "${CMAKE_CURRENT_BINARY_DIR}/index.html"
        "${CMAKE_CURRENT_BINARY_DIR}/index.js"
        "${CMAKE_CURRENT_BINARY_DIR}/index.wasm"
    DESTINATION "${CMAKE_INSTALL_PREFIX}"
)
