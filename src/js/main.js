;(function(window){
  var $name = $('.profile-name big'),
      $username = $('.profile-name small');

  $.getJSON('/api/github/users/al-the-x.json')
    /**
     * Replacing placeholders with data from...?
     *
     * @param user
     * @return ???
     */
    .then(function(user){


      $name.text(user.name);
      $username.text(user.login);
    })
})(window);
