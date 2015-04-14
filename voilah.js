if (Meteor.isClient) {
  Template.layout.rendered = function () {
    //$('#mainChrome').addClass('isCream');
  };

  Template.movingParts.rendered = function () {
    $('#leftCurtain, #rightCurtain').addClass('opened');
  };
}

if (Meteor.isServer) {

}
