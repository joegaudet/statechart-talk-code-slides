Example2.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Example2.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Example2.getPath('mainPage.mainPane').remove();
  },

  speak: function(){
  	this.gotoState('FOO_STATE');
  },

  FOO_STATE: SC.State.extend({
  	enterState: function(){
  	  Example2.messageController.set('say', 'Foo');
  	  Example2.messageController.set('title', 'Say Bar');
  	},

  	speak: function(){
  	  this.gotoState('BAR_STATE');
  	}
  }),

  BAR_STATE: SC.State.extend({
	enterState: function(){
  	  Example2.messageController.set('say', 'Bar');
  	  Example2.messageController.set('title', 'Say Baz');
  	},

  	speak: function(){ 
  	  this.gotoState('BAZ_STATE');
  	}
  }),

  BAZ_STATE: SC.State.extend({
	enterState: function(){
	  Example2.messageController.set('say', 'Baz');
  	  Example2.messageController.set('title', 'Say Foo');
  	},

  	speak: function(){
  	  this.gotoState('FOO_STATE');
  	}
  })
});

