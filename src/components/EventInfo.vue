<template>
  <div class="event__info content-width">
    <div>
      <Tag content="Info" /> 
    </div>
    <div class="text--subline">
        <span v-for="type in event.types" :key="type[2]"> 
          <router-link :to="/type/ + type[1]">{{ type[0] }}</router-link> •
        </span>

        <span v-if="event.entry">
          Ab: {{ event.entry }} •
        </span>

        <span v-if="event.ak && event.vvk">
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
.event {
  &__info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px 0;
  }
}
</style>