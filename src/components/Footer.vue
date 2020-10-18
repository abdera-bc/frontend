<template>
  <div class="footer base-grid">
    <div class="footer__container content-width">
      <div class="footer__container__column">
        <p class="text--caption">
          <strong> © {{ currentYear }} Lilienthal e.V.<br />
          Kulturhalle Abdera <br /></strong>
          Breslaustraße 13 <br />
          88400 Biberach/Riß <br />
        </p>
        <p class="text--caption">
          +49 (0) 7351 / 16 93 54 <br />
          <a class="footer__container__mail" href="mailto:info@abdera-bc.de">info@abdera-bc.de</a>
        </p>
      </div>
      <div class="footer__container__column">
        <div class="footer__socialmedia">
          <SocialLink type="facebook" light small />
          <SocialLink type="instagram" light small />
          <SocialLink type="youtube" light small />
        </div>
        <div class="footer__menu">
          <Tag content="Impressum" :url="this.config.BASE_URL + 'impressum'" dark />
          <Tag content="Datenschutz" :url="this.config.BASE_URL + 'datenschutz'" dark />
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
    event: Object
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
  background-color: $black;
  height: 200px;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: $white;

    &__column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
    }

    &__link {
      right: 0;
      text-align: right;
    }

    &__link,
    &__mail {
      color: $white;
      text-decoration: underline;
    }

    strong {
      font-size: 12px;
    }
  }

  &__socialmedia {
    margin: 12px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    *:not(:last-child) {
      margin-right: 15px;
    }
  }

  &__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    bottom: 0px;
    margin: 12px 0;

    * {
      align-self: flex-end;
      margin: 0;

      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }
}
</style>