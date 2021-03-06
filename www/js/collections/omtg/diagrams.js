(function() {
	'use strict';

	// OMTGDiagrams Collection
	// ----------
	
	app.omtg.Diagrams = Backbone.Collection.extend({
		model : app.omtg.Diagram,
		
		initialize: function() {	       
	        this.listenTo(this, 'change:selected', this.propagate_selected);
	    },
	    
	    propagate_selected: function(p) {
//	    	console.log("propagate");
	    	
	    	if(!p.get('selected'))
	            return;
	        this.each(function(m) {
	            if(p.id != m.id)
	                m.set({ selected: false }, { silent: false });
	        });
	    },
	    
	    unselectAll: function(){
//	    	console.log("unselectal");
	    	this.each(function(m) {
	    		m.set({ selected: false }, { silent: false });
	    	});
	    },
		
	    get : function(id, attr) {			
			var diagram = this.findWhere({id : id});
			if(diagram)
				return diagram.get(attr);			
			return null;
		},
		
		findByName : function(name) {
			var ds = this.where({name : name});
			for(var i=0; i<ds.length; i++){
				if(!ds[i].get('deleted'))
					return ds[i];
			}
			return null;
		},
		
		toXML: function() {
		
			var xml = "";
			this.each(function(model) {
	    		if(!model.get('deleted'))
	    			xml += model.toXML();
	    	});
			return "<classes>" + xml + "</classes>";
		},
	});

})();
	