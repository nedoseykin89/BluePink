(function() {
    'use strict';
    $(function() {
    
        $('[data-toggle="popover"]').popover({
          trigger: 'focus'
        }); 
      })
      function isVisible (el) {
        let top = $(el).offset().top + 0;
        return top < ($(window).scrollTop() + $(window).height());
    }

    function animate(){
    $('.animate').each((index, el) => {
        if (isVisible(el)) {
            $(el).addClass('animated')
                .addClass($(el).attr('data-animation'))
                .removeClass('animate');

        }
        
    })
}

animate();
$(window).on('scroll', () => {
    animate();
})
})();