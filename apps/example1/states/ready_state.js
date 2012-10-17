Example1.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Example1.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Example1.getPath('mainPage.mainPane').remove();
  },
  
  sayFoo: function(){
  	Example1.messageController.set('say', 'Foo');
  },

  sayBar: function(){
  	Example1.messageController.set('say', 'Bar');
  },

  sayBaz: function(){
  	Example1.messageController.set('say', 'Baz');
  }

});

