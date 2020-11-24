<template>
  <div class="footer" :class="{'footer--dark' : dark}">
    <div class="footer--grid base-grid">
      <div class="footer__container content medium-left">
        <div class="footer__container__column footer__container__column__left">
          <div class="footer__socialmedia">
            <SocialLink type="facebook" light />
            <SocialLink type="instagram" light />
            <SocialLink type="youtube" light />
          </div>
          <div class="footer__contact">
            <p class="text--caption footer__contact__item">
              <strong> © {{ currentYear }} Lilienthal e.V.<br />
              Kulturhalle Abdera <br /></strong>
              Breslaustraße 13 <br />
              88400 Biberach/Riß <br /><br />
              +49 (0) 7351 / 16 93 54 <br />
              <a class="footer__container__mail" href="mailto:info@abdera-bc.de">info@abdera-bc.de</a>
            </p>
            <div class="footer__legal footer__contact__item">
              <Tag content="Impressum" :url="this.config.BASE_URL + 'impressum'" dark />
              <Tag content="Datenschutz" :url="this.config.BASE_URL + 'datenschutz'" dark />
            </div>
          </div>
        </div>
      </div>
      <div class="footer__container content medium-right">
        <div class="footer__container__column footer__container__column__right">
          <div class="footer__menu">
            <div class="only-desktop">
              <slot></slot>
            </div>
            <div class="footer__copyright footer__menu__item">
              Design und Implementierung<br />
              <a href="https://katrinmentz.com/" traget="_blank" rel="noreferrer">Katrin Mentz</a> & 
              <a href="https://moritzgut.de/" traget="_blank" rel="noreferrer">Moritz Gut</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config/index'
import SocialLink from '@/components/SocialLink'
import Tag from '@/components/Tag'

export default {
  name: 'ProgramItem',
  components: {
    SocialLink,
    Tag
  },
  props: {
    event: Object,
    dark: Boolean
  },
  data: function () {
    return {
      config: config
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear();
    }
  }
}

</script>
<style lang="scss">
.footer {
  position: relative;
  background-color: var(--black);
  padding: var(--containerSpacingHeight) 0;
  margin-top: -2px;

  &__container {
    display: flex;
    flex-direction: row;
    max-width: 1280px;
    padding: var(--contentSpacingWidth);

    @include breakpoint('medium') {
      padding: var(--contentSpacingWidth) 0;
    }

    &__column {
      display: flex;
      flex-direction: row;
      flex-grow: 1;

      &__left {
        justify-content: space-between;
      }

      &__right {
        justify-content: flex-end;
      }
      
      p, strong {
        font-size: 12px;
        color: var(--white);
      }
    }

    &__link {
      right: 0;
      text-align: right;
    }

    &__link,
    &__mail {
      color: var(--white);
      text-decoration: underline;
    }
  }

  &__socialmedia {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    *:not(:last-child) {
      margin-right: 15px;
    }
  }

  &__contact {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    &__item {
      margin-top: var(--containerSpacingHeight);

      &:first-child {
        margin-top: 0px;
      }
    }
  }

  &__legal {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    bottom: 0px;

    * {
      align-self: flex-start;

      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }

  &__copyright {
    font-size: 12px;
  }

  &__menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;


    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0;
      margin: 0 0 30px 0;

      li {
        position: relative;
        list-style: none;
        display: inline-block;

        a {
          display: inline-block;
          @include font(headline);
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 0.2rem;
          line-height: 22px;
          color: var(--white);
          padding: 10px 0;

          &:hover {
            text-decoration: underline;
          }
        }

        &:first-child {
            a {
              padding-top: 0px;
            }
        }
      }
    }
    
    &__item {
      color: var(--white);
      text-align: center;
      
      @include breakpoint ('medium') {
        text-align: right;
      }

      > a {
        color: var(--white);
        text-decoration: underline;
      }
    }
  }

  &--dark {
    --black: #ffffff;
    --white: #000000;
  }

  &--grid {
    max-width: 1280px;
    margin: 0 auto;
  }
}
</style>