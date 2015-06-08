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
