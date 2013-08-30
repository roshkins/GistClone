GistApp.Views.GistDetail = Backbone.View.extend({
	template: JST["gists/show"],

	events: {
		"click .unfavorite": "favorite",
		"click .favorite": "unfavorite"
	},

	render: function () {
		var favorited =
			!!this.model.get("favorites").id;
		var content = this.template({gist: this.model,
			 favorited: favorited});
		this.$el.html(content);
		return this;
	},

	favorite: function (event) {
		console.log("attempting favorite...");
		var gist_id = parseInt(event.currentTarget.id.match(/favorite_(\d+)/)[1]);
		console.log("gist id:" + gist_id);
		this.model.set({favorites: new GistApp.Models.Favorite()});
		this.model.get("favorites").save({
			gist_id: gist_id,
			user_id: GistApp.CurrentUser.id
		}, {success: function () {
			console.log("favorited!");
			$(event.currentTarget).toggleClass("favorite").toggleClass("unfavorite");
		},
		error: function () {
			console.log("error favoriting!");
		}
	});
	},

	unfavorite: function (event) {
		var that = this;
		console.log(event.currentTarget.id);
		var myFav = this.model.get("favorites");
			myFav.destroy({success: function () {
				$(event.currentTarget).toggleClass("favorite").toggleClass("unfavorite");
				console.log("unfavorited!");
				that.model.set({favorites: new GistApp.Models.Favorite()})
			}});
	}



});