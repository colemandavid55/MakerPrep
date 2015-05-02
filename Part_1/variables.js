VARIABLES:

	var trainWhistles = 3

  trainWhistles
    => 3

  Rules and Regs:

    var no space
    var 3blindmice
    var scored_is_fine
    var get$
    var $_$
    var goodName
    var mortalKombat2

  Changing Variable Contents:

    var trainWhistles = 3

    trainWhistels = 9

    trainWhistles = trainWhistles + 3

    trainWhistles += 3

    trainWhistles = trainWhistles * 2

    trainWhistles *= 2

  Using Variables:

    trainWhistles = 3

    "All of our trains have " + trainWhistles + " whistles!"
      => "All of our trains have 3 whistles!"

    "But the Pollack 9000 has " + (trainWhistles * 3) + "!"
      => "But the Pollack 9000 has 9!"

    var pollack9000 = trainWhistles * 3

    "But the Pollack 9000 has " + pollack9000 + "!"

  Incrementing and Decrementing

    trainWhistles--
    trainWhistles++

  Strings as Variables

    var welcome = "Welcome to the world,"
    var disclaimer = "you get used to it after a while."

    welcome + "\n" safetyTip

    var lengthExample = "This is a just too long to count easily"
    lengthExample.length 
      => 39

    var longWord = "vissicitues"
    var shortWord = "hat"
    longWord.lenght < shortWord.length
      => false

    var sentence = "Antidisestablishmentarianism is fun to say!"
                    0       8                   28            42
    sentence.length = 43
    sentence.charAt(11)
    sentence.charAt(31)
    sentence.charAt(42)

  Variables help organize DATA:

    var trainsOperational = 8
    var totalTrains = 12
    var operatingStatus = " trains are operational today."

    trainsOperational + " out of " + totalTrains + operatingStatus
      => "8 out of 12 trains are operational today."

    





