GistApp.Views.GistDetail = Backbone.View.extend({
	template: JST["gists/show"],

	events: {
		"click .unfavorite": "favorite",
		"click .favorite": "unfavorite"
	},

	render: function () {
		var favorited =
			!!this.model.get("favorites");
			debugger
		var content = this.template({gist: this.model,
			 favorited: favorited});
		this.$el.html(content);
		return this;
	},

	favorite: function (event) {
		console.log("attempting favorite...");
		var gist_id = parseInt(event.currentTarget.id.match(/favorite_(\d+)/)[1]);
		this.model.set({favorites: new GistApp.Models.Favorite()});
		this.model.get("favorites").save({
			gist_id: gist_id,
			user_id: GistApp.CurrentUser.id
		}, {success: function () {
			console.log("favorited!");
			$(".favorite").toggleClass("favorite").toggleClass("unfavorite");
		},
		error: function () {
			console.log("error favoriting!");
		}
	});
	},

	unfavorite: function (event) {
			this.model.get("favorites").destroy({success: function () {
				$(".unfavorite").toggleClass("favorite").toggleClass("unfavorite");
				console.log("unfavorited!");
			}}, {wait: true});
	}



});