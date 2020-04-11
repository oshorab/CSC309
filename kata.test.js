const greeting = require('./kata');

test('greet() with a name', () => {
  expect(greeting.greet('Bob')).toBe('Hello, Bob.');
})

test('greet takes a null value', () => {
  expect(greeting.greet()).toBe('Hello, my friend.');
})

test('greet takes an all caps name', () => {
  expect(greeting.greet('JEFF')).toBe('HELLO JEFF!');
})

test('greet takes two names', () => {
   expect(greeting.greet(['John', 'James'])).toBe("Hello, John and James.");
})

test('greet takes three names', () => {
   expect(greeting.greet(['John', 'James', 'Omar'])).toBe("Hello, John, James, and Omar.");
})

test('greet takes three names', () => {
   expect(greeting.greet(['John', 'James', 'Omar', 'Rick'])).toBe("Hello, John, James, Omar, and Rick.");
})

test('greet takes three names', () => {
   expect(greeting.greet(['John', 'JAMES','Omar'])).toBe("Hello, John and Omar. AND HELLO JAMES!");
})

test('greet takes comma separated names', () => {
	expect(greeting.greet(['John', 'James, Omar'])).toBe("Hello, John, James, and Omar.");
})

test('greet handles escape intentional commas', () => {
	expect(greeting.greet(["Bob", "\"Charlie, Dianne\""])).toBe("Hello, Bob and Charlie, Dianne.");
})
