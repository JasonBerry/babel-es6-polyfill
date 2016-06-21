/**
 * Promise.prototype.finally
 *
 * Pulled from https://github.com/domenic/promises-unwrapping/issues/18#issuecomment-57801572
 * @author @stefanpenner, @matthew-andrews
 */

(function() {
    var local;
    if (typeof global !== 'undefined') local = global;
    else if (typeof window !== 'undefined' && window.document) local = window;
    else local = self;
    // It's replaced unconditionally to preserve the expected behavior
    // in programs even if there's ever a native finally.
    
    local.Promise = require('core-js/es6/promise');

    local.Promise.prototype['finally'] = function finallyPolyfill(callback) {
        var constructor = this.constructor;

        return this.then(function(value) {
            return constructor.resolve(callback()).then(function() {
                return value;
            });
        }, function(reason) {
            return constructor.resolve(callback()).then(function() {
                throw reason;
            });
        });
    };

    // Alias "finally" as "fin" so that ES3 parsers (IE8) doesn't blow up with "reversed keyword".
    Promise.prototype.fin = Promise.prototype['finally'];
}());
