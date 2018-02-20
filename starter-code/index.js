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

Vue.component('b-modal', {
  template: `
  <div>
  <button 
    class="button is-primary is-medium"
    @click="isModalActive=true"
  > {{ country }} </button>

  <div class="modal" :class="isModalActive ? 'is-active' : ''">
    <div class="modal-background"></div>
      <div class="modal-content">
        <h2 class="title is-3" style="color:white">{{ country }}</h2>
        <p class="strong" style="color:white">The capital of {{ country }} is {{ capital }}</p>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="isModalActive=false"></button>
    </div>
  </div>
  `,

  data() {
    return {
      isModalActive: false
    };
  },

  methods: {
    closeModal: function () {
      this.isModalActive = true;
    }
  },

  props: {
    country: String,
    capital: String,
    active: Boolean
  },

});

var vm = new Vue({
  el: "#app",
  data: {
    countries: [{
      name: 'France',
      capital: 'Paris'
    }, {
      name: 'Spain',
      capital: 'Madrid'
    }, {
      name: 'USA',
      capital: 'Washington D.C.'
    }
    ]
  }
});

