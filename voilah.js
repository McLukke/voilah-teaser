if (Meteor.isClient) {
  Template.layout.rendered = function () {
    //$('#mainChrome').addClass('isCream');
  };

  Template.openingSlides.rendered = function () {
    setTimeout(function () {
      $('#leftCurtain, #rightCurtain').addClass('opened');
    }, 800);
    
    setTimeout(function () {
      $('#leftCurtain, #rightCurtain').addClass('hidden');
    }, 4000);

  };
}

if (Meteor.isServer) {

}
