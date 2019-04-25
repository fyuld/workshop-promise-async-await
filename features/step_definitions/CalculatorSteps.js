const { Given, When, Then, Before } = require('cucumber');
const { expect } = require('chai');

let state = {};

Before(() => {
  state = {};
});

Given('two numbers {int} and {int}', (a, b) => {
  state.a = a;
  state.b = b;
});

When('we add them up', () => {
  const { a, b } = state;
  state.result = a + b;
});

Then('the sum should be {int}', function(int) {
  expect(state.result).to.equal(6);
});

When('we multiply them', function() {
  const { a, b } = state;
  state.result = a * b;
});

Then('the product should be {int}', function(int) {
  expect(state.result).to.equal(8);
});
