Vue.component('bulma-message', {
  template: `
  <article class="message" v-show="isVisible">
    <div class="message-header">
      <p>{{ header }}</p>
      <button class="delete" aria-label="delete" @click="isVisible = false"></button>
    </div>
    <div class="message-body">
      {{ body }}
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

Vue.component('b-button', {
  template: `
  <button class="button is-primary is-medium">{{ country }}</button>
  `,

  props: {
    country: String
  }

});

Vue.component('b-modal', {
  template: `
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
  `,

  data() {
    return {
      isModalActive: false
    };
  },

  props: {
    country: String,
    capital: String
  }

});

var vm = new Vue({
  el: "#app",
});

