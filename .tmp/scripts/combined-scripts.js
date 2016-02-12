(function() {

var Todos = window.Todos = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

Todos.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

Todos.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});


})();

(function() {

Todos.Router.map(function() {
//  this.resource('todos', { path: '/' });
});


})();