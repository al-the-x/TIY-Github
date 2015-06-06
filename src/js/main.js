(function(window) {

  function hello() {

  };

  window.github = { // Revealing Module Pattern
    // publicName: privateNames   --> Map public names to private names
    // protects your functions, vars, etc should someone create another function with the same name in a different IIFE
    // if someone creates another module with the same name, then problems (aka github in this example)
    "hello": hello
  }; // End Revealing Module Pattern

})(window);
