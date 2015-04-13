(function(global) {
  "use strict";

  var DataAttribute = Cape.createComponentClass({
    render: function() {
      return this.markup(function(m) {
        m.h1('Hello!', { data: { hello: 'hello' } });
      });
    }
  });

  if ("process" in global) module.exports = DataAttribute;
  global.DataAttribute = DataAttribute;
})((this || 0).self || global);
