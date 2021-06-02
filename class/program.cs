using System;

namespace clas
{   
    public class wizard
    {
        public string name;
        public string favouritespell;
        public int spellslots;
        public float experience;
        public static int count;


        public wizard(string _name, string _favouritespell)
        {
            name = _name;
            favouritespell = _favouritespell;
            spellslots = 2;
            experience = 0f;
            count++;
        }

        public void castspell()
        {
            if (spellslots > 0)
            {
                Console.WriteLine(name + " casts " + favouritespell);
                experience+=0.3f;
                spellslots--;
            }
            else
            {
                Console.WriteLine(name + " is out of juice");
            }
        }
            public void meditation()
            {
                Console.WriteLine(name + "is meditating");
                spellslots = 2;
            }

    }   
    

           class Program
    {
        static void Main(string[] args)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            wizard wizard01 = new wizard("mary hopper", "experincium");
            wizard wizard02 = new wizard("grandolf", "memezium");

            wizard01.castspell();            
            wizard02.castspell();

            Console.WriteLine(wizard.count);

            Console.ReadKey();
        }
        
    }
}
