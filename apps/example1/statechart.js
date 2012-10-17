Example1.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('Example1.ReadyState'),

});