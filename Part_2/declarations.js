DECLARATIONS:

-------------------------------------------------------------------------------------- 

	Functions in JavaScript:

    var a = 4;
    var b = 9;

    var aCubed = a*a*a;
    var bCubed = b*b*b;
    var sum = aCubed + bCubed;

    *NOT REUSABLE*


		function <name_of_function> (parameter1, parameter2, ...) {

      *do some stuff*

      return *some (of nothing) from the process*

		}

-------------------------------------------------------------------------------------- 

    Refactor to make function more efficient:

      function sumOfCubes (a, b) {
        var aCubed = a*a*a;
        var bCubed = b*b*b;
        var sum = aCubed + bCubed;

        return sum;

      }

      function sumOfCubes (a, b) {
        var aCubed = a*a*a;
        var bCubed = b*b*b;
        
        return aCubed + bCubed;

      }

      function sumOfCubes (a, b) {
        var aCubed = a*a*a;
        
        return aCubed + b*b*b;

      }    

      function sumOfCubes (a, b) {

        return a*a*a + b*b*b;

      }

-------------------------------------------------------------------------------------- 

  More Complex Functions:

    -Pseudocode:

      function countE ( ) {

        "ask user for a phrase to check"

        if ("the entry is invalid") {

          "alert the user"
          "exit function with a failure report"

        } else {

          "make a counter for the E's"

          for ("each character in the user's entry") {

            if ("the character is an 'E' or an 'e'") {

              "increment the E counter"
            
            }

          }
          
          "alert the amount of E's in the phrase and return success"
        }

      }

    -Actual Code:

      function countE ( ) {

        var phrase = prompt("Which phrase would you like to examine?");

        if ( typeof(phrase) != "string" ) {

          alert("That's not a valid entry!");
          return false;

        } else {

            var eCount = 0;

            for (var index = 0; index < phrase.length; index++) {

              if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E') {

                eCount++;

              }

            }

            alert("There are " + eCount + " E's in \"" + phrase + "\".");
            return true;

        }

      }

-------------------------------------------------------------------------------------- 

  Local and Global Scope (visulizing dreams within dreams...):

    var x = 6;
    var y = 4;

    function add (a, b) {

      var x = a + b; (local)
      return x;

    }

    add(9, 2);
      => 11

---------------------------------------

    function add (a, b) {

      x = a + b; (global)
      return x;

    add(9, 2)
      => 11

    console.log(x) 
      => 11












