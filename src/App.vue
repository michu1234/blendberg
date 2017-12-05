<template>
  <div id="app">
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
        <ul>
          <li v-for="(todo, index) in todos" :class="{ 'is--disabled': todo.check }" :key="index"><span class="todo__name">{{todo.name}}</span>
            <label @click="changeIcon(todo, index)" :for="index">
              <img :src="todo.src">
            </label>
            <input :id="index" v-model="todo.check" type="checkbox">
          </li>
        </ul>
      </div>
      <footer>
        <div class="todo__button todo--pulse">+</div>
      </footer>
    </section>







  </div>
</template>

<script>
  export default {
    name: "ToDo",
    currentDay: "",
    currentMonth: "",
    currentYear: "",
    currentDayName: "",
    data() {
      return {
        msg: "",
        todos: [{
            name: "Buy new sweatshirt",
            check: true,
            src: 'src/assets/checked.png'
          },
          {
            name: "Begin promotional phase",
            check: true,
            src: 'src/assets/checked.png'
          },
          {
            name: "Read an article",
            check: false,
            src: 'src/assets/unchecked.png'
          },
          {
            name: "Try not to fall asleep",
            check: false,
            src: 'src/assets/unchecked.png'
          },
          {
            name: "Watch 'Sherlock'",
            check: false,
            src: 'src/assets/unchecked.png'
          },
          {
            name: "Begin QA for the product",
            check: false,
            src: 'src/assets/unchecked.png'
          },
          {
            name: "Go for a walk",
            check: false,
            src: 'src/assets/unchecked.png'
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
  // Font Faces
  // @font-face {
  //   font-family: Nunito-Regular;
  //   src: url('https://fonts.googleapis.com/css?family=Nunito');
  // }
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700'); // Base 
  html {
    font-size: 62.5%;
    font-family: 'Montserrat';
  } // Base
  body {
    background: $backgroud_color; // transform: scale(.8);
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
    height: 50px;
    display: flex;
    justify-content: center;
  }

  img {
    vertical-align: middle;
  }

  label {
    width: 40px;
    margin-left: auto;
    cursor: pointer;
  }

  input[type="checkbox"] {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    margin-right: -20000px;
  } // Layout
  // Block + element
  .todo {
    max-width: 516px;
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
      padding-top: .5rem;
      font-size: 2rem;
      line-height: 5rem;
      font-weight: 700;
    }
    &__button {
      text-align: center;
      font-size: 5.6rem;
      line-height: 100px;
      color: $button_icon;
      width: 100px;
      height: 100px;
      background: $button_background;
      border-radius: 50%;
      box-shadow: 0 2px 4px $list_font_disabled;
      cursor: pointer;
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

  .todo__name:hover {
    outline: 1px solid $list_font_disabled;
    padding: 1rem;
  }
  
  
   //  Animations
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

