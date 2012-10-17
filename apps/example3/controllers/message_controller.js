// ==========================================================================
// Project:   Example3.messageController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example3 */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Example3.messageController = SC.ObjectController.create(
/** @scope Example3.messageController.prototype */ {
	title: 'Say Foo',

	say: "Hello World",

	message: function(){
		return "Message: " + this.get('say');
	}.property('say')

}) ;
