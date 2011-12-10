
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

  Hash.version = '0.0.1';

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

}(this));