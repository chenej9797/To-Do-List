webpackJsonp([1],{"N/rO":function(t,o){},NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("7+uW"),i={name:"app",data:function(){return{todos:[{content:"drink coffee",completed:!1}],newTodo:"",todos_done:[]}},methods:{addTodo:function(t){this.todos.push({content:t,completed:!1}),this.newTodo=""},removeTodo:function(t){this.todos.splice(this.todos.indexOf(t),1)},removeTodo_done:function(t){this.todos_done.splice(this.todos.indexOf(t),1)},completedTodo:function(t){0==t.completed?(this.todos.splice(this.todos.indexOf(t),1),this.todos_done.push(t),t.completed=!0,console.log(t.completed)):(this.todos_done.splice(this.todos_done.indexOf(t),1),this.todos.push(t),t.completed=!1,console.log(t.completed))},uncompletedTodo:function(t){0==t.completed&&(this.todos.splice(this.todos.indexOf(t),1),this.todos_done.push(t),t.completed=!0,console.log(t.completed))}}},n={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("div",{staticClass:"list-board"},[e("div",{staticClass:"paper",attrs:{id:"app"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"input-box",attrs:{type:"text",autofocus:""},domProps:{value:t.newTodo},on:{keyup:function(o){if(!("button"in o)&&t._k(o.keyCode,"enter",13,o.key))return null;t.addTodo(t.newTodo)},input:function(o){o.target.composing||(t.newTodo=o.target.value)}}}),t._v(" "),e("div",{staticClass:"list"},[e("ul",{staticClass:"list-ul"},t._l(t.todos,function(o){return e("li",{staticClass:"todo-item"},[e("span",{staticClass:"toggle",on:{click:function(e){t.completedTodo(o)}}}),t._v(" "),e("span",{staticClass:"todo-text"},[t._v(t._s(o.content))]),t._v(" "),e("span",{staticClass:"delete-icon"},[e("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.removeTodo(o)}}},[e("i",{staticClass:"fa fa-trash-o fa-lg"})])])])})),t._v(" "),e("ul",{staticClass:"list-ul"},t._l(t.todos_done,function(o){return e("li",{staticClass:"done-item"},[e("span",{staticClass:"toggle",on:{click:function(e){t.completedTodo(o)}}},[e("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("span",{staticClass:"todo-text",staticStyle:{"text-decoration":"line-through",color:"#AB8988"}},[t._v(t._s(o.content))]),t._v(" "),e("a",{staticClass:"delete-icon",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.removeTodo_done(o)}}},[e("i",{staticClass:"fa fa-trash-o fa-lg"})])])}))]),t._v(" "),t._m(0,!1,!1)]),t._v(" "),t._m(1,!1,!1),t._v(" "),e("div",{staticClass:"note"})]),t._v(" "),t._m(2,!1,!1)])},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"buttons"},[o("div",{staticClass:"delete"})])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"clip"},[o("div",{staticClass:"clip-gray"}),this._v(" "),o("div",{staticClass:"gray-line"})])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"pencil"},[o("div",{staticClass:"top"}),this._v(" "),o("div",{staticClass:"bottom"})])}]},a=e("VU/8")(i,n,!1,function(t){e("N/rO")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:a}})}},["NHnr"]);
//# sourceMappingURL=app.976e6442896a1ed66fbb.js.map