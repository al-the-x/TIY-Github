(function(window){
  $(function(){
    $('.tabs')
      /**
       * Event Listener:
       * - Listening for: `click` on `.tabs a[href^="#"]`
       * - What element: .tabs (parent of the parent of the `<a>`)
       * - What happens:
       */
      .on('click', 'a[href^="#"]', function(event){
        event.preventDefault(); // Browser: don't follow this link!

        $(this).add(this.hash).trigger('activate');

        // return false; // DO NOT DO!
        // Same as: event.preventDefault(); event.stopPropagation()
      })

      /**
       * Event Listener:
       * - What event: `activate` on `.tabs li`
       * - What element: `.tabs`
       * - What happens:
       */
      .on('activate', 'li', activator)

    /**
     * Activate the first `<li>` in `.tabs`...
     */
    .children('li:first')
      .trigger('activate');

    function activator(event){
      $(this) // `.tabs li` or `event.target`
        .addClass('active')
      .siblings()
        .removeClass('active');
    }

    $('.panel')
      /**
       * Event Listener
       * - What event: `activate` on `.panel`
       * - What element: `.panel`
       * - What happens:
       */
      .on('activate', activator)
    .first()
      .trigger('activate');
  });
})(window);
