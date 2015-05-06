FUNCTION EXPRESSIONS:

-------------------------------------------------------------------------------------- 

	function diffOfSquares ( a, b ) {
    return a*a - b*b;
  } 

  var diff = function diffOfSquares ( a, b ) {
    return a*a = b*b;
  }

  Anonymous Functions:

    var diff = function ( a, b ) {
      return a*a = b*b;
    }

    console.log(diff);
      => function(a,b) { return a*a - b*b; }

-------------------------------------------------------------------------------------- 

  Stored Functions:

    var greeting = function() {
      alert("Thanks for visiting!");
    };

    closeTerminal( greeting );

    function closeTerminal ( message ) {
      ...
      message();
      ...
    }

-------------------------------------------------------------------------------------- 

  Using Function Expressions:

    var numbers = [ 12, 4, 3, 9, 8, 6, 10, 1 ];
    var results = numbers.map( "some coolFunction goes here" );

    var results = [ ];
    for ( var i  = 0; i < numbers.length; i++ ) {

      results[i] = coolFunction(numbers[i]);

    }

    ...or...

    var results = numbers.map(function (arrayCell) {
                                  return arrayCell * 2;
                                }
    );

    console.log( results );
      => [ 24, 8, 6, 18, 16, 12, 20, 2 ]

    


