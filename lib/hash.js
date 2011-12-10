
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

}(this));