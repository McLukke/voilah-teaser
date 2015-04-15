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


  var slideInterval = 5000;
  Template.slide1.rendered = function () {
    $('#mainChrome').addClass('noUnderBorder');
    setTimeout(function () {
      Session.set('currentSlide', 2);
    }, slideInterval);
  };

  Template.slide2.rendered = function () {
    $(document.body).addClass('customBackground');
    setTimeout(function () {
      Session.set('currentSlide', 3);
    }, slideInterval);
  };

  Template.slide3.rendered = function () {
    $(document.body).removeClass('customBackground');
    $(document.body).addClass('noBackground');
    setTimeout(function () {
      Session.set('currentSlide', 4);
    }, slideInterval);
  };

  Template.slide4.rendered = function () {
    $('#mainChrome').removeClass('noUnderBorder');
    $(document.body).removeClass('noBackground');
    $('#mainChrome').addClass('darkUnderBorder');
    $('#mainChrome').addClass('lightUpperBorder');
    setTimeout(function () {
      //Session.set('currentSlide', 1);
    }, slideInterval);
  };
}

if (Meteor.isServer) {

}
