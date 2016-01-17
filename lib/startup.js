Meteor.startup (function () {
  if (Meteor.isClient) {
    /* original code */
      // Session.set('curtainLoaded', false);

      // Template.layout.rendered = function () {
      //   imagesLoaded( '.curtain', function(){
      //     Session.set('curtainLoaded', true);
      //   });
      // };

      // Template.layout.helpers ({
      //   'curtainLoaded': function () {
      //     return Session.get('curtainLoaded');
      //   },
      // });

    /* New Code Sept 29, 2015 */
      
  }

  if (Meteor.isServer) {
    // no-www
    WebApp.connectHandlers.use(function(req, res, next) {
      var is_https = req.headers['x-forwarded-proto'] === "https";

      console.log(moment().format());
      console.log('encrypted:', is_https);
      //console.log('headers:', req.headers);
      console.log(req.headers.host);
      console.log(req.url);
      // console.log(req);
      // console.log(res);

      /* Check if request is for non-www address */
      var host = req.headers.host.split('.');

      if(host[0].toLowerCase() == 'www') {
        
        var protocole = 'http://';
        if (is_https)
          protocole = 'https://';

        correctURL = protocole+host.splice(1,2).join('.')+req.url;

        console.log('->',correctURL);
        res.writeHead(301, {
          'Content-Type': 'text/html; charset=UTF-8',
          'Location': correctURL
        });
        res.end("Moved to: " + correctURL);
        return;
      }
      
      next();
    });
  }
});