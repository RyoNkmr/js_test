'use strict';
const Calculator = require('../app/Calculator');
const assert = require('chai').assert;

suite('Calculator', () => {
  let calc;
  // suite('TypeError', () => {
  //   test('constructorの引数がNumberでないときTypeErrorを投げること', () => {
  //     assert.throws(() => new Calculator('#hoge'), TypeError);
  //   });
  //   test('constructorの引数がNumber', () => {
  //     assert.doesNotThrow(() => new Calculator(10));
  //   });
  // });
  setup(() => {
    calc = new Calculator();
  });

  test('加算できること', () => {
    calc.value = 1000;
    assert.equal(calc.value, 1000, '初期値');
    assert.equal(calc.add(100).value, 1100, '加算されること');
    assert.equal(calc.value, 1100, '加算されたままであること');
  });

  test('除算できること', () => {
    calc.value = 1000;
    assert.equal(calc.value, 1000, '初期値');
    assert.equal(calc.subtract(100).value, 1100, '除算されること');
    assert.equal(calc.value, 1100, '除算されたままであること');
  });
});
