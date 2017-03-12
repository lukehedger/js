/**
  * Closures
  *
  * A closure is the combination of a function bundled together (enclosed)
  * with references to its surrounding state (the lexical environment).
  *
  * Closures are functions that refer to variables that are used locally but defined in an enclosing scope.
  *
  * A closure gives you access to an outer function’s scope from an inner function.
  *
  * In JavaScript, closures are created every time a function is created, at function creation time.
  *
  * Uses:
  * - Data privacy: private variables that are visible only to a specific function or set of functions
  * - Stateful functions: `const secret = msg => () => msg`
  *
  * @see https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
  * @see http://stackoverflow.com/documentation/javascript/480/scope/1575/closures
  * @see http://stackoverflow.com/documentation/javascript/186/functions/844/function-scoping
**/

var global = 'global' // global scope

// The function `closure`, whose context is captured in another function (`inner`), is a closure.
const closure = () => {
  const outer = 'scope' // `outer` is bound to a value in the outer scope

  // When you define a function, it creates a scope.
  const foo = () => {
    // Only code within this scope can see the entities defined inside the scope.
    const bar = 'bar'
    console.log(bar) // => 'bar'
  }

  // To use a closure, simply define a function inside another function and expose it
  // When a function is declared, variables in the context of its declaration are captured in its scope
  const inner = () => {
    // The inner function will have access to the variables in the outer function scope, even after the outer function has returned.
    console.log(outer) // the reference to `outer` is captured in the context of `inner` on declaration

    // When JavaScript tries to resolve a reference or variable, it starts looking for it in the current scope.
    // If it cannot find that declaration in the current scope, it climbs up one scope to look for it
    // and carries on all the way up to the global scope
    // If the JavaScript parser cannot find the reference, a reference error will be thrown.
    // console.log(bar) // => undefined
    // console.log(global) // => 'global'
  }

  // Expose a function by returning it or passing it to another function
  return inner

  // `outer` goes out of scope after `closure` returns
}

const runClosure = closure() // calling the function `closure` causes it to be returned
runClosure() // but as `closure`'s context has been captured in the function `inner` the variable `outer` can still be accessed when `inner` is called

// Enclosed variables are only in scope within the containing (outer) function
// console.log(outer) // => undefined
