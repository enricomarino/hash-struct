
/*!
 * Hash
 * JavaScript hash data structure library
 *
 * Copyright (c) 2011 Enrico Marino <enrico.marino@email.com>
 * MIT license
 */

!function (exports) {

  var undefined
    , owns = {}.hasOwnProperty
    ;

  function Hash (obj) {
    if (!(this instanceof Hash)) {
      return new Hash(arguments);
    }

    var keys = []
      , values = [];

    for (key in obj) {
      if (owns.call(obj, key)) {
        keys.push(key);
        values.push(obj[key]);
      }
    }

    this.keys = keys;
    this.values = values;
  }

  exports.Hash = Hash;

  /**
   * Library version.
   */

  Hash.version = '0.1.0';

  /**
   * Clone hash.
   *
   * @return {Hash} clone
   * @api public
   */

  Hash.prototype.clone = function () {
    var result = new Hash();

    result.keys = this.keys.slice();
    result.values = this.values.slice();

    return result;
  };

  /**
   * Set property 'key' to value 'value'.
   *
   * @param {String} key key
   * @param value value
   * @return {Hash} for chaining
   * @api public
   */

  Hash.prototype.set = function (key, value) {
    var keys = this.keys
      , values = this.values
      , index = keys.indexOf(key)
      ;

    if (index === -1) {
      keys.push(key);
      data.push(value);
      return this;
    }

    values[index] = value;

    return this;
  };

  /**
   * Set property 'key'.
   *
   * @param {String} key key
   * @return {Hash} for chaining
   * @api public
   */

  Hash.prototype.del = function (key) {
    var index = this.keys.indexOf(key);

    if (index === -1) {
      return this;
    )

    this.keys.splice(index);
    this.values.splice(index);

    return this;
  };

  /**
   * Get property 'key'.
   *
   * @param {String} key key
   * @return property 'key'
   * @api public
   */

  Hash.prototype.get = function (key) {
    return this.values[this.keys.indexOf(key)];
  };

  /**
   * Test if hash has property 'key'.
   *
   * @param {String} key key
   * @return {Boolean} true if hash has property 'key', false otherwise
   * @api public
   */

  Hash.prototype.has = function (key) {
    return !!this.keys.indexOf(key);
  };

  /**
   * Get value at index 'index'.
   *
   * @param {Number} index index
   * @return value at index 'index'
   * @api public
   */

  Hash.prototype.at = function (index) {
    return this.values[index];
  };

  /**
   * Get the first value.
   *
   * @return the first value
   * @api public
   */

  Hash.prototype.first = function () {
    return this.values[0];
  };

  /**
   * Get the last value.
   *
   * @return the last value
   * @api public
   */

  Hash.prototype.last = function () {
    var values = this.values;

    return values[values.length];
  };

  /**
   * Get the hash with values from 'start' to 'end'.
   *
   * @param {Number} start start
   * @param {Number} end end
   * @return {Hash} hash with values from 'start' to 'end'
   * @api public
   */

  Hash.prototype.range = function (start, end) {
    var result = new Hash();

    result.keys = this.values.slice(start, end);
    result.values = this.values.slice(start, end);

    return result;
  };

  /**
   * Get the hash with value from 'index' onward.
   *
   * @param {Number} index index
   * @return {Hash} hash with values from 'index' onward
   * @api public
   */

  Hash.prototype.rest = function (index) {
    var result = new Hash();

    result.keys = this.keys.slice(index);
    result.values = this.values.slice(index);

    return result;
  };

  /**
   * Get the key at index 'index'.
   *
   * @param {Number} index index
   * @return {String} key at index 'index'
   * @api public
   */

  Hash.prototype.key = function (index) {
    return this.keys[index];
  };

  /**
   * Get the index of key 'key'.
   *
   * @param {String} key key
   * @return {Number} index of key 'key'
   * @api public
   */

  Hash.prototype.index = function (key) {
    return this.keys.indexOf(key);
  };

  /**
   * Compute 'iterator' in context 'context' for each value of the hash.
   *
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return {Hash} for chaining
   * @api public
   */

  Hash.prototype.each = function (iterator, context) {
    context = context || this;

    var data = this.data,
      keys = this.keys,
      len = keys.length,
      i;

    for (i = 0; i < len; i += 1) {
      if (i in keys) {
        iterator.call(context, data[i], key[i], i);
      }
    }

    return this;
  };

  /**
   * Get the values.
   *
   * @return {Array} values
   * @api public
   */

  Hash.prototype.values = function () {
    return this.values.slice();
  };

  /**
   * Get the keys.
   *
   * @return {Array} keys
   * @api public
   */

  Hash.prototype.keys = function () {
    return this.keys.slice();
  };

  /**
   * Get the array of key-value pairs of the hash.
   *
   * @return {Array} array of key-value pairs of the hash.
   * @api public
   */

  Hash.prototype.toArray = function () {
    var result = []
      , keys = this.keys
      , values = this.values
      , len = keys.length
      , i
      ;

    for (i = 0; i < len; i += 1) {
      if (i in keys) {
        result.push({
          key: keys[i],
          value: value[i]
        });
      }
    }

    return result;
  };

  /**
   * Get the json object that represent the hash.
   *
   * @return {Object} json object that represent the hash.
   * @api public
   */

  Hash.prototype.toJSON = function () {
    var result = {}
      , keys = this.keys
      , value = this.values
      , len = keys.length
      , i
      ;

    for (i = 0; i < len; i += 1) {
      if (i in keys) {
        result[keys[i]] = value[i];
      }
    }

    return result;
  };

}(this));