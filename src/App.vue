<template>
  <div class="container">
  <div class="list-board">
    <div id="app" class="paper">
      <input class="input-box" type="text" autofocus v-model="newTodo" v-on:keyup.enter="addTodo(newTodo)"/>
      <div class="list">
        <ul class="list-ul">
          <li v-for="todo in todos" class="todo-item">
            <span class="toggle" v-on:click="completedTodo(todo)"></span>
            <span class="todo-text">{{todo.content}}</span>
            <span class="delete-icon"><a href="#" @click.prevent="removeTodo(todo)"><i class="fa fa-trash-o fa-lg"></i></a></span>
          </li>
        </ul>
        <ul class="list-ul">
          <li v-for="todo_done in todos_done" class="done-item">
            <span class="toggle" v-on:click="completedTodo(todo_done)"><i class="fa fa-check" aria-hidden="true"></i></span>
            <span class="todo-text" style="text-decoration:line-through; color:#AB8988;">{{todo_done.content}}</span>
            <a href="#" @click.prevent="removeTodo_done(todo_done)" class="delete-icon"><i class="fa fa-trash-o fa-lg"></i></a>
          </li>
        </ul>
      </div>
      <div class="buttons">
        <div class="delete"></div>
      </div>
    </div>
    <div class="clip">
      <div class="clip-gray"></div>
      <div class="gray-line"></div>
    </div>
    <div class="note"></div>
  </div>
  <div class="pencil">
    <div class="top"></div>
    <div class="bottom"></div>
  </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      todos:[{content:'drink coffee',completed:false}],
      newTodo:'',
      todos_done:[]
    }
  },
  methods:{
    addTodo(todoItem) {
      this.todos.push({content:todoItem,completed:false});
      this.newTodo='';
    },
    removeTodo(todoItem){
      this.todos.splice(this.todos.indexOf(todoItem), 1);
    },
    removeTodo_done(doneItem){
      this.todos_done.splice(this.todos.indexOf(doneItem), 1);
    },
    completedTodo(doneItem) {
      if (doneItem.completed == false) {
      this.todos.splice(this.todos.indexOf(doneItem), 1);
      this.todos_done.push(doneItem);
      doneItem.completed = true;
      console.log(doneItem.completed);
      } else {
        this.todos_done.splice(this.todos_done.indexOf(doneItem), 1);
        this.todos.push(doneItem);
        doneItem.completed = false;
        console.log(doneItem.completed);
      }
    },
    uncompletedTodo(doneItem) {
      if (doneItem.completed == false) {
      this.todos.splice(this.todos.indexOf(doneItem), 1);
      this.todos_done.push(doneItem);
      doneItem.completed = true;
      console.log(doneItem.completed);
      } 
    }
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Gochi+Hand); //font-family: 'Gochi Hand', cursive;
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css); //font-family: 'Noto Sans TC', sans-serif;
$bgc: #4a9278;
$paper: #e5e3d1;
$white: #f3f1e7;
$pink: #d28070;
$brown: #50140d;
$silver: #dcdcdd;
$gray: #b4b5b5;
$yellow: #dfa35a;

html,
body {
  background-color: $bgc;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.container {
  position: relative;
  width: 500px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .list-board {
    position: absolute;
    width: 64%;
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    background: $pink;
    box-shadow: 3px 3px 0 rgba($brown, 0.3);
    .paper {
      font-family: 'Gochi Hand', 'Noto Sans TC';
      position: absolute;
      background: $paper;
      width: 86%;
      height: 80%;
      left: 7%;
      top: 5%;
      box-shadow: 2px 2px 0 rgba($brown, 0.3);
      .input-box {
        position: absolute;
        width: 66%;
        height: 5%;
        left: 16%;
        top: 7%;
        border-color: transparent;
        background: $white;
        color:$brown;
        font-family: 'Gochi Hand', 'Noto Sans TC';
        &:focus {
          outline: none;
        }
      }
      .list {
        position: absolute;
        width: 80%;
        height: 70%;
        left: 10%;
        top: 18%;
        transition:.3s;
        .list-ul {
          width: 100%;
          display:block;
          list-style:none;
        }
      }
    }
  }
  .clip {
    position: absolute;
    width: 34%;
    height: 6.7%;
    border-radius: 6px;
    background: $silver;
    left: 33%;
    top: -0.5%;
    &:before {
      position: absolute;
      content: "";
      width: 70%;
      height: 100%;
      border-radius: 6px;
      background: $silver;
      top: -70%;
      left: 15%;
      z-index: -1;
    }
    &:after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      border: 14px solid black;
      border-color: $brown transparent transparent $brown;
      right: -28px;
      bottom: 0px;
      opacity: 0.3;
    }
    .clip-gray {
      position: absolute;
      width: 100%;
      height: 30%;
      background: $gray;
      bottom: 0;
      box-shadow: 0 1.5px 0.1px rgba(black, 0.35);
    }
    .gray-line {
      position: absolute;
      width: 50%;
      height: 7%;
      left: 25%;
      top: -50%;
      border-radius: 4px;
      background: $gray;
      z-index: 2;
      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 4px;
        background: $gray;
        top: 250%;
      }
      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 4px;
        background: $gray;
        top: 500%;
      }
    }
  }
  .note {
    position: absolute;
    width: 25%;
    height: 5%;
    top: 9%;
    left: -8%;
    background: rgba($yellow, 0.5);
    transform: rotate(-8deg);
    &:before {
      position: absolute;
      content: "";
      width: 25%;
      height: 100%;
      background: rgba($yellow, 0.4);
      right: 0;
      box-shadow: 0.5px 0.5px rgba($brown, 0.2);
    }
    &:after {
      position: absolute;
      content: "";
      top: 20%;
      left: 4%;
    }
  }
  .pencil {
    position: absolute;
    width: 3%;
    height: 35%;
    top: 30%;
    right: 6%;
    background: $yellow;
    transform: rotate(-10deg);
    .top {
      position: absolute;
      width: 0;
      height: 0;
      top: -22.5px;
      border-style: solid;
      border-width: 8px 8px 15px 8px;
      border-color: transparent transparent $white transparent;
      &:before {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        top: -5px;
        left: -3.4px;
        border-style: solid;
        border-width: 3px 3px 6px 3px;
        border-color: transparent transparent $brown transparent;
      }
    }
    .bottom {
      position: absolute;
      width: 100%;
      height: 10%;
      border-radius: 5px;
      background: $pink;
      bottom: -10%;
      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 40%;
        background: $paper;
      }
    }
  }
}

.toggle {
  cursor: pointer;
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius:3px;
  left:10px;
  border: 2.5px solid $yellow;
  transition:.3s;
  i {
    position:absolute;
    font-size:1em;
    color: $yellow;
    top:-4px;
  }
}
.todo-text {
  color: $brown;
  font-size:1.2em;
  transition:.3s;
}
.todo-item, .done-item{
  transition:.5s;
  display:flex;
  align-items:center;
  height:22px;
  &:hover {
    .delete-icon {
      opacity: 1;
    }
  }
}
.delete-icon {
  position: absolute;
  right: 10px;
  opacity: 0;
  transition:.3s;
  i {
    position: absolute;
    font-size: 1.3em;
    color:$pink;
    right: 5px;
    top: -7px;
  }
}

</style>
