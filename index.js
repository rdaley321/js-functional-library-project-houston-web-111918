fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let index in collection) {
        callback(collection[index]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let newArray = []
      for (let index in collection) {
        newArray.push(callback(collection[index]));
      }
      return newArray;
    },

    reduce: function(collection, callback, acc = 0) {
      for (var i in collection) {
        acc = callback(acc, collection[i], collection)
      };
      return acc;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
