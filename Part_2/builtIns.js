BUILT-INS:

-------------------------------------------------------------------------------------- 

	Bulit-in functions you can use any time to get and send information:

    alert() 
    alert( "Alert! Alert! Last call to board Train #4!" );

    confirm()
    confirm( "Dude. Are you sure you want 7?" );
    Cancel => false, OK => true

    prompt()
    prompt( "Who is rapping at my chamber door?" );

-------------------------------------------------------------------------------------- 

  Using Dialogues with Variables:

    var userName  = prompt( "Yo buddy! What's your name?" );

    confirm( "Are you sure your name is " + userName + "?" );

    -What if user hits cancel? Not a perfect approach

-------------------------------------------------------------------------------------- 

  Using typeof operator:

    typeof true => "boolean"

    typeof "That's not a valid entry!" => "string"

    typeof 42 => "number"

    typeof undefined => "undefined"

    typeof null => "object"

-------------------------------------------------------------------------------------- 

  A Confirmation Loop:

    var gotName = false;

    while ( gotName = false ) {

      var userName = prompt( "Yo buddy! What's your name?" );

      if ( confirm("Are you sure your name is " + userName + "?") ) {

        alert("What is up " + userName + "!");
        gotName = true;

      }

    }


