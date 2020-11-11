import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    isCookieSet: false,
    events: {
      content: [],
      count: 0,
      total: 0
    },
    pages: []
  },
  getters: {
    getEvent: (state) => (modifier) => {
      if (state.events) {
        let target;
        state.events.content.map((event) => {
          if (event.id == modifier ) {
            target = event;
          }
        });
        return target;
      } else {
        return false;
      }
    }
  },
  mutations: {
    setEvents: function(state, payload) {
      state.events.content = [...state.events.content, ...payload];
      state.events.count = state.events.count + payload.length;
    },
    setPages: function(state, payload) {
      state.pages.push(payload);
    },
    setTotalEvents: function(state, payload) {
      state.events.total = parseInt(payload);
    },
    cookieIsSet: function(state) {
      state.isCookieSet = true;
    },
    isLoading: function(state, payload) {
      state.loading = payload;
    }
  }
})
