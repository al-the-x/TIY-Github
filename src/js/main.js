;(function(window){
  var app = angular.module('TIY-Github', [ ]);

  app.controller('MainController', function($http){
    var self = this;

    this.user = {
      name: 'David L Rogers',
      login: 'al-the-x',
      company: 'The Iron Yard'
    };

  }); // END controller(MainController)

  // Inside the magic of `ng-controller`...
  // var MainController = app.controller('MainController');
  //
  // var app = new MainController({
  //   el: // whatever ng-controller is an attribute of
  //   data: // whatever is attached to `this` inside MainController
  // }); // new Vue({ el: ..., data: ... })
})(window);
