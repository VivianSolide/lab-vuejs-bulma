Vue.component('bulma-message', {
  template: `
  <article class="message" v-show="isVisible">
    <div class="message-header">
      <p>{{ header }}</p>
      <slot>Default name here</slot>
      <button class="delete" aria-label="delete" @click="isVisible = false"></button>
    </div>
    <div class="message-body">
      {{ body }}
      <slot>Lorem ipsum dolor sit amet</slot>
    </div>
  </article>
  `,

  data() {
    return {
      isVisible: true
    };
  },

  props: {
    header: String,
    body: String
  }

});

var vm = new Vue({
  el: "#app",
});

