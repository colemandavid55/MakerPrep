LOOPS:

-------------------------------------------------------------------------------------- 

  While Loop:

    while (*some expression is true*) {

      *do this code!*

    }

    Runs forever:

      while (true) {
        *do this code!*
      }

    Never runs:

      while (false) {
        *do this code!*
      }

    Basic While-loop:

      var number = 1;
      while (number <= 5) {
          console.log(number);
          number++;
      }

      var trainsOperational = 8;
      var trainNumber = 1;

      while (trainNumber <= trainsOperational) {
        console.log("Train #" + trainNumber + " is running.");
        trainNumber++;
      }

-------------------------------------------------------------------------------------- 

  For Loop:

    for ( *starts with this* ; *loop if this expression is true* ; *do this after each loop*) {

      *in each loop, do this code!*
    
    }

    for ( var trainNumber = 1; trainNumber <= trainsOperational; trainNumber++ ) {
      console.log("Train #" + trainNumber + " + is running.");
    }

    for (var number = 5; number > 0; number--) {
      console.log(number);
    }





