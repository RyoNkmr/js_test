const INITIAL_VALUE = Symbol('initialValue');
const VALUE = Symbol('value');

/**
 * the calculator
 *
 * @param {Number} base the initial value
 */
class Calculator {
  constructor(base = 0) {
    // if (!Number.isFinite(base)) {
    //   throw new TypeError(`${base} is not a number`);
    // }
    this[INITIAL_VALUE] = base;
    this[VALUE] = base;
  }

  /**
   * set value
   *
   * @param {Number} value to be set
   * @return {Instance} Calculator instance
   */
  set value(value) {
    this[VALUE] = value;
  }

  /**
   * reset value by initialValue
   *
   * @return {Instance} Calculator instance
   */
  reset() {
    this[VALUE] = this[INITIAL_VALUE];
    return this;
  }

  /**
   * add by value
   *
   * @return {Instance} Calculator instance
   */
  add(value) {
    this[VALUE] += value;
    return this;
  }

  /**
   * subtract by value
   *
   * @return {Instance} Calculator instance
   */
  subtract(value) {
    this[VALUE] -= value;
    return this;
  }

  /**
   * reset value by initialValue
   *
   * @return {Instance} Calculator instance
   */
  get value() {
    return this[VALUE];
  }
}

module.exports = Calculator;
