(function() {

var EmberDemo = window.EmberDemo = Ember.Application.create();

/* Order and include as you please. */


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