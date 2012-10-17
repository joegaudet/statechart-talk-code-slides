Example3.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('Example3.ReadyState'),
  // someOtherState: SC.State.plugin('Example3.SomeOtherState')

});