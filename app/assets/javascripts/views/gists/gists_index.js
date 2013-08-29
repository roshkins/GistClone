GistApp.Views.GistsIndex = Backbone.View.extend({

  template: JST['gists/index'],

	render: function () {
		var content = this.template({gists: this.collection});
		this.$el.html(content);
		return this;
	}

});
