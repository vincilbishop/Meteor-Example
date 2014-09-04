/**
 * Created by vincilbishop on 9/3/14.
 */

Meteor.startup(function(){

  var testItem = {};
  testItem.testValue1 = 'test1';

  TestCollection.insert(testItem);

});