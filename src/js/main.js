(function(window){
  $(function(){
    var $templates = $('template');

    $templates.each(function(index, tpl){
      var $tpl = $(tpl),
          _tpl = _.template($tpl.html());

      _.times($tpl.data('repeat'), function(col){
        $tpl.parent().append(_tpl({ "col": col +1 }));
      });
    }); // END $templates.each
  }); // END document.ready
})(window);

(function(window){
  $(function(){
    $('.tabs')
      .on('click', 'a[href^="#"]', function(event){
        event.preventDefault();

        $(this).add(this.hash).trigger('activate');
      })
      .on('activate', 'li', function(event){
        $(this)
          .addClass('active')
        .siblings()
          .removeClass('active');
      })
    .children('li:first')
      .trigger('activate');

    $('.panel')
      .on('activate', function(event){
        $(this)
          .addClass('active')
        .siblings()
          .removeClass('active');
      })
    .first()
      .trigger('activate');
  });
})(window);
