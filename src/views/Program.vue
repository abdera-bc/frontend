<template>
  <div class="program">
      <template v-for="month in events">
        <template v-if="month.date.change">
          <div class="event__month" :key="month.id">
            <ProgramItemSeparator 
              class="lazy-program"
              :key="month.id + '-' + month.date.month"
              v-if="month.date.change"
              :month="month.date.month"
              :year="month.date.year"
            />

            <template v-for="event in events">
              <ProgramItem 
                v-if="(event.date.month === month.date.month) && (event.date.year === month.date.year)" 
                class="lazy-program" 
                :key="event.id" 
                :event="event" 
              />
            </template>
          </div>
        </template>
      </template>
    <div 
      v-if="this.$store.state.content && this.$store.state.events.count < this.$store.state.events.total" 
      class="program__container lazy-program base-grid"
    >
      <div class="program__container__right">
        <Tag 
          @click.native="fetchEvents()" 
          content="Mehr laden" 
          button 
        />
      </div>
    </div>
  </div>
</template>

<script>
import utils from '../utils'
import ProgramItem from '@/components/ProgramItem'
import ProgramItemSeparator from '@/components/ProgramItemSeparator'
import Tag from '@/components/Tag'

export default {
  name: 'Programm',
  components: {
    ProgramItem,
    ProgramItemSeparator,
    Tag
  },
  computed: {
    events: function () {
      return this.$store.state.events.content;
    }
  },
  methods: {
    fetchEvents: async function () {
      await utils.get.content(
        'events', 
        { 
          offset: this.$store.state.events.count,
          per_page: '10',
          orderby: 'meta_value',
          meta_key: 'event_date',
          order: 'asc'
        }
      )
      .then(res => res ? this.$store.commit('setEvents', utils.map.events(res)) : '')
      .then(this.$store.commit('isLoading', false))
      .catch(err => console.error('Abdera is sorry:', err));
    }
  },
  mounted: function () {
    if (this.$store.state.events.content.length < 10) {
      this.$store.commit('isLoading', true);
      this.fetchEvents();
    }
  }

}
</script>

<style lang="scss">
.program {
  &__container {
    padding: 20px 0;
    bottom: 0px;

    &__right {
      grid-column-start: 3;
      grid-column-end: 5;
    }
  }
}

// Animations
.lazy-program {
  animation: lazyLoad .3s ease-in;
}

@keyframes lazyLoad {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }

  20% {
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

</style>
