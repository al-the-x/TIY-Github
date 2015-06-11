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
      var nameTpl = _.template($('.profile-name').html());

      console.log(nameTpl({ 'user': user }));

      $('.profile-name').html(nameTpl({ 'user': user }));
    })
})(window);
