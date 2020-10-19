<template>
  <div v-if="page" class="home base-grid">
    <div class="home__image full-width">
      <img :src="page.image" alt="">
    </div>

    <div class="home__title full-width base-grid">
      <div class="home__title__wrapper content-width">
        <h2
          v-if="page.subtitle"
          class="home__title__subtitle text--headline frame-bl" 
          v-html="page.subtitle">
        </h2>
        <h1
          v-if="page.title"
          class="text--headline frame-br"
          v-html="page.title">
        </h1>
      </div>
    </div>

    <div class="home__description full-width base-grid">
      <div class="home__description_wrapper content-width">
        <div class="rendered-content" v-html="page.content"></div>
        <Tag 
          class="home__description__link" 
          content="Mehr über uns" 
          url="/ueber" 
          dark
        />
      </div>
    </div>

    <Overview show="3" />

    <Blackboard :entrys="page.blackboard" />

    <div class="home__socialmedia content-width">
      <SocialLink type="facebook" dark />
      <SocialLink type="instagram" dark />
      <SocialLink type="youtube" dark />
    </div>

    <div class="home__help full-width base-grid">
      <div class="home__help__image full-width"></div>
      <div class="home__help__wrapper content-width">
        <h1 class="frame-br">Freibier?!</h1>
        <div class="home__help__content">
          <p class="frame-bl"><strong>... gibts bei uns nur hinter der Theke (und Kasse).</strong><br />
          Wir suchen immer fleißige Freiwillige, die mit uns den Laden schmeißen!</p>
        </div>
        <div class="home__help__bottom content-width">
        <Tag 
            class="home__help__link" 
            content="Helfer werden" 
            url="/helfen" 
            dark
          />
      </div>
      </div>
    </div>

  </div>
</template>

<script>
import utils from '@/utils/index'
import Overview from '@/components/Overview'
import Tag from '@/components/Tag'
import Blackboard from '@/components/Blackboard'
import SocialLink from '@/components/SocialLink'

export default {
  name: 'Home',
  components: {
    Overview,
    Tag,
    Blackboard,
    SocialLink
  },
  data() {
    return {
      page: null
    }
  },
  methods: {
    getContent: function (slug) {
      this.$store.commit('isLoading', true);
      utils.get.content('pages?slug=' + slug)
      .then(res => this.page = utils.get.home(res[0]))
      .then(this.$store.commit('isLoading', false))
    }
  },
  mounted: function () {
    this.getContent('startseite');
  }
}
</script>

<style lang="scss">
  .home {
    &__image {
      min-height: 50px;
      height: calc(100vh - 200px);
      z-index: -1;

      img {
        height: calc(100vh - 200px);
        width: 100%;
        object-fit: cover;
      }
    }

    &__title {
      position: relative;
      background-color: $black;

      &__wrapper {
        transform: translateY(-50%);

        h2 {
          position: absolute;
          display: inline-block;
          padding: 12px;
          margin-top: -100px;
          right: 30px;
          background-color: $white;
          text-decoration: none;

          h1 {
            line-height: 1.5rem;
          }

          &::before {
            background-color: $white;
          }
        }

        h1 {
          padding: 12px;
          display: inline-block;
          background-color: $white;

          &::before {
            background-color: $white;
          }
        }
      }
    }

    &__description {
      background-color: $black;
      color: $white;
      padding-bottom: 40px;

      .rendered-content {
        margin-bottom: 20px;
      }

      &__link {
        margin-left: 30px;
      }
    }

    &__socialmedia {
      position: relative;
      height: 100px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 30px 0;
    }

    &__help {
      &__image {
        height: 500px;
        background: url(../assets/images/abdera-helfen.jpg) no-repeat;
        background-size: auto 100%;
        background-position: right;
        z-index: -1;
      }

      &__wrapper {
        h1 {
          display: inline-block;
          padding: 12px 20px;
          transform: translateY(-450px);

          &::before {
            background-color: $white;
          }
        }
      }

      &__content {
        margin-top: -150px;
        padding: 0 30px;

        p {
          padding: 30px;

          strong {
            display: inline-block;
            margin-bottom: 10px;
          }

          &::before {
            background-color: $white;
          }
        }
      }

      &__bottom {
        padding: 0 60px;
        margin: 20px 0 30px 0;
      }
    }
  }
</style>