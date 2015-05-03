CONDITIONALS:

-------------------------------------------------------------------------------------- 

	If-Else:

		if ( *some condition is true* ) {

      "*do this code!*"

    } else {

      "*OTHERWISE, do this code instead!*
      "
    }

    var value1 = 1;
    var value2 = 9;

    if ( value1 < value2 ) {

      console.log(value1 + " is less than " + value2);
    
    } else {

      console.log(value1 + " is greater than or equal to " + value2);

    }

-------------------------------------------------------------------------------------- 

  Looping with If and Else controls:

    for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {

      if (trainNumber <= operationalTrains) {

        console.log("Train #" + trainNumber + " is running.");

      } else {

        console.log("Train #" + trainNumber + " is not operational.");

      }

    }

-------------------------------------------------------------------------------------- 

  Else-If syntax:

    if (*some condition is true*) {

      "*do this code!*"

    } else if (*some OTHER conditional is true*) {

     " *do something for this condition!*"

    } else {

      "*IN ALL OTHER CASES, do this code instead!*"

    }

--------------------------------------------------------------------------------------    
  
  Loop plus Conditional:

    for (trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {

      if (trainNumber <= operationalTrains) {

        console.log("Train #" + trainNumber + " is running.");

      } else if (trainNumber == 10) {

        console.log("Train #10 begins running at noon.");

      } else {
        
        console.log("Train #" + trainNumber + " is not operational.");
     
      }

    }

-------------------------------------------------------------------------------------- 

  Nested Conditional:

    if (trainsOperational > 0) {

      if (trainsOperational == totalTrains) {

        console.log("All trains are running!");

      } else {

        for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {

          ...

        }

      }

    } else {

      console.log("No trains are operational today. Bummer!");

    }

-------------------------------------------------------------------------------------- 

  Complex Conditionals:

    ( 11 >= 11 ) && ( -7 < 6 )
        true     &&     true
                true

    ( 2 >= 0 ) && ( 9 < 4 ) 
       true    &&    false
              false

    ( 5 < 7 ) || ( 8 > 10 ) 
      true    ||    false
              true

    ( 3 > 8 ) || ( 7 < 3 ) 
       false  ||   false
              false

  

