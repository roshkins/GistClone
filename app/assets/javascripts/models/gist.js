GistApp.Models.Gist = Backbone.Model.extend({
	url: "/gists/",
	parse: function (response) {
		response.favorites = new GistApp.Models.Favorite(response.favorites[0]);
		response.gist_files =
		new GistApp.Collections.GistFiles(response.gist_files);
		return response;
	},

	toJSON: function () {
		this.set({favorites: undefined});
		return _.clone(this.attributes);
	}


});
