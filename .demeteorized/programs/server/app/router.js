(function(){Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', function () {
  this.render('openingSlide', {to: 'opener'});
  // if ( Session.get('currentSlide') === 1 ) {
  //   this.render('slide1');
  // } else if ( Session.get('currentSlide') === 2 ) {
  //   this.render('slide2');
  // } else if ( Session.get('currentSlide') === 3 ) {
  //   this.render('slide3');
  // } else if ( Session.get('currentSlide') === 4 ){
  //   this.render('slide4');
  // } else if ( Session.get('currentSlide') === 5 ){
  //   this.render('slide5');
  // } else {
  //   this.render('slide1');
  // }
});

})();
