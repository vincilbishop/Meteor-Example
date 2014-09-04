/*****************************************************************************/
/* TestMethod Methods */
/*****************************************************************************/

Meteor.methods ({
  '/app/test_method': function (testValue) {

    console.log('request testValue: ' + JSON.stringify(testValue));

    var testItem = TestCollection.findOne({testValue1:'test1'});

    return testItem;

  }
});
