var $ = window.$;

var controller = {
  init: function(){
    this.render();
  },
  render: function(){
    this.createEventHandlers();
  },
  createEventHandlers: function(){
    $('a[href^="#"]').on('click', this.scrollToHandler);
    
  },
    
  scrollToHandler: function(event) {
      var target = $(this.getAttribute('href'));

      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
      }
  }
  
  
 
 
   
};

  






module.exports = controller;

  








