# _Anita Kemp's Galactic Age Calculator_

#### _A calculator that determines user age on other planets as an exercise for the week 5 code review at Epicodus, 09/06/2019_

#### By _Anita Kemp_

## Description

_A user will enter in their age, and the output will be a list of their ages in years on: Mercury, Venus, Mars, and Jupiter. It will also determine either how many years they have left or how many years they have surpassed the average life expectancy, regardless of gender, in the United States. It also calculates the age of Keith Richards in dog years for the year 2073 on Jupiter._

## Specifications
|Behavior|Input|Output|
|:-----|:--------:|:---------:|
|The application will only accept numeric input| 4%%^| "Invalid Input"|
|The application will only accept positive numbers| -3 | "Invalid Input"|
|The application will only accept integers| .5 | "Invalid Input"|
|The application will divide user age by .24 (and round if decimal) to show age on Mercury| 30 | "Mercury Years: 125"|
|The application will divide user age by .62 (and round if decimal) to show age on Venus| 30| "Venus Years: 48"|
|The application will divide user age by 1.88 (round if necessary) to show age on Mars | 30| "Mars Years: 16"|
|The application will divide user age by 11.86 (round if necessary) to show age on Jupiter| 30| "Jupiter Years: 3"|
|The application will take user age and subtract by life expectancy of US (~ 79 years, regardless of gender) and show how many years they have left| 30| 49|
|The application will return the number of years a user has lived past life expectancy if age surpasses it| 89 | 10|
|The application will subtract the year 2073 from current year to find age difference| 2019 | 54|
|The application will add age difference to current age of Keith Richards| 76 (it is rounding his current age) | 130|
|The application will multiply this new sum by 7 for dog years| 130 | 910|
|The application will divide this new age in dog years by 11.86 (Jupiter years) and round| 910 | 77|

## Setup/Installation Requirements

* _Clone this repository_
* _Run the command: npm install_
* _Then run the command: npm run start_
* _open index.html in web broswer_

## Known Bugs

There are no known bugs.

## Support and contact details

_For any questions, please contact: anita.k.kemp@gmail.com_

## Technologies Used

_Javascript/jQuery, HTML, Bootstrap_

### License

*MIT*

Copyright (c) 2019 **_Anita Kemp_**
