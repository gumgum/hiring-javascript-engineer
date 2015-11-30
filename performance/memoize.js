var results = {};
module.exports = function (fn) {
    return function (param) {
        return results[param] || (results[param] = fn.call(this, param));
    };
};
