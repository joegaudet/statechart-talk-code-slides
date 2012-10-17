Example3.MessageState = SC.State.extend({
	next: '',
	say: '',
	title: '',

	enterState: function(context){
	  this._updateController();
  	  SC.routes.set('location', this.get('say'));
	},

	enterStateByRoute: function(context){
	  this._updateController();
	},

	_updateController: function(){
	  Example3.messageController.set('say', this.get('say'));
  	  Example3.messageController.set('title', this.get('title'));	
	},

	speak: function(){
		console.log("Speak!");
		this.gotoState(this.get('next'));
	}
});