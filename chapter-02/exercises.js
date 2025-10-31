
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/
//I: function called triangle takes in parameter number
//O: print to log #; 1 to number; by increment of 1; each time on new line
//C:
//E:
function triangles(number) {
  let row = '';
  //create loop to build triangle; start at 1 end at number; increment by 1
  for(let i = 1; i <= number; i++){
    //print triangle to console
    console.log(row += '#');
  }
  
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

//I: function called fizzBuzz; intake numbers start and end
//O: if number divisible by 3; print 'fizz'; 
//C:
//E:

function fizzBuzz(start, end) {
  //create for loop with parameters start and stop
  for(let i = start; i <= end; i++){
    //if number is divisible by 3 and 5; print 'fizzbuzz'
    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz');
       //else-if number divisible by 3; print 'fizz'
    } else if(i % 3 === 0){
      console.log('fizz'); 
      //else-if number divisible by 5; print 'buzz'
    } else if(i % 5 === 0){
      console.log('buzz');
    } else{
        console.log(i);
    }
    
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

//I: function called drawChessboard; intake number that is size of chessboard
//O: print to console pattern of 'space' + '#' + 'space' if odd; 'space' + '#' + 'space' + '+' if even
//C: set condition to print row a = ' 'odd' + '#' + 'odd' + '#'
//E:

function drawChessboard(x) {
  //create storage string
  let board = '';
  //loop through array of 1 to input number
  for(let i = 0; i < x; i++){ //loop for row
    for(let j = 0; j < x; j++){ //loop for column
      //set condition when to print '#', when to print ' ', when to break to new line '\n'
      if((i + j) % 2 === 0){
        board += ' ';
      } else {
        board += '#';
      }
    }
    board += '\n';
  }
  console.log(board);
  }


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}