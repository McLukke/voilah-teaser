Router.configure({
  layoutTemplate: 'layout',
  // Session.set('curtainLoaded', false);
  //loadingTemplate: 'loading'
});

// BEFORE HOOKS
// var BeforeHooks = {
//   imgLoad: function (pause) {
//     if ( imagesLoaded($('.curtain')).elements === null ) {
//       console.log('images NOT loaded yet');
      
//     } else {
//       console.log('images loaded');
//       this.next();
//     }
//   }
// }

// GLOBAL HOOKS
//Router.onBeforeAction(BeforeHooks.imgLoad);

Router.route('/', function () {
  if (Session.equals('curtainLoaded', false))
  {
    this.render('loading');
  }
  else
  {
    this.render('openingSlide');
  }
  
});
