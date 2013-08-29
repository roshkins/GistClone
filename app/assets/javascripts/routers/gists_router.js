GistApp.Routers.Gists = Backbone.Router.extend({
	routes: {
		"": "gistsIndex",
		"gists/:id/show": "gistsShow"
	},

	initialize: function (gists) {
		this.gists = gists;
	},

	gistsIndex: function () {
		var gistsIndexView = new GistApp.Views.GistsIndex({collection: this.gists});
		$("#content").html(gistsIndexView.render().$el.html());
	},

	gistsShow: function (gist_id) {
		this.gistsIndex();
		var model = this.gists.get(gist_id);
		var gistDetailView = new GistApp.Views.GistDetail({model: model});
		$("#detail").html(gistDetailView.render().$el.html());
	}

});
