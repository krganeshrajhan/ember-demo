(function() {

var EmberDemo = window.EmberDemo = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

EmberDemo.TodoController = Ember.ObjectController.extend({
  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});

})();

(function() {

EmberDemo.ApplicationController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  },

remaining: function() {
  return this.filterBy('isCompleted', false).get('length');
}.property('@each.isCompleted'),

inflection: function() {
  var remaining = this.get('remaining');
  return remaining === 1 ? 'item' : 'items';
}.property('remaining')
});

})();

(function() {

EmberDemo.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

EmberDemo.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

// ... additional lines truncated for brevity ...
EmberDemo.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: '...',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 }
];

})();

(function() {

EmberDemo.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    // model: function () {
    //     return ['red', 'yellow', 'blue'];
    // }
    model: function() {
    return this.store.find('todo');
  }
});

})();

(function() {

EmberDemo.Router.map(function () {
  // Add your routes here
});

// ... additional lines truncated for brevity ...
// EmberDemo.TodosRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('todo');
//   }
// });

})();