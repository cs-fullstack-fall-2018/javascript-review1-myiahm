/*
define a variable to hold the secret number which is generated by a code to get a random number?
call the secret number so we don't have to guess and can accurately test code.
create  a while loop to keep prompting the user to enter the number until they guess the secret number .
define the variable userInput to hold the users guess make it = parsent so it will know the input is a number and prompt to output a question.
give it the condition if the user input is === to secret number print to screen (alert) user that they got it! and break else if (otherwise)
if user input is less than secret number print so screen(alert) user the number is to low .
if user input is greater than secret number print to screen (alert) to high .
PROGRAM COMPLETE!!!
*/
main();
function main()
{
   var secretNUmber= Math.floor(Math.random() * Math.floor(101));
alert(secretNUmber);
   while (true)
   {
       var userInput = parseInt(prompt("Enter your number: "));
       if (secretNUmber=== userInput)
       {
       alert("You Got It!!!");
       break;
       }
       else {
          if
          (userInput<secretNUmber)
              alert("too low");
          if (userInput>secretNUmber)
          {
              alert("too high ");
          }

          }

       }

   }
