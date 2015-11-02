Projects = new Mongo.Collection("projects");

Router.route('/', function() {
	this.render('Index'/*, {data, projects and whatever}*/);
})
 
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    Projects: function () {
      return Projects.find({});
    }
  });
}
