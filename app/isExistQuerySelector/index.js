const regex = {
  id: /^#([\w-]+)$/,
  className: /^\.([\w-]+)$/,
};

/**
 * check an element fit given selector
 *
 * @param {HTMLElement} rootElement The element to be checked
 * @param {string} selector the selector you want to find
 * @return {boolean} is selector exist in rootElement
 */

function __isExistQuerySelector(rootElement, selector) {
  // if id
  if (regex.id.test(selector)) {
    return rootElement.getElementById(regex.id.exec(selector)[1]) !== null;
  }
  //
  // if single class
  if (regex.className.test(selector)) {
    return rootElement.getElementsByClassName(regex.className.exec(selector)[1]).length > 0;
  }

  return rootElement.querySelectorAll(selector).length > 0;
}

/**
 * check an element fit given selector
 *
 * @param {HTMLElement} rootElement document, body, or element.
 * @param {string} selector css selector
 * @param {function} callback a function called if it passed
 * @param {function} fallback a function called if it failed
 * @return {boolean|any}
 */
function isExistQuerySelector(rootElement, selector, callback, fallback) {
  if (arguments.length > 2)  {
    if (__isExistQuerySelector(rootElement, selector)) {
      if (typeof callback === 'function') {
        return callback();
      }
    } else {
      if (typeof fallback === 'function') {
        return fallback();
      }
    }
  }
  if (arguments.length === 2) {
    return __isExistQuerySelector(rootElement, selector);
  }
}

module.exports = isExistQuerySelector;
