(function() {
  "use strict";

  var TodoList = function() {};

  $.extend(TodoList.prototype, CapeJS.Component.prototype, {
    render: function() {
      var self = this;
      return this.markup(function(b) {
        b.ul(function(b) {
          self.items.forEach(function(item) {
            self.renderItem(b, item);
          })
        })
      })
    },

    renderItem: function(b, item) {
      var self = this;
      b.li(function(b) {
        b.label({ class: { completed: item.done }}, function(b) {
          b.input({ type: 'checkbox', checked: item.done,
            onclick: function(e) { self.toggle(item) } });
          b.space().text(item.title);
        })
      })
    },

    init: function() {
      this.items = [
        { title: 'Foo', done: false },
        { title: 'Bar', done: true }
      ];
    },

    toggle: function(item) {
      item.done = !item.done;
      this.refresh();
    }
  });

  var todo = new TodoList();
  todo.mount('todo-list');
})();

