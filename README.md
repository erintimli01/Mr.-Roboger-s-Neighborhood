# _Mr. Roboger's Neighborhood_

#### By _Erin Timlin_

#### _This is an application that takes a number from the user and returns the values except any number that contains a 1, it will return "Beep!", for all number that contain a 2, it will return "Boop!" and for all numbers that contain a 3, it will return "Won't you be my neighbor?"_

## Technologies Used

* _HTML_
* _JacaScript_
* _CSS_


## Description

_In addition to what is above, the substitution for the number 1 will apply unless there is a number 2 present and the substitution for the number 2 will apply unless there is a number 3._

## Tests

_Describe: beepboop()_

_Test: "It should return "beep" with users entry of 1"_
_Code: beepBoop(1)_
_Expected Output: "Beep!"_

_Test: "It should return "boop" with users entry of 2"_
_Code: beepBoop(2)_
_Return: "0, Beep!, Boop!"_

_Test: "It should return "won't you be my neighbor?" with users entry of 3"_
_Code: beepBoop(3)_
_Return: "0, Beep!, Boop!, Won't you be my neighbor?"_

_Test: "It should return with beep for all numbers that contain 1"_
_Code: beepBoop(11)_
_Return: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!_

_Test: "The number 3 should take precedence over the number 2, and the number two should take precedence over the number 1 with multi-digit numbers"_
_Code: beepBoop(12)_
_Return: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!"_


## Setup/Installation Requirements

* _Clone repo to your desktop_
* _Open index.html in your browser_


## Known Bugs

* _No known bugs!_
* 

## License

[MIT](license.txt)

_If you have any questions, conerns, or comments, please feel free to reach out to me at erintimlin@gmail.com_

Copyright (c) _January 20, 2023_ _Erin Timlin_