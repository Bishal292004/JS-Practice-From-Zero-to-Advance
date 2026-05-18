# 📘 JavaScript Practice — Basic to Advanced

> A personal repository of JavaScript practice code covering every major concept from beginner fundamentals to advanced patterns. Each file is a focused exercise or mini-project written to learn, experiment, and reinforce understanding.


## 🟢 Beginner Level

### 1. JavaScript Basics
- Variables — `var`, `let`, `const`
- Data Types — `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- Type Checking — `typeof`, `instanceof`
- Type Conversion & Coercion (implicit vs explicit)
- Template Literals
- Comments (single-line, multi-line)
- `console` methods — `log`, `warn`, `error`, `table`, `time`

### 2. Operators
- Arithmetic Operators (`+`, `-`, `*`, `/`, `%`, `**`)
- Assignment Operators (`=`, `+=`, `-=`, etc.)
- Comparison Operators (`==`, `===`, `!=`, `!==`, `>`, `<`)
- Logical Operators (`&&`, `||`, `!`)
- Nullish Coalescing (`??`)
- Optional Chaining (`?.`)
- Ternary Operator
- Bitwise Operators
- Spread (`...`) and Rest (`...`) Operators

### 3. Control Flow
- `if`, `else if`, `else`
- `switch` Statement
- `for` Loop
- `while` Loop
- `do...while` Loop
- `break` and `continue`
- Labeled Statements

### 4. Strings
- String Methods — `length`, `slice`, `substring`, `indexOf`, `includes`, `startsWith`, `endsWith`
- `toUpperCase()`, `toLowerCase()`, `trim()`, `padStart()`, `padEnd()`
- `split()`, `replace()`, `replaceAll()`, `repeat()`
- String Interpolation & Multi-line Strings
- Regular Expressions — basics (`test()`, `match()`, `replace()`)

### 5. Numbers & Math
- `Number` methods — `toFixed()`, `parseInt()`, `parseFloat()`, `isNaN()`, `isFinite()`
- `Math` object — `Math.floor()`, `Math.ceil()`, `Math.round()`, `Math.random()`, `Math.max()`, `Math.min()`, `Math.abs()`, `Math.pow()`, `Math.sqrt()`
- `BigInt` basics

### 6. Arrays — Basics
- Creating Arrays (literal, `Array()`, `Array.from()`, `Array.of()`)
- Accessing & Modifying Elements
- `push()`, `pop()`, `shift()`, `unshift()`
- `splice()`, `slice()`
- `indexOf()`, `includes()`
- `join()`, `reverse()`, `sort()`
- Array Destructuring
- Spread in Arrays

### 7. Objects — Basics
- Object Literals
- Accessing Properties (dot notation, bracket notation)
- Adding, Updating, Deleting Properties
- `Object.keys()`, `Object.values()`, `Object.entries()`
- Object Destructuring
- Shorthand Properties & Methods
- Computed Property Names
- Spread in Objects
- `Object.assign()`

---

## 🟡 Intermediate Level

### 8. Functions
- Function Declarations vs Expressions
- Arrow Functions
- Default Parameters
- Rest Parameters
- Arguments Object
- Immediately Invoked Function Expressions (IIFE)
- First-Class Functions
- Higher-Order Functions
- Callback Functions
- Pure Functions & Side Effects
- Function Scope vs Block Scope
- Closures
- Currying & Partial Application
- Recursion
- Memoization

### 9. Arrays — Advanced
- `forEach()`, `map()`, `filter()`, `reduce()`, `reduceRight()`
- `find()`, `findIndex()`, `findLast()`, `findLastIndex()`
- `some()`, `every()`
- `flat()`, `flatMap()`
- `Array.from()` with mapping
- Chaining array methods
- Sorting with custom comparator
- 2D Arrays / Matrix operations

### 10. Objects — Advanced
- Nested Objects
- `Object.freeze()`, `Object.seal()`
- `Object.create()`
- Property Descriptors — `Object.defineProperty()`
- Getters & Setters
- Symbol as property keys
- `in` operator, `hasOwnProperty()`
- Iterating objects — `for...in`
- Cloning — shallow vs deep
- JSON — `JSON.stringify()`, `JSON.parse()`

### 11. DOM Manipulation
- Selecting Elements — `getElementById`, `querySelector`, `querySelectorAll`
- Traversing the DOM — `parentElement`, `children`, `nextSibling`, `previousSibling`
- Creating & Inserting Elements — `createElement`, `appendChild`, `insertBefore`, `insertAdjacentHTML`
- Removing Elements — `removeChild`, `remove()`
- Modifying Content — `innerHTML`, `textContent`, `innerText`
- Modifying Attributes — `setAttribute`, `getAttribute`, `removeAttribute`, `dataset`
- Modifying Styles — `style`, `classList` (`add`, `remove`, `toggle`, `contains`)
- DOM Events — `addEventListener`, `removeEventListener`
- Event Object — `target`, `currentTarget`, `preventDefault()`, `stopPropagation()`
- Event Types — `click`, `input`, `change`, `submit`, `keydown`, `keyup`, `mouseover`, `resize`, `scroll`
- Event Bubbling, Capturing & Delegation
- Forms & Input Handling

### 12. Object-Oriented Programming (OOP)
- Constructor Functions
- `new` keyword & `this`
- Prototypes & Prototype Chain
- `Object.getPrototypeOf()`
- ES6 Classes — `class`, `constructor`, `methods`
- Inheritance — `extends`, `super`
- Static Methods & Properties
- Private Fields (`#`)
- Getters & Setters in Classes
- Mixins
- Encapsulation, Abstraction, Inheritance, Polymorphism

### 13. Error Handling
- `try`, `catch`, `finally`
- `throw` Statement
- `Error` object — `message`, `name`, `stack`
- Custom Error Classes
- Error Types — `TypeError`, `ReferenceError`, `SyntaxError`, `RangeError`
- Handling Errors in Async Code

### 14. Iterators & Generators
- Iterable Protocol
- `for...of` Loop
- Custom Iterators
- Generator Functions (`function*`)
- `yield` & `yield*`
- Infinite Sequences with Generators
- Generators for async flow control

### 15. Symbols & Well-known Symbols
- Creating Symbols
- `Symbol.iterator`, `Symbol.hasInstance`, `Symbol.toPrimitive`
- `Symbol.for()` and global registry

---

## 🔴 Advanced Level

### 16. Asynchronous JavaScript
- Synchronous vs Asynchronous
- Call Stack, Web APIs, Event Loop, Callback Queue
- Callbacks & Callback Hell
- Promises — `new Promise()`, `.then()`, `.catch()`, `.finally()`
- Promise Chaining
- `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, `Promise.any()`
- `async` / `await`
- Error Handling in Async/Await
- Top-level `await`
- Microtask Queue vs Macrotask Queue
- `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`
- `queueMicrotask()`

### 17. Fetch API & Networking
- `fetch()` basics — GET, POST, PUT, DELETE
- Request & Response Objects
- Headers
- Handling JSON responses
- `AbortController`
- Error handling with fetch
- REST API consumption
- GraphQL basics with fetch

### 18. ES6+ Modern Features
- Destructuring (Arrays & Objects — advanced patterns)
- Enhanced Object Literals
- Tagged Template Literals
- `for...of` and `for...in`
- Iterables & Iterators
- `Map` and `Set`
- `WeakMap` and `WeakSet`
- `Proxy` and `Reflect`
- Logical Assignment Operators (`||=`, `&&=`, `??=`)
- Numeric Separators (`1_000_000`)
- `globalThis`
- `structuredClone()`

### 19. Modules
- CommonJS — `require()`, `module.exports`
- ES Modules — `import`, `export`, `export default`
- Named vs Default Exports
- Re-exporting
- Dynamic Imports — `import()`
- Module Bundlers overview (Webpack, Vite, Rollup)

### 20. Functional Programming
- Immutability
- Pure Functions
- Function Composition
- `pipe()` and `compose()`
- Functors & Monads (basic concepts)
- Point-Free Style
- Transducers (concept)

### 21. Design Patterns
- Creational — Factory, Singleton, Builder, Prototype
- Structural — Module, Decorator, Adapter, Facade, Proxy
- Behavioral — Observer, Strategy, Command, Iterator, Mediator, Chain of Responsibility
- MVC / MVP / MVVM patterns

### 22. Browser APIs
- LocalStorage & SessionStorage
- IndexedDB (basics)
- Web Workers
- Service Workers (basics)
- Geolocation API
- Canvas API (basics)
- Intersection Observer API
- MutationObserver
- ResizeObserver
- Clipboard API
- Drag & Drop API
- History API — `pushState`, `replaceState`
- `URLSearchParams`

### 23. Regular Expressions (Deep Dive)
- Regex Syntax — character classes, quantifiers, anchors
- Groups & Backreferences
- Lookahead & Lookbehind
- Flags — `g`, `i`, `m`, `s`, `u`, `y`
- `exec()`, `test()`, `match()`, `matchAll()`, `replace()`, `split()`
- Named Capture Groups

### 24. Memory Management & Performance
- Garbage Collection — Mark & Sweep
- Memory Leaks & how to avoid them
- `WeakRef` and `FinalizationRegistry`
- Debouncing & Throttling
- Lazy Loading
- Virtual DOM concept
- Web Performance — `requestAnimationFrame`, `performance.now()`

### 25. Security
- XSS (Cross-Site Scripting) — prevention
- CSRF basics
- Content Security Policy (CSP)
- `eval()` dangers
- `innerHTML` vs `textContent` (security implications)
- CORS — Cross-Origin Resource Sharing
- Secure Cookies & `HttpOnly`

### 26. Testing
- Unit Testing basics
- Test-Driven Development (TDD)
- Jest basics — `describe`, `it`, `expect`, matchers
- Mocking & Spying
- Integration Testing overview
- End-to-End Testing overview (Cypress/Playwright)

### 27. TypeScript (Introduction)
- Why TypeScript?
- Basic Types in TS
- Interfaces & Types
- Generics
- Enums
- Decorators (basics)
- Migrating JS to TS

---

## 📌 How This Repo is Organized

Each folder corresponds to a level/topic. Inside each folder:
- Files are named descriptively (e.g., `closures.js`, `promise-chaining.js`)
- Each file includes comments explaining the concept
- Some files include small exercises or outputs at the bottom

---

## 🛠️ How to Run

No build tools needed for most files. Just run with Node.js:

```bash
node filename.js
```

Or open in your browser console for DOM-related scripts.

**Requirements:**
- [Node.js](https://nodejs.org/) v18+ recommended

---

## 🎯 Goals

- [ ] Complete all basic-level topics
- [ ] Complete all intermediate-level topics
- [ ] Complete all advanced-level topics
- [ ] Build at least 3 mini-projects using concepts learned
- [ ] Write clean, well-commented code throughout

---

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [javascript.info](https://javascript.info/)
- [ECMAScript Specification](https://tc39.es/ecma262/)
- [You Don't Know JS (Book Series)](https://github.com/getify/You-Dont-Know-JS)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

---

## 👤 Author

- GitHub: [@Bishal292004](https://github.com/Bishal292004)

---

## 📄 License

This repository is for personal learning and practice. Feel free to fork and use it for your own JS journey!

---

> *"Any application that can be written in JavaScript, will eventually be written in JavaScript."* — Jeff Atwood
