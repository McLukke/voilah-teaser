Template.registerHelper('loggedIn', function () {
  if ( Meteor.userId() ) {
    return true;
  }
  return false;
});

Template.registerHelper('RNG', function () {
  var randNumber = Math.random();

  if (randNumber < 0.5) {
    return true;
  } else {
    return false;
  }
});