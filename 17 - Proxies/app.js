// Proxies allow you to override the default behaviors/operations of an object
// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
const person = { name: 'Jalani', age: 32 };
console.log(person)

// When creating a new Proxy, they accept a target and a "handler" object
const handler = { // Within the handler, you would set traps to intercept operations that are made on the proxy object.
    get(target, name) { // If you were to try to get the name on a proxy that is using this handler, whatever is in this function body would execute instead.
        console.log('someone is asking for ', target, name);
        return target[name].toUpperCase(); // You could also enforce some kind of logic. In this example, trying to get the name on the proxy would force the name that is returned when getting the property to be in Uppercase.
    },
    set(target, name, value) { // set() always needs parameters for the target, property, and value. An additional 4th parameter, "receiver", can be passed to represent "this" for the setter.
        // Target = The original object being wrapped in a proxy.
        // Property = the property attempting to be set on the proxy.
        // Value = the value of the property attemping to be set on the proxy.
        // You can also apply logic when someone is attempting to set a value on the proxy
        if (typeof value === 'string') {
            target[name] = value.trim().toUpperCase() + ' lol';
        } // This would trim whatever value is being set if someone were to try to change personeProxy.name
    }

    // There a bunch of traps that can be set to interfere with operations. They would need to be specified in your handler object, otherwise the default functionality will just persist on the proxy object.
}


const personProxy = new Proxy(person, handler); // Proxies come with two parameters: 1. The target which is the original object you are copying, and 2. a handler that will contain alternatives outputs for the method that you chose to provide for intercepting


// Another example:
const phoneHandler = {
    set(target, type, value) {
        target[type] = value.match(/[0-9]/g).join(''); // This would clean up the values that are set to only accept the numbers that are input
    },
    get(target, type) {
        return target[type].replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') // This would cause the number to be returned neatly formatted according to the provided regex when attempting to get the type of phone number
    }
}

const phoneNumbers = new Proxy({}, phoneHandler)

phoneNumbers.home = "+234-444-3545";
phoneNumbers.cell = "(404)-539-1776";



// Proxies can be useful when creating a library for other devs to use themselves. Basically as a way to make it so that devs can consistently set properties on objects the correct way. 
// For example, you can warn a user that they are setting a property that already exists but is spelled differently or has different casing to avoid setting a redundant new property.

const safeHandler = {
    set(target, property, value) {
        // In this example, we are seeing if what has been entered as a property is similar to the property as it is represented in the Proxy's target. We can do this by just seeing if they are the same if both are lowercase. 
        const similarKey = Object.keys(target).find(key => key.toLowerCase() === property.toLowerCase());

        // Then we would check to see if this property is not found in the proxy target and if it's similar to what's in the proxy target. If it it fails to meet these conditions, throw an error. Otherwise, the new property will just be set without falling into this trap
        if (!(property in target) && similarKey) {
            throw new Error(`Oops! there is already a(n) ${property} property but with the case of ${similarKey}.`)
        }
        target[property] = value
    }
}

const safety = new Proxy({ id: 100 }, safeHandler) // here we are intending to receive the `id` property exactly as it appears, "id"

// Say someone tries to set an "ID" instead of "id" like the proxy expects.
// The handler you've created in this file is useful for catching typos or inconsistnet casing, which can be a common source of bugs in JS objects. 
safety.ID = 200;

