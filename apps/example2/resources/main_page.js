// ==========================================================================
// Project:   Example2 - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example2 */

// This page describes the main user interface for your application.  
Example2.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'speakButton message'.w(),
    
    message: SC.LabelView.design({
      layout: {
        centerX: 70,
        centerY: 0,
        width: 100,
        height: 18
      },
      valueBinding: 'Example2.messageController.message'
    }),

    speakButton: SC.ButtonView.design({
      titleBinding: 'Example2.messageController.title',
      action: 'speak',
      layout: {
        width: 100,
        height: 24,
        centerX: -70,
        centerY: 0
      }
    }),    
  })

});
