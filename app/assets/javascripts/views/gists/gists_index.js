GistApp.Views.GistsIndex = Backbone.View.extend({


	initialize: function () {
		// this.el = $("#content")[0];
		// console.log(this.$el);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "remove", this.render);
	},

  template: JST['gists/index'],

	render: function () {
		var content = this.template({gists: this.collection});
		this.$el.html(content);
		return this;
	}

});
