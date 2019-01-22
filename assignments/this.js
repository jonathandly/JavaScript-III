/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - "this" is bound to the window object.
* 2. Implicit Binding - Automatic. To the left of the invocation is where the "this" keyword can be found.
* 3. New Binding - Using "new" "this" is bound to the constructor function.
* 4. Explicit Binding - We control and set the context for "this".
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function goodBye() {
    console.log(this);
}
//goodBye();

// Principle 2
// code example for Implicit Binding
const dev = {
    name: 'Jonathan',
    skillLevel: 'Jedi',
    create: function() {
        console.log(`${this.name} is a code ${this.skillLevel}`);
    }
}
dev.create();

// Principle 3
// code example for New Binding
function RickC137(name) {
    this.name = name;
    this.talk = function() {
        console.log(`${this.name} says wubba lubba dub dub!! haha yeah...`);
    }
}
const rick = new RickC137('Rick');
rick.talk();
const morty = new RickC137('Morty');
morty.talk = function() {
    console.log(`${this.name} says oh geeeezzzz Rick, do we have to???`);
}
morty.talk();

// Principle 4
// code example for Explicit Binding
const car = {
    engine: '4 cylinder',
    transmission: 'automatic',
    tires: 4,
    suspension: 'standard' 
}

function assembleCar() {
    console.log(`Install a ${this.engine} engine with an ${this.transmission} transmission. Add on ${this.tires} tires along with a ${this.suspension} suspension to assemble a car.`);
}

assembleCar.call(car);