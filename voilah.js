if (Meteor.isClient) {
  Meteor.startup(function () {
    Session.set('curtainLoaded', false);
  });

  Template.MailChimpListSubscribe.events ({
    'click .subscribe': function (e, t) {
      e.preventDefault();

      var email = t.find('.email').value;
      BootstrapModalPrompt.prompt ({
        title: "Congratulations!",
        content: "Your email \"" + email + "\" has been successfully added to our mailing list!"
      }, function(result) {
        if (result) {
          // User confirmed it, so go do something.
          email="";
          t.find('.email').value="";
        }
      });
    }
  });


  Template.MailChimpListSubscribe.helpers({
  message: function() {
    subscribeMessage = 'ffs';
    return subscribeMessage;
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
    imagesLoaded( '.curtain', function(){
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
      $('.email').attr('placeholder','E-Mail Address');
      $('.subscribe').text('Submit');
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

      $('#mainChrome').addClass('darkUpperBorder');
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
