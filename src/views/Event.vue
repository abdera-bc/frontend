<template>
  <div class="event base-grid">
    <template v-if="event">
      <div class="event__title content-width">
        <p class="event__title__date">
          {{ event.date.weekday }}, 
          {{ event.date.day }}. 
          {{ event.date.month }} 
          {{ event.date.year }}</p>
        <div class="event__title__headline frame-br">
          <h1 v-html="event.title"></h1>
        </div>
      </div>
      <div class="event__image full-width">
        <img v-if="event.image" :src="event.image">
      </div>
      <EventInfo :event="event" />
      <div class="event__content content-width">
        <div class="rendered-content" v-html="event.content"></div>
        <div v-if="event.spotify || event.website" class="event__content__tags">
          <Tag v-if="event.spotify" content="Spotify" :url="event.spotify" />
          <Tag v-if="event.website" content="Website" :url="event.website" />
        </div>
      </div>
      <QuickLook :event="event" />
      <div class="event__owner content-width">
        <template v-if="event.presenter">
          <p>
            <Tag content="Präsentiert von" /><a class="event__owner__link" :href="event.presenter.url">{{ event.presenter.title }}</a>
          </p>
        </template>
        <template v-if="event.organizer">
          <p>
            <Tag content="Veranstalter" /><a class="event__owner__link" :href="event.organizer.url">{{ event.organizer.title }}</a>
          </p>
        </template>
        <template v-else>
          <p>
            <Tag content="Veranstalter" /> Verein Lilienthal e.V.
          </p>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import utils from '../utils'
import Tag from '../components/Tag'
import EventInfo from '../components/EventInfo'
import QuickLook from '../components/QuickLook'

export default {
  name: 'Event',
  components: {
    EventInfo,
    Tag,
    QuickLook
  },
  data: function () {
    return {
      event: null
    }
  },
  methods: {
    getContent: async function (id) {
      this.$store.commit('isLoading', true);
      await utils.get.content('events?include[]=' + id)
        .then(res => this.event = utils.map.events(res)[0])
        .then(this.$store.commit('isLoading', false))
        .catch(err => utils.error.route(err));
    },
    isPresent: function () {
      if (this.$store.getters.getEvent(this.$route.params.id)) {
        this.event = this.$store.getters.getEvent(this.$route.params.id);
      } else {
        this.getContent(this.$route.params.id);
      }
    }
  },
  mounted: function () {
    this.isPresent();
  },
  watch: {
    $route() {
      this.isPresent();
    }
  }
}
</script>

<style lang="scss">
.event {
  position: relative;
  width: 100%;

  &__title {
    margin-top: -25px;
    transform: translateY(25px);

    &__date {
      @include font(subline);
      text-decoration: underline;
    }

    &__headline {
      display: inline-block;
      padding: 12px;
      background-color: $white;

      &::before {
        background-color: $white;
      }
    }
  }

  &__image {
    min-height: 25px;

    img {
      width: 100%;
    }
  }

  &__content {
    padding-bottom: 20px;
    border-bottom: 2px solid $black;

    &__tags {
      padding: 20px 30px 0 30px;
    }
  }

  &__owner {
    margin: 20px 0;

    &__link {
      text-decoration: underline;
    }
  }
}

</style>
