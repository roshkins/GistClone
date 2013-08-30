GistApp.Models.Gist = Backbone.Model.extend({
	url: "/gists/",
	parse: function (response) {
			response.favorites = new GistApp.Models.Favorite(response.favorites[0]);

		return response;
	},

	toJSON: function () {
		// obj.set({favorites: undefined});
		this.set({favorites: undefined});
		return _.clone(this.attributes);
	}


});
