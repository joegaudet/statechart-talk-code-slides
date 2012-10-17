Example2.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('Example2.ReadyState'),
  // someOtherState: SC.State.plugin('Example2.SomeOtherState')

});