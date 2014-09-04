TestCollection = new Meteor.Collection ('test_collection', {
  'schema': new SimpleSchema ({

    testValue1: {
      type: String
    },
    testValue2: {
      type: String,
      optional:true
    }

  })
});

/*
 * Add query methods like this:
 *  TestCollection.findPublic = function () {
 *    return TestCollection.find({is_public: true});
 *  }
 */
