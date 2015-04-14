Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('movingParts', {
    data: function () { 
      // return Items.findOne({_id: this.params._id}); 
    }
  });
});
