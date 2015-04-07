(function() {
  "use strict";

  var TodoList = function() {};

  $.extend(TodoList.prototype, CapeJS.Component.prototype, {
    render: function() {
      var self = this,
          b = new CapeJS.VdomBuilder(this);
      return b.markup(function(b) {
        b.p('Hello World!');
      })
    }
  })

  var todo = new TodoList();
  todo.mount('todo-list');
})();

