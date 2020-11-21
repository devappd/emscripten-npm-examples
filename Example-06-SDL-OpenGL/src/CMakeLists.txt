cmake_minimum_required(VERSION 3.00)

project(HelloTriangle
    VERSION "1.0.0"
    LANGUAGES CXX
)

add_executable(HelloTriangle
    src/hello_triangle.cpp
    src/camera.cpp
    src/events.cpp
)

set_target_properties(HelloTriangle PROPERTIES
    OUTPUT_NAME "index"
    SUFFIX ".html"
)

target_compile_options(HelloTriangle PRIVATE
    "SHELL:-s USE_SDL=2 -s FULL_ES2=1")

target_link_options(HelloTriangle PRIVATE
    "SHELL:-s USE_SDL=2 -s FULL_ES2=1")

install(FILES
        "${CMAKE_CURRENT_BINARY_DIR}/index.html"
        "${CMAKE_CURRENT_BINARY_DIR}/index.js"
        "${CMAKE_CURRENT_BINARY_DIR}/index.wasm"
    DESTINATION "${CMAKE_INSTALL_PREFIX}"
)
