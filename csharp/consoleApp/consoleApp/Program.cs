using System;

namespace consoleApp
{
    class Program
    {
        public static void Main(string[] args)

        {
            Boolean HasSward = false;
            Boolean herdLiving = true;
            Awake();


            void Awake()
            {
                Console.WriteLine("#######################################");
                Console.WriteLine("######### THE TALE OF THE #############");
                Console.WriteLine("########### DARK FOREST ###############");
                Console.WriteLine("#######################################");
                Console.WriteLine("###########################");
                Console.WriteLine("At the edge of the forest ");
                Console.WriteLine("a dirt road lead you into the dark");
                Console.WriteLine("##################################");
                Console.WriteLine("'yes' to continue: ");
                Console.WriteLine("-------------------");
                var awake_input = Console.ReadLine().ToLower();
                if (awake_input == "yes")
                {
                    AlongtheRoad();
                }
                else
                {
                    Console.WriteLine("Something stabbed you from behind...");
                    Dying();
                }

            }

            void AlongtheRoad()
            {
                Console.WriteLine("");
                Console.WriteLine("################################");
                if (!HasSward) {
                    Console.WriteLine("You walk a long the road. hmm...");
                    Console.WriteLine("Footsteps turning onto a side road");
                    Console.WriteLine("#######################################");
                    Console.WriteLine("'follow' or 'continue':");
                    Console.WriteLine("-----------------------------");
                } else {
                    Console.WriteLine("You walk a long the road, and stop!");
                    Console.WriteLine("#######################################");
                    firstEncounter();
                }
                var along_input = Console.ReadLine().ToLower();
                if (along_input == "follow")
                {
                    theHouse();
                }
                else if (along_input == "continue")
                {
                    theEndOfTheRoad();
                }
                else
                {
                    AlongtheRoad();
                }
            }
            void theHouse()
            {
                Console.WriteLine("");
                Console.WriteLine("##################################");
                Console.WriteLine("There is a small building up ahead");
                Console.WriteLine("You walk up to the house");

                Console.WriteLine("##########################");
                Console.WriteLine("'knock' or 'look around':");
                Console.WriteLine("--------------------------");
                var theHouse_input = Console.ReadLine().ToLower();
                if (theHouse_input == "knock")
                {
                    OnEnterTheHouse();
                }
                else if (theHouse_input == "look around")
                {
                    theGarden();

                }
                else
                {
                    theHouse();
                }
            }

            void OnEnterTheHouse()
            {
                Console.WriteLine("");
                Console.WriteLine("##################################");
                Console.WriteLine("Some appoched the door from inside");
                Console.WriteLine("The door opens. Hurry!");
                Console.WriteLine("A lady stands in the door way. ");
                Console.WriteLine("Please come in, I have been wating.");
                Console.WriteLine("#################################");
                Console.WriteLine("'enter' or 'leave': ");
                Console.WriteLine("---------------------");
                var ontheHouse_input = Console.ReadLine().ToLower();
                if (ontheHouse_input == "enter")
                {
                    EnterTheHouse();
                }
                else if (ontheHouse_input == "leave")
                {
                    theGarden();

                }
                else
                {
                    theHouse();
                }

            }
            void EnterTheHouse()
            {
                Console.WriteLine("");
                if (herdLiving == true) {
                    Console.WriteLine("#################################");
                    Console.WriteLine("A warms air slips out as you enter");
                }
                Console.WriteLine("Your asked to take a set infront of the warming fire");
                Console.WriteLine("She askes if you dealt with the creates");
                Console.WriteLine("#######################################");
                Console.WriteLine("'no' or 'yes' ? ");
                Console.WriteLine("----------------");
                var ontheHouse_input = Console.ReadLine().ToLower();
                if (ontheHouse_input == "yes") {
                    if (herdLiving == false)
                    {
                        Console.WriteLine("###########################");
                        Console.WriteLine("You killed, you killed them!");
                        Console.WriteLine("Stay with my, ");
                        Console.WriteLine("love me, protect me,");
                        Console.WriteLine("live with form ever!");
                        Console.WriteLine("####################");
                        Console.WriteLine("'no' or 'yes' ? ");
                        Console.WriteLine("----------------");
                        var marryme_input = Console.ReadLine().ToLower();
                        if (marryme_input == "yes")
                        {
                            Married();
                        }
                        else if (marryme_input == "no")
                        {
                            Leaving();

                        }
                    } else {
                     
                        Console.WriteLine("I can feel it, there still out there!");
                        AskFavor();
                    }
              
                }
                else 
                {
                    AskFavor();

                }

            }
            void AskFavor()
            {
                Console.WriteLine("#######################################");
                Console.WriteLine("She tells you how a group of creatures ");
                Console.WriteLine("has killed every living thing in the forest. ");
                Console.WriteLine("She askes you to take the sword and kill them all.");
                Console.WriteLine("What is your answer?");
                Console.WriteLine("####################");
                Console.WriteLine("'no' or 'yes' ? ");
                Console.WriteLine("----------------");
                var AskFavor_input = Console.ReadLine().ToLower();
                if (AskFavor_input == "no") {
                    Console.WriteLine("Again... ");
                    AskFavor();
                } else {
                    HasSward = true;
                    Console.WriteLine("#############################################");
                    Console.WriteLine("You take the sword and it burns in your hand ");
                    Console.WriteLine("exiting the cottage"); 
                    theGarden();

                }
            }


            void theGarden()
            {
                Console.WriteLine("You walk around the corner of the house ");
                firstEncounter();

            }

            void theEndOfTheRoad()
            {
                Console.WriteLine("The woods thickens and the road ends ...");

                firstEncounter();
            }
            void firstEncounter()
            {

                Console.WriteLine("A little further ahead a group of strange creatures  ...");
                Console.WriteLine("One of them lifts its nose and .");
                Console.WriteLine("suddenly the group turns their heads towards you.");
                Console.WriteLine("###############################################");
                Console.WriteLine(" 'goback' or 'continue' ");
                Console.WriteLine("------------------------");
                var encounter_input = Console.ReadLine().ToLower();
                if (encounter_input == "goback")
                {
                    AlongtheRoad(); 
                }
                else if (encounter_input == "continue")
                {
                    if (HasSward)
                    {
                        Killing();
                    }
                    else
                    {
                        Dying();
                    }
                }
                else
                {
                    firstEncounter();

                }

            }

         

            void Dying()
            {
                Console.WriteLine("The herd jumps you, first blood");
                Console.WriteLine("The last drop of blood");
                Console.WriteLine("Screen turns dark");
                Console.WriteLine("A light in a tunnel");
                Console.WriteLine("'restart' or 'quit'");
                var _dying = Console.ReadLine().ToLower();
                if (_dying == "restart")
                {
                    Awake();
                }

            }

            void Killing()
            {
                Console.WriteLine("#################################");
                Console.WriteLine("The herd jumps you, first blood");
                Console.WriteLine("With the force of thousand swords");
                Console.WriteLine("You obliviate the evil pack");
                Console.WriteLine("and run back to enter the cottage.");
                herdLiving = false;
                EnterTheHouse();
            }

            void Married()
            {
                Console.WriteLine("####################");
                Console.WriteLine("You take her hand. ");
                Console.WriteLine("She looks deep into your eyes ");
                Console.WriteLine("You are the strongest woman I ever met");
                Console.WriteLine("");
                Console.WriteLine("####################################");
                Console.WriteLine("####### AND SO THEY LIVED ##########");
                Console.WriteLine("############# HAPPY ################");
                Console.WriteLine("########## EVER EFTER ##############");
                Console.WriteLine("####################################");
                Console.WriteLine("############## END #################");
                Console.WriteLine("####################################");
                Console.WriteLine("");

            }

            void Leaving()
            {
                Console.WriteLine("She looks deep into your eyes ");
                Console.WriteLine("You are the strongest woman I ever met");
                Console.WriteLine("You leave the house and step out ...");
                Console.WriteLine("");
                Console.WriteLine("####################################");
                Console.WriteLine("####################################");
                Console.WriteLine("########### LONE WARRIOR ###########");
                Console.WriteLine("####################################");
                Console.WriteLine("############## END #################");
                Console.WriteLine("####################################");
            }


        }



    }
}

