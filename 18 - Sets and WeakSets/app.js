// A set is similar to an array. It can be added to, removed from, and looped over.
        // However, any particular item can only ever be added to it once (meaning it cannot contain duplicates) and it isn't index based. It's more of a list. mySet[0] would return undefined for example, not the first item in the list.

        const people = new Set();

        people.add('Jalani');
        people.add('Jose');
        people.add('Ana');

        people.delete('Jalani'); // What's significant here is that the index doesn't need to be found to remove an item from a set. It also return true/false if an item is or is not deleted.


        // Side-note* - .keys() will return the same thing as .values() when called on a Set.
        console.log(people.keys());
        // Additional side-note* - .entries() can be called on a set. Typically this will return a key/value pair but on a set it returns a value/value pair
        console.log(people.entries());

        // Also, a for-of loop will return ("yeild") each of the values - as you learned in the generators section of this walkthrough.
        for (const person of people) {
            console.log(person);
        }


        // You can also pass an array of items directly to a Set when you are creating it and a Set will be created from the contents of the array.
        const students = new Set(['Wes', 'Kara', 'Ana']);

        // .has() can be called on a set to check if a value is currently in the set.
        console.log(students.has('Wes'))
        console.log(students.has('Jalani'))
        // .size will return the length of the set, similar to how .length will return the length
        console.log(students.size)

        // The values in a set can be accessed via people.values() and this returns a Set Iterator, which is functionally similar to a generator
        // Calling .next() on .values() will yield the next value since a set iterator is returned.
        
        const rollCall = students.values();
        
        console.log(rollCall.next().value);
        console.log(rollCall.next().value);
        
        // Imagine a student walks in! Add them to the set!
        students.add('Leanne');
        // Another!
        students.add('Justin');
        // Adding to the set will not change anything about rollCall Set Iterator. The set just gets more items for the Set Iterator to iterate through.
