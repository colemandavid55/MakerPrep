ARRAYS:

-------------------------------------------------------------------------------------- 

	Make a list of passengers:

    function makeList ( ) {

      var passengerOne = "Mickey Mouse";
      var passengerTwo = "Bugs Bunny";
      var passengerThree = "Tupac";
      var passengerFour = "Daenerys Targaryen";
      ...

    }

-------------------------------------------------------------------------------------- 

  Arrays:

    var yourArray = [1,2,3,4,5];

    var passengers = ["Mickey Mouse", "Bugs Bunny", "Tupac", "Daenerys Targaryen", "Sonic"];

    passengers[0]; 
      => "Mickey Mouse"

    passengers[3];
      => "Daenerys Targaryen"

-------------------------------------------------------------------------------------- 

  Change Array Contents:

    passengers[1] = "Homer Simpson"; 

    passengers.length;
      => 5

  Pop():

    passengers.pop();
      => "Sonic"

  Push():

    passengers.push("Mario");

-------------------------------------------------------------------------------------- 

  Possible Array Contents:

    var comboArray1 = ["One", "Two", 3, false];

    var poisson = "fish";
    var comboArray2 = ["Red", poisson, "Blue", poisson];

    Indices:
      "Red" => 0, "fish" => 1, "Blue" => 2, "fish" => 3

-------------------------------------------------------------------------------------- 

  Array of Arrays:

    var arrayOfArrays = [comboArray1, comboArray2];
      comboArray1 => 0, comboArray2 => 1;

      => [["One", "Two", 3, false], ["Red", "fish", "Blue", "fish"]]

    console.log( arrayOfArrays );
      => [ Array[4], Array[4] ]

  Accessing Values in a Nested Array:

    console.log( arrayOfArrays[1][2] );
      => "Blue"

    console.log( arrayOfArrays[0][1] );
      => "fish"

-------------------------------------------------------------------------------------- 

  Using Loops with Arrays:

    var numberList = [ 2, 5, 8, 4, 7, 12, 6, 9, 3, 11 ];

    for ( var i = 0; i < numberList.length; i++ ) {

      console.log( "The value in cell " + i + " is " + numberList[i] );

    }

-------------------------------------------------------------------------------------- 

  Using Undefined value to create "empty" cell:

    var numberList = [ 2, 5, 8, 4, 7, 12, 6, 9, 3, 11 ];

    for ( var i = 0; i < numberList.length; i++ ) {

      if ( numberList[i] % 2 == 0 ) {

        evenCount ++;

      } else {

        numberList[i] = undefined;

      }

    }    

    console.log(evenCount);
      => 5

-------------------------------------------------------------------------------------- 

  Building a Passenger List:

  - Psuedocode:

    function addPassenger ( <passenger's name>, <array of passengers) {

      if ( "list is empty" ) {
        "add passneger to list"

      } else {

        "for all spots in the list" {

          if ("the current spot is empty" ) {

            "add passenger to that spot"
            "return the list and exit the function"

          } else if ("the end of the list is reached" ) {

            "add passenger to end of list"
            "return the list and exit the function"

          }

        }

      }

    }

  - Actual Code:

    function addPassenger ( name, list ) {

      if (list.length == 0 ) {

        list.push(name);

      } else {

        for ( var i = 0; i < list.length; i++ ) {

          if ( list[i] == undefined ) {
            
            list [i] = name;
            return list;

          } else if ( i == list.length - 1 ) {

            list.push(name);
            return list;

          }

        }

      }

    }

-------------------------------------------------------------------------------------- 

  Removing Passengers from a List:

    function deletePassenger ( name, list ) {

      if ( list.length == 0 ) {

        console.log ("List is empty!");

      } else {

        for ( var i = 0; i < list.length; i++ ) {

          if ( list[i] == name ) {

            list[i] = undefined;
            return list;

          } else if ( i == list.length - 1 ) {

            console.log ("Passenger not found!") ;

          }

        }

      }

      return list;
      
    }

