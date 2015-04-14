Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('openingSlides', {
    data: function () { 
      // return Items.findOne({_id: this.params._id}); 
    }
  });
});
