GistApp.Views.GistsForm = Backbone.View.extend({
	template: JST['gists/form'],
	events: {
		"submit #gist_form": "gistSubmit"
	},
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	gistSubmit: function (event) {
		event.preventDefault();
		var formDetails = $(event.currentTarget).serializeJSON();
		var newGist = new GistApp.Models.Gist(formDetails.gist);
		this.collection.create(newGist, {success: function () {
				console.log("saved gist.");
				Backbone.history.navigate("/");
			},
			wait: true
		});

	}

});