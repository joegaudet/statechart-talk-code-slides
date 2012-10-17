// ==========================================================================
// Project:   Example3 - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example3 */

// This page describes the main user interface for your application.  
Example3.mainPage = SC.Page.design({

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
      valueBinding: 'Example3.messageController.message'
    }),

    speakButton: SC.ButtonView.design({
      titleBinding: 'Example3.messageController.title',
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
