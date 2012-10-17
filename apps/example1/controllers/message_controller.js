// ==========================================================================
// Project:   Example1.messageController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Example1 */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Example1.messageController = SC.ObjectController.create(
/** @scope Example1.messageController.prototype */ {

	say: "Hello World",

	message: function(){
		return "Message: " + this.get('say');
	}.property('say')

}) ;
