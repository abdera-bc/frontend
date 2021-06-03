<template>
  <div v-if="page" class="home">
    <div class="home__wrapper base-grid">
      <div class="home__image full">
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

        <img v-if="page.image" width="1280" height="768" :src="page.image" alt="Willkommen im Abdera" loading="lazy">
        <img v-else width="1280" height="768" src="@/assets/images/abdera-start.jpg" alt="Willkommen im Abdera" loading="lazy">
      </div>

      <div class="home__description full base-grid">
        <div class="home__description_wrapper content">
          <div class="rendered-content rendered-content--tight rendered-content--onBlack" v-html="page.content"></div>
          <Tag 
            class="home__description__link" 
            content="Mehr über uns" 
            url="/abbe" 
            dark
          />
        </div>
      </div>

      <Important 
        v-if="page.important.exists" 
        :content="page.important"
      />
    </div>
      
    <Overview show="3" />

    <div class="home__wrapper base-grid">
      <Blackboard v-if="page.blackboard" :entries="page.blackboard" />

      <div class="home__socialmedia content">
        <SocialLink type="facebook" dark />
        <SocialLink type="instagram" dark />
        <SocialLink type="youtube" dark />
      </div>
    </div>
    <div class="home__wrapper base-grid">
      <div class="home__help full base-grid">
        <div class="home__help__image full">
          <img width="1280" height="768" src="../assets/images/abdera-helfen.jpg" alt="Helfen im Abdera" loading="lazy">
        </div>
        <div class="home__help__wrapper content medium-right">
          <div class="home__help__title">
            <Headline title="Mach mit ..." frame="br"/>
          </div>
          <div class="home__help__content">
            <p class="frame-bl">
              <strong>... werde Helfer!</strong><br />
              Wir suchen immer fleißige Freiwillige, die mit uns den Laden schmeißen!<br />
                <span class="home__help__button">
                  <Tag 
                      class="home__help__link" 
                      content="Helfer werden" 
                      url="/mitmachen" 
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
import SocialLink from '@/components/SocialLink'
import Tag from '@/components/Tag'

import Overview from '@/components/home/Overview'
import Blackboard from '@/components/home/Blackboard'
import Important from '@/components/home/Important'
import Headline from '@/components/general/Headline'

export default {
  name: 'Home',
  components: {
    Overview,
    Tag,
    Blackboard,
    Important,
    Headline,
    SocialLink
  },
  data() {
    return {
      page: null
    }
  },
  computed: {
    important: function () {
      return this.page.important.title && this.page.important.content;
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
      width: auto;
      z-index: 1;

      img {
        height: calc(100vh - 200px);
        width: 100%;
        object-fit: cover;
        background-color: var(--black);
      }
    }

    &__title {
      position: sticky;
      top: 250px;
      height: 0;

      @include breakpoint('medium') {
        top: 350px;
      }
      
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

          @include breakpoint('medium') {
            @include font('title');
            margin-top: -150px;
            left: 250px;
          }

          &::before {
            background-color: var(--white);
          }
        }

        h1 {
          padding: 12px;
          display: inline-block;
          background-color: var(--white);

          @include breakpoint('medium') {
            @include font('title');
          }

          &::before {
            background-color: var(--white);
          }
        }
      }
    }

    &__description {
      position: relative;
      background-color: var(--black);
      padding-top: calc(var(--containerSpacingHeight) * .5);
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

      @include breakpoint('medium') {
        justify-content: space-between;
      }
    }

    &__help {
      background-color: var(--black);
      z-index: 1;

      &__image {
        height: 650px;
        overflow: hidden;
        z-index: -1;

        @include breakpoint('medium') {
          height: 860px;
        }

        img {
          position: relative;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: 90% 50%;
          vertical-align: middle;
          z-index: -1;

          @include breakpoint('medium') {
            width: 100%;
          }
        }
      }

      &__title {
        position: absolute;
        transform: translateY(-550px);
        
        @include breakpoint('medium') {
          transform: translate(-50%, -400px);
        }
      }

      &__content {
        position: relative;
        margin-top: -150px;
        padding: 0 var(--contentSpacingWidth);
        z-index: 50;

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