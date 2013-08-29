window.GistApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	CurrentUser: {},
  initialize: function() {
		var myGists = new GistApp.Collections.Gists();
		myGists.fetch({
			success: function () {
				new GistApp.Routers.Gists(myGists);
				Backbone.history.start();
			}
	})

  }
};

$(document).ready(function(){
  GistApp.initialize();
});
