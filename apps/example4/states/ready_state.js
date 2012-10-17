Example4.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Example4.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Example4.getPath('mainPage.mainPane').remove();
  },


  STATE_A: SC.State.extend({

  	enterState: function(){
  		console.log("Entered STATE_A");
  		return this.performAsync('_someDelayedFunction');
  	},

  	_someDelayedFunction: function(){
  		this.invokeLater(function(){
  			this._resume();
  		}, 5000);
  	},

	_resume: function() {
		var statechart = this.get('statechart');
		if (statechart.get('gotoStateSuspended')) {
			statechart.resumeGotoState();
		}
	},

  	STATE_B: SC.State.extend({
	  	enterState: function(){
	  		console.log("Entered STATE_B");
	  	},

	  	STATE_C: SC.State.extend({
	  		representRoute: 'c',

			enterState: function(){
	  			console.log("Entered STATE_C");
	  			SC.routes.set('location', 'c');
	  		},

	  		enterStateByRoute: function(){
	  			console.log("Entered STATE_C byRoute")
	  		}

	  	})
  	})
  })
});

