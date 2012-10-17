// ==========================================================================
// Project:   Example1 - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example1 */

// This page describes the main user interface for your application.  
Example1.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
	  childViews: 'button1 button2 button3 message'.w(),
	  
	  message: SC.LabelView.design({
	  	layout: {
	  		centerX: 70,
	  		centerY: 0,
	  		width: 100,
	  		height: 18
	  	},
	  	valueBinding: 'Example1.messageController.message'

	  }),

	  button1: SC.ButtonView.design({
		  title: 'Say Foo',
		  action: 'sayFoo',
		  layout: {
			  width: 100,
			  height: 24,
			  centerX: -70,
			  centerY: -30
		  }
	  }),
	  
	  button2: SC.ButtonView.design({
		  title: 'Say Bar',
		  action: 'sayBar',
		  layout: {
			  width: 100,
			  height: 24,
			  centerX: -70,
			  centerY: 0
		  }	  	
	  }),
	  
	  button3: SC.ButtonView.design({
		  title: 'Say Baz',
		  action: 'sayBaz',
		  layout: {
			  width: 100,
			  height: 24,
			  centerX: -70,
			  centerY: 30
		  }	  	
	  })
  })
});
