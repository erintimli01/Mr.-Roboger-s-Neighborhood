# _Mr. Roboger's Neighborhood_

#### By _Erin Timlin_

#### _This is an application that takes a number from the user and returns the values except any number that contains a 1, it will return "Beep!", for all number that contain a 2, it will return "Boop!" and for all numbers that contain a 3, it will return "Won't you be my neighbor?"_

## Technologies Used

* _HTML_
* _JacaScript_


## Description

_In addition to what is above, the substitution for the number 1 will apply unless there is a number 2 present and the substitution for the number 2 will apply unless there is a number 3._

## Tests

//Describe: beepboop()//

Test: "It should return "beep" with users entry of 1"
Code: beepBoop(1)
Expected Output: "Beep!"


Test: "It should return "boop" with users entry of 2"
Code: beepBoop(2)
Return: "0, Beep!, Boop!"

Test: "It should return "won't you be my neighbor?" with users entry of 3"
Code: beepBoop(3)
Return: "0, Beep!, Boop!, Won't you be my neighbor?"

Test: "It should return with beep for all numbers that contain 1"
Code: beepBoop(11)
Return: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!

Test: "The number 3 should take precedence over the number 2, and the number two should take precedence over the number 1 with multi-digit numbers"
Code: beepBoop(12)
Return: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!"






## Setup/Installation Requirements

*_No set up required_
*_Visit https://github.com/erintimli01/text-analyzer_



## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_