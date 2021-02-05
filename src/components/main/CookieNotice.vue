<template>
  <div v-if="cookieSet" class="cookie-notice base-grid" :class="{'cookie-notice__dark' : dark}">
    <div class="cookie-notice__wrapper content">
      <p>Wir nutzen Cookies und Google Analytics um zu erfahren, wie viele Leute unsere Website besuchen und welche Inhalte sie am Interessantesten finden. Weitere Informationen hierzu findest du in unserer <a href="/datenschutz">Datenschutzerklärung</a>. 
      <br><br><strong>Ist es ok für dich, dass wir aus diesem Grund Cookies setzen?</strong>
      </p>
      <div class="cookie-notice__button-container">
        <Tag
          @click.native="cookieAccepted()"
          content="Yeah … Cookies!"
          icon="&check;"
          dark />
        <span class="cookie-notice__denial transition" @click="cookieDenied()">Nein, ich mag keine Cookies</span>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/Tag'
import utils from '@/utils/index'

export default {
  name: 'CookieNotice',
  components: {
    Tag
  },
  props: {
    dark: Boolean
  },
  data () {
    return {
      cookie: null
    }
  },
  computed: {
    cookieSet: function () {
      return !this.$store.state.isCookieSet;
    }
  },
  methods: {
    cookieAccepted: function () {
      utils.cookie.set('cookie-acceptance', '1', 7);
      this.$store.commit('cookieIsSet');
      this.$ga.enable();
    },
    cookieDenied: function () {
      utils.cookie.set('cookie-acceptance', '0', 1);
      this.$store.commit('cookieIsSet');
      this.$ga.disable();
    }
  },
  created () {
    this.cookie = utils.cookie.get('cookie-acceptance');

    if (this.cookie) {
      this.$store.commit('cookieIsSet');
    }
  }
}
</script>

<style lang="scss">
.cookie-notice {
  position: sticky;
  bottom: 0;
  width: 100%;
  height: auto;
  background-color: var(--black);
  border-top: 2px solid var(--white);

  * {
    color: var(--white);
  }

  p {
    margin-bottom: var(--paddingSmall);
  }

  a {
    text-decoration: underline;
  }

  &__wrapper {
    padding: var(--paddingSmall);
    margin: 0 auto;
  }

  &__button-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @include breakpoint('medium') {
      flex-direction: row;
      align-items: center;
    }
  }

  &__denial {
    @include font('caption');
    color: var(--white);
    margin-top: 20px;
    cursor: pointer;

    @include breakpoint('medium') {
      margin: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>