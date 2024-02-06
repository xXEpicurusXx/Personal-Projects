print("Welcome to Treasure Island!")
print("Your mission is to find the treasure!")

direction = (input("\nYou are at a cross road. Where do you want to go? Tyee Left or Right...\n"))
if direction.lower() == 'l' or direction.lower() == 'left':
    print("""
    You turn left and begin to walk. After some time you think that you might be lost. 
    Then suddenly through the trees you see some light. You have arrived at the shore of a lake. 
    In the middle of that lake you see an island!
    """)

    print("""
                                'Xx  xX*,
                          ,*xXXx_xXx
                            _xXXXXXxx*,
                          ,*XXx@x@Xx
                            X @|@@ `x
                            '  ||    '
                               ||
                               ||
                               ||
                               ||
                            /ssssssss.
                      /sssssssSSSSssssssssss.
        /\         /sssssSSSSSSSSSSSSSSSssssssssssss.              
  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
    """)

    wait_or_swim = input("""
        The water on the lake looks calm but the island seems a little far. You see what you think is a boat on the other side of the lake. What will you do? 
        Wait for the boat or try to swim across?
        Type Wait or Swim...
        """)
    if wait_or_swim.lower() == 'w' or wait_or_swim.lower() == 'wait':
        print("""
        An older looking gentleman sees you standing on the shore and calls out.
        You greet the man and ask him if he would mind giving you a lift to the island in the middle of the lake.
        The old fisherman agrees and tells you to climb aboard.
        The water is calm but you realize you could never have made it if you had tried to swim.
        You for sure would have drowned. 
        """)

        print("""
                         ;~
               ./|\.
             ./ /| `\.
            /  | |   `\.
           |   | |     `\.
           |    \|       `\.
         .  `----|__________\.
          \-----''----.....___
           \               ""/
      ~^~^~^~^~^`~^~^`^~^~^`^~^~^
       ~^~^~`~~^~^`~^~^~`~~^~^~
       """)

        
        print("""You arrive at the island and notice there is an dusty, abandoned house.
        There is no front door so you lean in and call out, but there is no response.
        """)

        print("""
                                       ____
                  _           |---||            _
                  ||__________|   ||___________||
                 /_ _ _ _ _ _ |:._|'_ _ _ _ _ _ _\`.
                /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\:`.
               /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\::`.
              /:.___________________________________\:::`-._
          _.-'_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _`::::::`-.._
      _.-' _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `:::::::::`-._
    ,'_:._________________________________________________`:_.::::-';`
     `.'/ || |:::::`.'/::::::::`.'/::::::::`.'/::::::|.`.'/.|     :|
      ||  || |::::::||::::::::::||::::::::::||:::::::|..||..|     ||
      ||  || |  __  || ::  ___  || ::  __   || ::    |..||;||     ||
      ||  || | |::| || :: |:::| || :: |::|  || ::    |.|||:||_____||__
      ||  || | |::| || :: |:::| || :: |::|  || ::    |.|||:||_|_|_||,(
      ||_.|| | |::| || :: |:::| || :: |::|  || ::    |.'||..|    _||,|
   .-'::_.:'.:-.--.-::--.-:.--:-::--.--.--.-::--.--.-:.-::,'.--.'_|| |
    );||_|__||_|__|_||__|_||::|_||__|__|__|_||__|__|_|;-'|__|_(,' || '-
    ||||  || |. . . ||. . . . . ||. . . . . ||. . . .|::||;''||   ||:'
    ||||.;  _|._._._||._._._._._||._._._._._||._._._.|:'||,, ||,,
    '''''           ''-         ''-         ''-         '''  '''
        """)

        door = input("""You decide to go in and take a look and notice that there are three doors.
        A red door, a yellow door, and a blue door.
        You decide to open a door, which door do you choose?
        Tyoe Red, Yellow, or Blue...
        """)
        

        if door.lower() == 'b' or door.lower() == 'blue':
       
            print("""
            You entered the room and the door was attached to a booby trap. T
            he moment you opened the door a needle was shot into your leg.
            That needle was laced with a very toxic snake venom and you died. 
            """)
            print("Game Over")


        elif door.lower == 'y' or door.lower() == 'yellow':
            print("""
            You open the door and find that it is completley dark inside.
            You lean in but cant see anthing. 
            You decide to go in and see if there is a window to open. 
            Suddenly there is a loud 'clunk' sound and you feel the floor disappear beneath your feet.
            You have fallen in a large hole with spikes protruding from the bottom. 
            THe spikes impale you and you bleed to death. 
            """)
            print("Game Over")

        else:
            print("""
            You open the door and see a shovel sticking out of the ground. 
            You realize this must be where the treasure was hidden and rush to start digging.
            After a while you hear a loud 'clunk' sound as the shovel hits something hard.
            You clear the dirt and find a treasure chest! You open the chest!
            The chest is full of treasure! 
            """)
        
            print("Congratulations, you found the treasure")
            print('''
            *******************************************************************************
                    |                   |                  |                     |
            _________|________________.=""_;=.______________|_____________________|_______
            |                   |  ,-"_,=""     `"=.|                  |
            |___________________|__"=._o`"-._        `"=.______________|___________________
                    |                `"=._o`"=._      _`"=._                     |
            _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
            |                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
            |___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
                    |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
            _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
            |                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
            |___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
            ____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
            /______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
            ____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
            /______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
            ____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
            *******************************************************************************
            ''')
            

    else:
        print("""
        As you begin to swim, you realize that the island is much farther than you anticipated.
        You stop and look back and realize now that the shore is also too far for you to swim back. 
        The boat you saw earlier is no where in sight so you realize the only option left is to keep swimming.
        Before you can reach the island your body gives out and you begin to sink.
        Unable to continue on, you drown to death. 
        """)
        print("Game Over")

else:
    print("""
    You turn right and begin to walk. Time goes by and you find that you no longer know where you are in these woods. 
    You are lost. You turn back but have no sense of direction. 
    You starved in the woods.
    """)
    print("Game Over")
