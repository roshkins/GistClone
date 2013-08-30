GistApp.Routers.Gists = Backbone.Router.extend({
	routes: {
		"gists/:id/show": "gistsShow",
		"gists/new": "gistsNew"
	},

	initialize: function (gists, $rootEl) {
		this.gists = gists;
		this.$rootEl = $rootEl;
	},

	gistsShow: function (gist_id) {
		// this.gistsIndex();
		var model = this.gists.get(gist_id);

		var gistDetailView = new GistApp.Views.GistDetail({model: model});
		$rootEl.html(gistDetailView.render().$el);
	},

	gistsNew: function () {
		// this.gistsIndex();
		var gistNewView = new GistApp.Views.GistsForm({collection: this.gists});
		$rootEl.html(gistNewView.render().$el);
	}


});
