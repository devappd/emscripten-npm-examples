GREETER?=Mike Makefile
INSTALL_DIR?=../dist

# Make sure your Makefile is cross-compatible with Windows
# Note that Windows copy does not work with forward slash paths.
ifeq ($(OS),Windows_NT)
	MKDIR_BUILD=if not exist "..\build" mkdir "..\build"
	MKDIR_INSTALL=if not exist "$(INSTALL_DIR)" mkdir "$(INSTALL_DIR)"
	CP_INSTALL=xcopy /y "..\build\*" "$(INSTALL_DIR)"
	RM_CLEAN=del /q /f /s "..\build\*"
else
	MKDIR_BUILD=mkdir -p ../build
	MKDIR_INSTALL=mkdir -p "$(INSTALL_DIR)"
	CP_INSTALL=cp -p ../build/* "$(INSTALL_DIR)"
	RM_CLEAN=rm -f ../build/*
endif

.PHONY: all
all: main

# Outputs index.html, index.js, index.wasm
main: src/main.cpp src/dice.cpp
	$(MKDIR_BUILD)
	em++ -o ../build/index.html src/main.cpp src/dice.cpp -DGREETER="$(GREETER)"

.PHONY: install
install:
	$(MKDIR_INSTALL)
	$(CP_INSTALL)

.PHONY: clean
clean:
	$(RM_CLEAN)
