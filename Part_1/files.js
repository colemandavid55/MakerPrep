FILES:

--------------------------------------------------------------------------------------    

	"Train #" + 1 + " is running."
    => "Train #1 is running."

  "Train #" + 2 + " is running."

  "Train #" + 3 + " is running."

Running Javascript in an HTML FILE

--------------------------------------------------------------------------------------    

<html>
    <header>
      <script src="trains.js"></script>
    </header>
    <body>
      <h1>JAVASCRIPT EXPRESS!</h1>
      ...
  </body>
</html>
--------------------------------------------------------------------------------------    
<html>
    <header>
      <script src="scripts/trains.js"></script>
    </header>
    <body>
      <h1>JAVASCRIPT EXPRESS!</h1>
      ...
  </body>
</html>
--------------------------------------------------------------------------------------    
<html>
    <header>
      <script src="../scripts/trains.js"></script>
    </header>
    <body>
      <h1>JAVASCRIPT EXPRESS!</h1>
      ...
  </body>
</html>

--------------------------------------------------------------------------------------    

Enter the semicolons!

  Console: var trainsOperational = 8
  File Entry: var trainsOperational = 8;

Console.log

  var totalTrains = 12;
  var trainsOperational = 8;

  console.log("There are " + trainsOperational + " running trains.");
  console.log(trainsOperational == totalTrains);


console.log("Train #" + 1 + " is running.");
console.log("Train #" + 2 + " is running.");
console.log("Train #" + 3 + " is running.");
console.log("Train #" + 4 + " is running.");
console.log("Train #" + 5 + " is running.");
console.log("Train #" + 6 + " is running.");
console.log("Train #" + 7 + " is running.");
console.log("Train #" + 8 + " is running.");

    still have repetetive code