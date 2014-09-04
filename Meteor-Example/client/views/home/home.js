/*****************************************************************************/
/* Home: Event Handlers and Helpers */
/*****************************************************************************/
Template.Home.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  "click #PressMeButton": function(event, template) {

    console.log('pressed');
    Meteor.call('/app/test_method','hehehehe',function(error,result){
      console.log(JSON.stringify(result));
      Session.set('testValue',JSON.stringify(result));
    });


  }
});

Template.Home.helpers({
  testValue: function () {
    return Session.get('testValue');
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {

  Session.set('testValue','untested');

};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
