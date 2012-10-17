// ==========================================================================
// Project:   Example2.messageController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example2 */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Example2.messageController = SC.ObjectController.create(
/** @scope Example2.messageController.prototype */ {

	title: 'Say Foo',

	say: "Hello World",

	message: function(){
		return "Message: " + this.get('say');
	}.property('say'),


	// Pre statechart method is highly coupled to the view

	states: {
		SAY_FOO: 1,
		SAY_BAR: 2,
		SAY_BAZ: 3
	},

	currentState: 1,
	speak: function(){
		if(this.currentState === this.states.SAY_FOO){
			this.currentState = this.states.SAY_BAR;
			this.set('say', 'foo');
			this.set('title', 'Say Bar');
		}
		else if(this.currentState === this.states.SAY_BAR) {
			this.currentState = this.states.SAY_BAZ;
			this.set('say', 'bar');
			this.set('title', 'Say Baz');
		}
		else {
			this.currentState = this.states.SAY_FOO;
			this.set('say', 'baz');
			this.set('title', 'Say Foo');
		}
	}

}) ;
