GistApp.Models.Gist = Backbone.Model.extend({

	parse: function (response) {
		if (response.favorites[0]){
			response.favorites = new GistApp.Models.Favorite(response.favorites[0]);
		} else {
			response.favorites = undefined;
		}
		return response;
	},

	toJSON: function (obj) {
		obj.favorites = undefined;
		return obj;
	}


});
