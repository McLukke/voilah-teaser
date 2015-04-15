if (Meteor.isClient) {
  Template.layout.rendered = function () {
    //$('#mainChrome').addClass('darkUnderBorder');
    //$('#mainChrome').addClass('lightUpperBorder');
    Session.set('currentSlide', 1);
  };

  Template.openingSlide.rendered = function () {
    setTimeout(function () {
      $('#leftCurtain, #rightCurtain').addClass('opened');
    }, 800);
    
    setTimeout(function () {
      $('#leftCurtain, #rightCurtain').addClass('hidden');
    }, 4000);
  };


//   var slideInterval = 5000;
//   Template.slide1.rendered = function () {
//     // $(document.body).removeClass('lightBackground');
//     // $('#mainChrome').removeClass('darkUnderBorder');
//     // $('#mainChrome').removeClass('lightUpperBorder');
//     setTimeout(function () {
//       Session.set('currentSlide', 2);
//     }, slideInterval);
//   };

//   Template.slide2.rendered = function () {
//     // need this for delay
//     // $('#mainChrome').removeClass('noUnderBorder');
//     // $('#mainChrome').removeClass('noUnderBorder');
//     // $('#mainChrome').removeClass('noUnderBorder');
//     // // actual css
//     // $('#mainChrome').addClass('noUnderBorder');
//     // $(document.body).addClass('lightBackground');
//     setTimeout(function () {
//       Session.set('currentSlide', 3);
//     }, slideInterval);
//   };

//   Template.slide3.rendered = function () {
// //     $(document.body).removeClass('lightBackground');
// //     $('#mainChrome').removeClass('noUnderBorder');
// //     $('#mainChrome').removeClass('noUnderBorder');
// // // need bigger delay
// //     $(document.body).addClass('customBackground');
//     setTimeout(function () {
//       Session.set('currentSlide', 4);
//     }, slideInterval);
//   };

//   Template.slide4.rendered = function () {
//     // $(document.body).removeClass('customBackground');
//     // $('#mainChrome').removeClass('noUnderBorder');
//     // $('#mainChrome').removeClass('noUnderBorder');

//     // $(document.body).addClass('noBackground');
//     setTimeout(function () {
//       Session.set('currentSlide', 5);
//     }, slideInterval);
//   };

//   Template.slide5.rendered = function () {
//     // $(document.body).removeClass('noBackground');
//     // $('#mainChrome').removeClass('noUnderBorder');
//     // $('#mainChrome').removeClass('noUnderBorder');

//     // $(document.body).addClass('lightBackground');
//     // $('#mainChrome').addClass('darkUnderBorder');
//     // $('#mainChrome').addClass('lightUpperBorder');
//     setTimeout(function () {
//       //Session.set('currentSlide', 1);
//     }, slideInterval);
//   };
}

if (Meteor.isServer) {

}
