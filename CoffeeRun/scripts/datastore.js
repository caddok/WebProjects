(function(window) {
  "use strict";

  let App = window.App || {};
  let Promise = window.Promise;

  function DataStore() {
    this.data = {};
  }

  function promiseResolvedWith(value) {
    var promise = new Promise(function(resolve, reject) {
      resolve(value);
    });
    return promise;
  }

  DataStore.prototype.add = function(key, value) {
    return promiseResolvedWith(null);
  };

  DataStore.prototype.get = function(key) {
    return promiseResolvedWith(this.data[key]);
  };

  DataStore.prototype.getAll = function() {
    return promiseResolvedWith(this.data);
  };

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
    return promiseResolvedWith(null);
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
