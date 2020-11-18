<template>
  <div class="overview">
    <div class="overview__container base-grid">
      <div class="overview__container__left">
        <router-link to="/programm">
          <h1 class="frame-br">Nächste Veranstaltungen</h1>
        </router-link>
      </div>
    </div>
    <template v-for="event in events.slice(0, 3)">
      <ProgramItem  :key="event.id" :event="event" overview/>
    </template>
    <div class="overview__container base-grid">
      <div class="overview__container__right">
        <Tag content="Zum kompletten Programm" url="/programm" />
      </div>
    </div>
  </div>
</template>

<script>
import utils from '@/utils'
import ProgramItem from '@/components/ProgramItem'
import Tag from '@/components/Tag'

export default {
  name: 'Overview',
  components: {
    ProgramItem,
    Tag
  },
  props: {
    show: String
  },
  computed: {
    events: function () {
      return this.$store.state.events.content;
    }
  },
  mounted: async function () {
    if (this.$store.state.events.count === 0) {
      this.$store.commit('isLoading', true);
      await utils.get.content(
        'events', 
        { 
          per_page: this.show,
          orderby: 'meta_value',
          meta_key: 'event_date',
          order: 'asc'
        }
      )
      .then(res => this.$store.commit('setEvents', utils.map.events(res)))
      .then(this.$store.commit('isLoading', false))
      .catch(err => console.error('Abdera is sorry:', err));
    }
  }
}
</script>

<style scoped lang="scss">
.overview {
  padding: var(--containerSpacingHeight) 0;

  &__container {
    h1 {
      display: inline-block;
      padding: 12px;
    }

    &__left {
      grid-column-start: 2;
      grid-column-end: 4;
      padding-bottom: 20px;
    }

    &__right {
      grid-column-start: 3;
      grid-column-end: 6;
      padding-top: 20px;
    }
  }
}
</style>
