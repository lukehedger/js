/**
  * Class Inheritance
  *
  * A class is like a blueprint — a description of the object to be created.
  * Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.
  *
  * Class inheritance may or may not use the `class` keyword from ES6.
  *
  * JavaScript’s class inheritance uses the prototype chain to wire the child `Constructor.prototype`
  * to the parent `Constructor.prototype` for delegation. Usually, the `super()` constructor is also called.
  * Those steps form single-ancestor parent/child hierarchies and create the tightest coupling available in OO design.
  *
  * Favor object composition over class inheritance.
  *
  * @see https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9
  * @see http://stackoverflow.com/documentation/javascript/197/classes
  * @see https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4#.afh8hhqdh
**/

// Class inheritance creates parent/child object taxonomies as a side-effect.
// Those taxonomies are virtually impossible to get right for all new use cases,
// and widespread use of a base class leads to the fragile base class problem, which is very difficult to fix.

// Fragile Base Class Problem example:

// `A` is the base class
class A {
  // The fundamental part of most classes is its constructor, which sets up each instance's initial state
  // and handles any parameters that were passed when calling `new`.
  constructor({ a=1, b=2, c=3, d=4 }={}) {
    Object.assign(this, { a, b, c, d })
  }

  method() {
    console.log('method', this.b)
  }
}

// `B` inherits from `A`
class B extends A {
  constructor(opts={}) {
    // `B` calls `super` which runs code in `A`.
    super(opts)
    // If the subclass declares its own constructor then it must invoke the parents constructor via super()
    // before it can access this.
    this.b = 'b'
  }
}

// `C` inherits from `B`
class C extends B {
  constructor(opts={}) {
    // `C` calls `super`, which runs code in `B`.
    super(opts)
    this.c = 'c'
  }
}

// `D` inherits from `B`
class D extends B {
  constructor(opts={}) {
    super(opts)
    this.d = 'd'
  }
}

// Instances are typically instantiated via constructor functions with the `new` keyword.
const a = new A()
const b = new B()
const c = new C()
const d = new D()

// What we have here are features spread out between `A` and `B` that `C` and `D` need to use in various ways.
// `C` and `D` don’t use every feature of `A` and `B` they just want to inherit some stuff
// that’s already defined in `A` and `B`.
// But by inheriting and calling `super`, you don’t get to be selective about what you inherit.
// You inherit everything
console.log(a)
console.log(b)
console.log(c)
console.log(d)

// Methods defined on the superclass are accessible in the extending subclass.
a.method()
b.method()
