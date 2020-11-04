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
          Ab {{ event.entry }}
        </span>

        <span v-if="event.ak === '0' && (event.vvk === '0' || !event.vvk)">
          Gratis
        </span>

        <span v-else-if="event.ak && event.vvk">
          AK €{{ event.ak }} • VVK €{{ event.vvk }}
        </span>

        <span v-else>
          €{{ event.ak }}
        </span>
      </div>
  </div>
</template>

<script>
import Tag from '../components/Tag'

export default {
  name: 'ProgramItem',
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
  
  + p {
    border-top: 2px solid var(--black);
  }

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

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