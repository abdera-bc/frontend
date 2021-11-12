<template>
  <div class="event__info content">
    <div>
      <Tag content="Info" /> 
    </div>
    <div class="event__info__container text--subline">
        <div class="event__info__event-type" v-for="type in event.types" :key="type[2]"> 
          <span>{{ type[0] }}</span>
        </div>

        <span v-if="event.entry">
          Einlass {{ event.entry }}
        </span>

        <span v-if="event.ak === '0' && (event.vvk === '0' || !event.vvk)">
          Eintritt frei
        </span>

        <span v-else-if="event.ak && event.vvk">
          AK €{{ event.ak }}{{ event.akDisc ? `/€${event.akDisc}` : '' }} • VVK €{{ event.vvk }}{{ event.vvkDisc ? `/€${event.vvkDisc}` : '' }}
        </span>

        <span v-else>
          €{{ event.ak }}{{ event.vvkDisc ? `/€${event.vvkDisc}` : '' }}
        </span>

        <span>
          {{ event.date_raw }}
        </span>

        <div title="Add to Calendar" class="addeventatc">
            Add to Calendar
            <span class="start">11/25/2021 09:00 AM</span>
            <span class="end">11/25/2021 10:00 AM</span>
            <span class="timezone">America/Los_Angeles</span>
            <span class="title">Summary of the event</span>
            <span class="description">Description of the event</span>
            <span class="location">Location of the event</span>
        </div>
      </div>
  </div>
</template>

<script>
import Tag from '../components/Tag'

export default {
  name: 'EventInfo',
  components: {
    Tag
  },
  props: {
    event: Object
  }
}
</script>

<style lang="scss">
.event__info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: var(--paddingSmall) 0;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    line-height: 2em;

    > span:not(:last-child), > div {
      &:after {
        content: '\a0•\a0';
      }
    }
  }

  &__event-type {
    span {
      text-decoration: underline;
    }
  }
}
</style>