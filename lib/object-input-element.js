var ObjectElement = require('object-element');
var supportProto = Object.getPrototypeOf({__proto__: null}) === null;

module.exports = ObjectInputElement;

function ObjectInputElement(element) {
  element = element || document.createElement('input');
  ObjectElement.call(this, element);
}

if (supportProto) {
  ObjectInputElement.prototype.__proto__ = ObjectElement.prototype;
} else {
  ObjectInputElement.prototype = Object.create(ObjectElement.prototype);
}

Object.defineProperty(ObjectElement.prototype, 'value', {
  get: function () {
    return this.element.value;
  },

  set: function (value) {
    this.element.value = value;
  }
});

Object.defineProperty(ObjectElement.prototype, 'tag', {
  get: function () {
    return 'input';
  }
});
