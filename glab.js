// Part 1: Humble Beginnings
// Let’s model a simple adventurer with basic properties such as health and an inventory.
// We will call the adventurer “Robin.”

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

adventurer.roll();

//   console.log(Leo);
//   console.log(adventurer.companion);

// Part 2: Class Fantasy
// let’s take a moment to analyze the data above. What are the common features of each object?
// When creating classes, begin by searching for the simplest form your data takes. Remember,
//  you can add specificity later by extending the classes.

class Character {
  // Add a static MAX_HEALTH property to the Character class, equal to 100.
  static MAX_HEALTH = 100;
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

console.log(Character.MAX_HEALTH);

//   Now, we can re-create Robin using the Character class!
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
console.log(robin.companion.type);
console.log(robin.health);
robin.companion.companion.roll();

// Part 3: Class Features

class Adventurer extends Character {
  // Add a static ROLES array to the Adventurer class, with the values “Fighter,”
  static ROLES = ["Fighter", "Healer", "Wizard"];

  constructor(name, role, check) {
    super(name, role);
    this.role = role;
    // Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.
    this.check = this.check;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
   
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  restByCampfire() {
    console.log(`${this.name} Rejuvenates after a long day of adventuring....`);
    super.roll();
  }

  climbMountain() {
    console.log(`${this.name} Attempts to ascend a mountain....`);
    super.roll();
  }
  addItems(...items) {
    console.log(this.inventory.push(items));
    // for (let i=0; i<inventory.length; i++) {
    //       console.log('this is element i');
    //       console.log(inventory[i]);
    // }
  } 

}
console.log(Adventurer);


console.log(Adventurer.ROLES);

const Halima = new Adventurer("Halima", "Climbing Gear");
const Halimasy = new Adventurer("Halimasy", "Runner", "I am ok");
console.log(Halima);
Halima.climbMountain();
Halima.restByCampfire();
console.log(Halimasy);
Halimasy.climbMountain();
Halimasy.restByCampfire();
// Next, create a Companion class with properties and methods specific to the companions.
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.name = name;
    this.type = type;
  }
  // Methods  to companion
  assist() {
    console.log(`${this.name} is assisting the adventurer.`);
  }
  greet() {
    console.log(`Greetings, fellow adventurer! I am ${this.name}.`);
  }
}
// Finally, change the declaration of Robin and the companions to use
// the new Adventurer and Companion classes.

let Robin = new Adventurer("Robin" ,"adventurer", "please check on him");
let Leo = new Companion("Leo", "Cat");
let Frank = new Companion("Frank", "Flea");

// Create an instance of Companion
const tinkerbell = new Companion("Tinkerbell", "Fairy");
tinkerbell.assist();
tinkerbell.greet();

Robin.addItems("hat");
console.log(Robin);

// Part 5: Gather your Party
// Factories are classes that generate objects according to the factory’s instance properties.
// As an example, let’s look at how we might create many “healer” role adventurers using a factory:
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");
  