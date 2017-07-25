'use strict';
const isExistQuerySelector = require('../lib/isExistQuerySelector');
const assert = require('chai').assert;

suite('isExistQuerySelector', () => {
  setup(() => {
    fixture.load('isExistQuerySelector.html');
    document.innerHTML = fixture.el;
  });

  suite('checking ID', () => {
    test('該当要素が存在するとき、trueを返すこと', () => {
      assert.isTrue(isExistQuerySelector(document, '#hoge'));
    });

    test('該当要素が存在しないとき、falseを返すこと', () => {
      assert.isFalse(isExistQuerySelector(document, '#fuga'));
    });
  });

  suite('checking classNames', () => {
    suite('single class', () => {
      test('should return true when present', () => {
        assert.isTrue(isExistQuerySelector(document, '.hoge'));
      });

      test('should return false when not present', () => {
        assert.isFalse(isExistQuerySelector(document, '.thisIsNotElement'));
      });
    });
    suite('multiple selectors / css selectors', () => {
      test('複数条件を満たすとき、trueを返すこと', () => {
        assert.isTrue(isExistQuerySelector(document, '.hoge.fuga'), 'multiple class');
        assert.isTrue(isExistQuerySelector(document, '#list.list'), 'multiple selectors');
        assert.isTrue(isExistQuerySelector(document, '.list .foo'), 'descendant selection by class');
        assert.isTrue(isExistQuerySelector(document, '#list .fuga'), 'descendant selector with id');
      });

      test('複数条件を満たさないとき、falseを返すこと', () => {
        assert.isFalse(isExistQuerySelector(document, '.thisIsNotElement.foo'), 'multiple class');
        assert.isFalse(isExistQuerySelector(document, '#list.foobar'), 'multiple selectors');
        assert.isFalse(isExistQuerySelector(document, '.list .foobar'), 'descendant selection by class');
        assert.isFalse(isExistQuerySelector(document, '#list .foobar'), 'descendant selection by class and id');
      });
    });
  });

  suite('executing callback / fallback', () => {
    const callback = sinon.spy();
    const fallback = sinon.spy();

    teardown(() => {
      callback.reset();
    });

    test('該当要素が存在するとき、callbackが実行されること', () => {
      isExistQuerySelector(document, '#hoge', callback, fallback);
      assert.isTrue(callback.calledOnce);
      assert.isTrue(fallback.notCalled), 'fallbackは実行されないこと';
    });

    test('該当要素が存在しないとき、fallbackが実行されること', () => {
      isExistQuerySelector(document, '#foobar', callback, fallback);
      assert.isTrue(callback.notCalled, 'callbackは実行されないこと');
      assert.isTrue(fallback.calledOnce);
    });
  });

  suite('invalid arguments handling', () => {
    test('queryStringがstringではないとき、Errorを投げること', () => {
      assert.throws(() => isExistQuerySelector(document, 90), Error);
      assert.throws(() => isExistQuerySelector(document, {}), Error);
      assert.throws(() => isExistQuerySelector(document, []), Error);
      assert.doesNotThrow(() => isExistQuerySelector(document, 'hoge'), Error);
    });

    test('rootElementがDOMelementでないときTypeErrorを投げること', () => {
      assert.throws(() => isExistQuerySelector({}, '#hoge'), TypeError);
    });
  });

  teardown(() => {
    document.innerHTML = '';
  })
});
