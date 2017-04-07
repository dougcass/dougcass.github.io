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
    $('.hamburger').on('click', this.navbarHandler);
    $('.navbar-collapse').on('click', this.navbarCollapseHandler);
  },

  navbarHandler: function(){ 
    $('.navbar-collapse').toggle();

  },

  navbarCollapseHandler: function(){ 
    $('.navbar-collapse').toggle();

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

  








