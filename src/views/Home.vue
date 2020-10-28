<template>
  <div v-if="page" class="home">
    <div class="home__wrapper base-grid">
      <div class="home__image full">
        <img :src="page.image" alt="">
      </div>

      <div class="home__title full base-grid">
        <div class="home__title__wrapper content">
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

      <div class="home__description full base-grid">
        <div class="home__description_wrapper content">
          <div class="rendered-content rendered-content--tight rendered-content--onBlack" v-html="page.content"></div>
          <Tag 
            class="home__description__link" 
            content="Mehr über uns" 
            url="/ueber" 
            dark
          />
        </div>
      </div>
    </div>

      <Overview show="3" />

    <div class="home__wrapper base-grid">
      <Blackboard :entrys="page.blackboard" />

      <div class="home__socialmedia content">
        <SocialLink type="facebook" dark />
        <SocialLink type="instagram" dark />
        <SocialLink type="youtube" dark />
      </div>
    </div>
    <div class="home__wrapper base-grid">
      <div class="home__help full base-grid">
        <div class="home__help__image full"></div>
        <div class="home__help__wrapper content medium-right">
          <h1 class="frame-br">Freibier?!</h1>
          <div class="home__help__content">
            <p class="frame-bl">
              <strong>... gibts bei uns nur hinter der Theke (und Kasse).</strong><br />
              Wir suchen immer fleißige Freiwillige, die mit uns den Laden schmeißen!<br />
                <span class="home__help__button">
                  <Tag 
                      class="home__help__link" 
                      content="Helfer werden" 
                      url="/helfen" 
                      dark
                    />
                </span>
            </p>
          </div>
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
      .then(res => this.page = utils.map.home(res[0]))
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
      background-color: var(--black);

      &__wrapper {
        transform: translateY(-50%);

        h2 {
          position: absolute;
          display: inline-block;
          padding: 12px;
          margin-top: -100px;
          left: 150px;
          background-color: var(--white);
          text-decoration: none;

          &::before {
            background-color: var(--white);
          }
        }

        h1 {
          padding: 12px;
          display: inline-block;
          background-color: var(--white);

          &::before {
            background-color: var(--white);
          }
        }
      }
    }

    &__description {
      background-color: var(--black);
      padding-bottom: var(--containerSpacingHeight);

      .rendered-content {
        margin-bottom: 20px;
      }

      &__link {
        margin-left: var(--textSpacingWidth);
      }
    }

    &__socialmedia {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: var(--containerSpacingHeight) var(--contentSpacingWidth) ;
    }

    &__help {
      &__image {
        height: 500px;
        background: url(../assets/images/abdera-helfen.jpg) no-repeat;
        background-size: cover;
        background-position: right;
        z-index: -1;

        @include breakpoint('medium') {
          height: 860px;
        }
      }

      &__wrapper {
        h1 {
          position: absolute;
          display: inline-block;
          padding: 12px 20px;
          transform: translateY(-450px);
          
          @include breakpoint('medium') {
            transform: translate(-50%, -400px);
          }

          &::before {
            background-color: var(--white);
          }
        }
      }

      &__content {
        margin-top: -150px;
        padding: 0 var(--contentSpacingWidth);

        @include breakpoint('medium') {
          margin-top: -300px;
          padding: 0;
        }

        p {
          padding: 30px var(--contentSpacingWidth);

          strong {
            display: inline-block;
            margin-bottom: 10px;
          }

          &::before {
            background-color: var(--white);
          }
        }
      }

      &__button {
        display: inline-block;
        margin-top: 20px;
      }
    }
  }
</style>