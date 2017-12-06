<template>
  <div @click.self="finishEditAll" id="app">
    <section class="todo">
      <header class="todo__header">
        <p class="todo__day">{{currentDay}}</p>
        <div class="todo__container">
          <p class="todo__month">{{currentMonth | toUpperCase}}</p>
          <p class="todo__year">{{currentYear}}</p>
        </div>
        <p class="todo__dayname">{{currentDayName | toUpperCase}}</p>
      </header>
      <div class="todo__list">
        <ul class="container" v-dragula="colOne" bag="first-bag">
            <li v-for="(todo, index) in todos" :class="{ 'is--disabled': todo.check }" :key="index">
              <input @keyup.enter="finishEdit(todo)" @blur="finishEdit(todo)" v-if="todo.edit" type="text" :id="index" v-model="todo.name"
                :placeholder="todo.name" maxlength="25">
              <span v-else @click="editTodo(todo)" class="todo__name">{{todo.name}}</span>
              <label @click="changeIcon(todo, index)" :for="index">
                <img :src="todo.src">
              </label>
              <input :id="index" v-model="todo.check" type="checkbox">
            </li>
        </ul>
      </div>
      <footer :class="{'is--active': inputActive}">
        <transition name="fade">
          <input v-model="newTodo" @keyup.enter="pushNewTodo" v-if="inputActive" class="todo__input" type="text" placeholder="add new action and press ENTER...">
        </transition>
        <div @click="addNewTodo" class="todo__button todo--pulse">+</div>
      </footer>
    </section>

  </div>
</template>

<script>
  export default {
    name: "ToDo",
    data() {
      return {
        msg: "",
        currentDay: "",
        currentMonth: "",
        currentYear: "",
        currentDayName: "",
        inputActive: false,
        newTodo: "",
        todos: [{
            name: "Buy new sweatshirt",
            check: true,
            src: 'src/assets/checked.png',
            edit: false
          },
          {
            name: "Begin promotional phase",
            check: true,
            src: 'src/assets/checked.png',
            edit: false
          },
          {
            name: "Read an article",
            check: false,
            src: 'src/assets/unchecked.png',
            edit: false
          },
          {
            name: "Try not to fall asleep",
            check: false,
            src: 'src/assets/unchecked.png',
            edit: false
          },
          {
            name: "Watch 'Sherlock'",
            check: false,
            src: 'src/assets/unchecked.png',
            edit: false
          },
          {
            name: "Begin QA for the product",
            check: false,
            src: 'src/assets/unchecked.png',
            edit: false
          },
          {
            name: "Go for a walk",
            check: false,
            src: 'src/assets/unchecked.png',
            edit: false
          }
        ]
      }
    },
    created() {
      this.currentDay = moment().format("D");
      this.currentMonth = moment().format("MMM");
      this.currentYear = moment().format("YYYY");
      this.currentDayName = moment().format("dddd");      
    },
    methods: {
      changeIcon(todo) {
        if (todo.check === true) {
          todo.src = "src/assets/unchecked.png";
          todo.check != todo.check;
        } else {
          todo.src = "src/assets/checked.png";
          todo.check != todo.check;
        }
      },
      editTodo(todo) {
        if (todo.edit === false) {
          todo.edit = true;
        }
      },
      finishEdit(todo) {
        todo.edit = false;
      },
      addNewTodo() {
        this.inputActive = true;
      },
      finishEditAll() {
        this.todos.forEach(function (todo) {
          todo.edit = false;
        })
      },
      pushNewTodo() {
        this.todos.push({
          name: this.newTodo,
          check: false,
          src: 'src/assets/unchecked.png',
          edit: false
        });
        this.newTodo = "";
        this.inputActive = false;
      }
    },
    filters: {
      toUpperCase: function (data) {
        return data.toString().toUpperCase();
      }
    }
  }

</script>

<style lang="scss">

  // Table of contents
  // 1. Variables
  // 2. Font Faces
  // 3. Base
  // 4. Layout
  // 5. Block + element
  // 6. Modifier
  // 7. State
  // 8. Animations
  // 9. Media Queries
 
  // Variables
  $backgroud_color: #f0efe9;
  $todo_background: #ffffff;
  $header_font_color: #616473;
  $list_font_disabled: #bec1cb;
  $list_font_active: #6c7079;
  $button_background: #50e3a4;
  $button_icon: #46be8b;
  $list_icon: #50e3a4; 
  
  // Fonts
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700'); 
  
  // Base 
  html {
    font-size: 62.5%;
    font-family: 'Montserrat';
  } 

  body {
    background: $backgroud_color;
  }

  p {
    margin: 0;
    padding: 0;
  }

  li {
    font-size: 2.5rem;
    list-style: none;
    margin-bottom: 5.6rem;
    color: $list_font_active;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  ul {
    padding: 0 5.6rem;
  }

  footer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    vertical-align: middle;
  }

  label {
    width: 40px;
    margin-left: auto;
    cursor: pointer;
  }

  input {
    outline: transparent;
  }

  input[type="checkbox"] {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    margin-right: -20000px;
  }

  input[type="text"] {
    display: block;
    height: 50px;
    line-height: 50px;
    width: 85%;
    color: $list_font_disabled;
    border: 1px solid $list_font_disabled;
    transition: all .3s;
    font-size: 2.5rem;
  } 
  
  // Layout
  
  // Block + element
  .todo {

    width: 516px;
    margin: 0 auto 100px auto;
    background-color: $todo_background;

    &__header {
      display: flex;
      color: $header_font_color;
      padding: 5rem 5.6rem;
    }

    &__container {
      padding: 1rem 0 0 1rem;
      font-size: 2rem;
      line-height: 2rem;
    }

    &__day {
      font-size: 5rem;
      font-weight: 700;
    }

    &__dayname {
      margin-left: auto;
      padding: .5rem 0 0 .4rem;
      font-size: 2rem;
      line-height: 5rem;
      font-weight: 700;
    }

    &__name {
      outline: 1px solid transparent;
    }

    &__button {
      text-align: center;
      font-size: 5.6rem;
      line-height: 100px;
      color: $button_icon;
      width: 100px;
      height: 100px;
      margin-bottom: -40px;
      background: $button_background;
      border-radius: 50%;
      box-shadow: 0 2px 4px $list_font_disabled;
      cursor: pointer;
      z-index: 33;
    }

    &__input {
      margin: 0 align-self;
      width: 100%;
      margin-bottom: 25px;
      border-radius: 7px;
      color: $list_font_disabled;
      padding-left: 6px;
      text-align: center;
    }

  } 
  
  // Modifier
  .todo--pulse {
    animation: pulse 1s ease infinite;
  }
  
   // State 
  .is--disabled {
    color: $list_font_disabled;
  }

  .is--active {
    height: 150px;
  }

  .todo__name:hover {
    display: block;
    height: 50px;
    line-height: 50px;
    width: 85%;
    outline: 1px solid $list_font_disabled;
    transition: all .3s;
  }

  .todo__name:hover::after {
    content: "✎";
    color: $list_font_disabled;
    font-size: 2rem;
  } 
  
  //  Animations
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(0);
}

.fade-enter-to, .fade-leave {
  transform: translateX(-100px);
}

  @-webkit-keyframes pulse {

    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.09, 1.09, 1.09);
    }

    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

  }

  @keyframes pulse {
    
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.09, 1.09, 1.09);
    }

    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

  }

</style>

