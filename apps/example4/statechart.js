Example4.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('Example4.ReadyState'),
  // someOtherState: SC.State.plugin('Example4.SomeOtherState')

});