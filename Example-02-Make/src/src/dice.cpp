#include <cstdlib>
#include <ctime>
#include <string>
#include <sstream>
#include "shared.h"

std::string rollDice()
{
    std::stringstream ss;

    // Seed random generator
    std::srand(std::time(0));

    int randomNumber = std::rand() % 12 + 1;

    ss << "The number I have rolled for you is " 
        << randomNumber << "!";

    return ss.str();
}
