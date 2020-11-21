#include <iostream>
#include "shared.h"

#ifndef GREETER
#define GREETER "Lorem Ipsum"
#endif

// Stringify a macro
#define STR2(x) #x
#define STR(x) STR2(x)

int main()
{   
    std::cout << "Hello World! My name is " << STR(GREETER) << "!"
        << std::endl
        << rollDice()
        << std::endl;

    return 0;
}
