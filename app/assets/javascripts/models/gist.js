GistApp.Models.Gist = Backbone.Model.extend({

	parse: function (response) {
		response.favorites = new GistApp.Models.Favorite(response.favorites[0]);
		return response;
	},

	toJSON: function (obj) {
		obj.favorites = undefined;
		return obj;
	}


});
