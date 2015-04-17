if (Meteor.isClient) {
  Meteor.startup(function () {
    Session.set('curtainLoaded', false);
  });



  Template.MailChimpListSubscribe.rendered = function () {
    $('.email').attr('placeholder','E-Mail Address');
    $('.subscribe').text('Submit');
    // $('.email').addClass('col-xs-12');
    // $('.subscribe').addClass('col-xs-12');
  };

  Template.MailChimpListSubscribe.helpers ({
    'submit .subscribe': function (e) {
      e.preventDefault();

      console.log('hello');
    }
  });




Template.openingSlide.rendered = function () {
  setTimeout(function () {
    $('#leftCurtain, #rightCurtain').addClass('opened');
  }, 800);
  
  setTimeout(function () {
    $('#leftCurtain, #rightCurtain').addClass('hidden');
  }, 4000);
};

Template.layout.rendered = function () {
  console.log('layout rendered');
  //$('#mainChrome').addClass('darkUnderBorder');
  //$('#mainChrome').addClass('lightUpperBorder');
  // Session.set('currentSlide', 1);

  imagesLoaded( '.curtain', function(){
    console.log('image loaded');
    Session.set('curtainLoaded', true);
  });
};

Template.layout.helpers ({
  'curtainLoaded': function () {
    return Session.get('curtainLoaded');
  },
});






  var slideInterval = 5000;
  Template.slideContent.rendered = function () {
    setTimeout(function () {
      $('#slide2').addClass('enabled');
      $('#mainChrome').addClass('noUnderBorder');
      $('.bottomContent').addClass('enabled');
      $('.voilahLogo').addClass('enabled');
    }, slideInterval);

    setTimeout(function () {
      $('#slide3').addClass('enabled');
    }, slideInterval*2);

    setTimeout(function () {
      $('#slide4').addClass('enabled');
    }, slideInterval*3);

    setTimeout(function () {
      $('#slide5').addClass('enabled');
      $('#mainChrome').removeClass('noUnderBorder');
      $('#mainChrome').addClass('darkUnderBorder');
      // $('#mainChrome').addClass('lightUpperBorder');
    }, slideInterval*4);
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
