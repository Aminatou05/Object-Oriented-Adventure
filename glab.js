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
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
      }
  }
  console.log(Character);

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
// When extending a class, the “child” class inherits
//  all properties of its parents. This means that we do not need to account for the name, 
// health, inventory, or roll method of Character children classes.

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

//   Next, create a Companion class with properties and methods specific to the companions.
// Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
 class  Companione extends Adventurer(){
    constructor(name, role) {
        super()

    }
 }