(function(window){
  $(function(){
    var $tpl = $('template#tpl-grid'),
        _tpl = _.template($tpl.html());

    _.times(12, function(col){
      $tpl.parent().append(_tpl({ 'col': col+1 }));
    });
  }); // END document.ready
})(window);
