Example3.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Example3.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Example3.getPath('mainPage.mainPane').remove();
  },

  speak: function(){
  	this.gotoState('FOO_STATE');
  },

  FOO_STATE: Example3.MessageState.extend({
  	representRoute: 'Foo',
  	say: 'Foo',
  	title: 'Say Bar',
  	next: 'BAR_STATE'
  }),

  BAR_STATE: Example3.MessageState.extend({
  	representRoute: 'Bar',
  	say: 'Bar',
  	title: 'Say Baz',
  	next: 'BAZ_STATE'
  }),

  BAZ_STATE: Example3.MessageState.extend({
  	representRoute: 'Baz',
  	say: 'Baz',
  	title: 'Say Foo',
  	next: 'FOO_STATE'
  })

});

