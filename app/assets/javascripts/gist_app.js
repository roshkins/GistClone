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
				$rootEl = $("#detail");
				var gistsIndexView = new GistApp.Views.GistsIndex({collection: myGists});
				$('#content').html(gistsIndexView.render().$el);
				new GistApp.Routers.Gists(myGists, $rootEl);
				Backbone.history.start();
			}
	})

  }
};

$(document).ready(function(){
  GistApp.initialize();
});
