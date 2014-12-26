//var tools = relationsTools;

var ToolboxesView = Backbone.View.extend({
	el: $('#section-sidebar'),

	render: function() {
	    this.$el.empty();
	
	    this.model.each(function( toolbox ){	    	
	    	var toolboxView = new ToolboxView({model : toolbox});
	    	this.$el.append(toolboxView.render().el);
	    }, this);
	    
	    
	}
});