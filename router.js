// Router.map(function () {
//   this.route('home', {
//     path: '/',
//     template: 'slide1',
//     layoutTemplate: 'layout',
//     yieldTemplate: {
//       'openingSlide': {to: 'aside'}
//     }
//   });
// });

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('openingSlide', {to: 'opener'});
  if ( Session.get('currentSlide') === 1 ) {
    this.render('slide1');
  } else if ( Session.get('currentSlide') === 2 ) {
    this.render('slide2');
  } else if ( Session.get('currentSlide') === 3 ) {
    this.render('slide3');
  } else if ( Session.get('currentSlide') === 4 ){
    this.render('slide4');
  } else {
    this.render('slide1');
  }
});
