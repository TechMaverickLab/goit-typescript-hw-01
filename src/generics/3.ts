// @ts-nocheck
// Завдання 3 - Функція об'єднання об'єктів
function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
  }
  export {};
  