GistApp.Views.GistDetail = Backbone.View.extend({
	template: JST["gists/show"],

	render: function () {
		var content = this.template({gist: this.model});
		this.$el.html(content);
		return this;
	}

});