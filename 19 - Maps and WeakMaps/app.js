// Maps  are like Sets except they take in key/value pairs instead of Arrays to make a list.
// Weak Maps are like Weak Sets except they take in key/value pairs instead of Objects to make a list.

// For Maps and WeakMaps, the "key" can be an entire object.

const dogs = new Map();

// .set() can be used to add entries to the object. You would provide a key and a value to pair together
dogs.set('Seamus', 2);
dogs.set('Johnny', 7);
dogs.set('Jack', 18);

dogs.has('Seamus') // pass a key to .has() to check if the map has it or not.
dogs.get('Seamus') // pass a key to .get() to return its value.
dogs.delete('Jack') // .delete() deletes the entry with the key that's passed to it and returns true/false is successful or not.

// Maps (EVEN THOUGH THEY ARE NOT ARRAYS NOR BASED ON ARRAYS) can be iterated upon with .forEach() or with a for-of loop.

dogs.forEach((val, key) => console.log(val, key));

for (const dog of dogs) {
    console.log(dog); // the item in the map is returned as an array containing the key and the value. 
}
// If you just want to see the key and value, you can change the const to be [key, value
for (const [key, value] of dogs) {
    console.log(key, value)
}


// An advantage of a Map over a plain object is that and ENTIRE OBJECT can be used as a key in a Map.
// Maps are good if you would like to store some Metadata About an object. In the example below, we will record the number of times a button is clicked

// Say you query select a bunch of elements
const buttons = document.querySelectorAll('button'); // This returns a node list of button objects. Which can be used as keys in a map

const clickCounts = new Map();
console.log(clickCounts)

for (const button of buttons) { // Remember you can also use .forEach()!
    clickCounts.set(button, 0);
    button.addEventListener('click', function () {

        const val = clickCounts.get(this);
        clickCounts.set(this, val + 1)
        // These are not the "getters" and "setters" for properties like used in Classes. .get() and .set() are prototype methods available to Maps to get a value at a key and set a value at a key
        console.log(clickCounts);
    })
}


// Weak Maps can't be looped and they will get garbage collected if an object inside of it is deleted.

let dog1 = { name: 'Seaums' };
let dog2 = { name: 'Johnny' };

const strong = new Map();
const weak = new WeakMap();

strong.set(dog1, 'Seamus Rules');
weak.set(dog2, 'Johnny Drools');

dog1 = null; // Regular "strong" map holds on to the reference even though it's been deleted. Results in a memory leak
dog2 = null; // Weak map will garbage collect the object. You would reach for a weak map if you don't want to babysit the values in a map in case they get deleted somehow.