/**
  * Prototypal Inheritance
  *
  * A prototype is a working object instance.
  * Objects inherit directly from other objects.
  *
  * Instances are typically instantiated via factory functions, object literals or `Object.create()`.
  *
  * Instances may be composed from many different source objects, allowing for easy selective inheritance
  * and a flat [[Prototype]] delegation hierarchy.
  *
  * Favor object composition over class inheritance.
  *
  * @see https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9
  * @see http://stackoverflow.com/documentation/javascript/592/inheritance
**/

// Start by defining a function that can be used as a constructor.
function Fn (){}

// Static properties are never inherited. These are often used to create 'private' utilities.
Fn.white = 'noise'

// Edit `Fn.prototype` to define properties and methods for all instances of `Fn`.
Fn.prototype.method = () => 'prototype'

// Create an instance using the new keyword.
const fn = new Fn()

// Call any methods defined on the prototype.
console.log(fn.method())

// Instances only inherit from their prototype, which inherits from the parent type's prototype.
// console.log(fn.white) // => undefined

// There are 3 different kinds of prototypal OO

// Concatenative inheritance: The process of inheriting features directly from one object to another by copying the source objects properties
// Object.assign({}, { a: 1 }, { b: 2 })`

// Prototype delegation: An object may have a link to a prototype for delegation. If a property is not found on the object, the lookup is delegated to the delegate prototype, which may have a link to its own delegate prototype, and so on up the chain until you arrive at `Object.prototype`, which is the root delegate.

// Functional inheritance: When a function that creates an object is not a constructor (or `class`), it’s called a factory function. Functional inheritance works by producing an object from a factory, and extending the produced object by assigning properties to it directly (using concatenative inheritance).

const one = { a: 1, b: 0, add: (a, b) => a + b }
const two = { b: 2 }

const three = Object.create(Object.assign({}, one, two))

console.log(three.add(three.a, three.b))
