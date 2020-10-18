<template>
  <div class="program__item base-grid">
    <div class="program__item--left">
      <ProgramItemDate v-if="overview" :weekday="event.date.weekday" :day="event.date.day" :month="event.date.month" />
      <ProgramItemDate v-else :weekday="event.date.weekday" :day="event.date.day" />
    </div>

    <div class="program__item--right">
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
      
      <router-link :to="/event/ + event.id"> 
        <h1 class="program__item__title" v-html="event.title"></h1>
      </router-link>

      <Tag v-if="event.quick.includes('vvk_address')" content="VVK" :url="event.tickets" />
      <Tag v-if="event.quick.includes('partypass')" content="Partypass" url="https://www.partypass.de/" />
      
      <Tag v-for="tag in event.tags" :key="tag" :content="tag" />

      <div v-if="event.image" class="program__item__image frame-bl">
        <router-link :to="/event/ + event.id"><img :src="event.image" /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '../components/Tag'
import ProgramItemDate from '../components/ProgramItemDate'

export default {
  name: 'ProgramItem',
  components: {
    Tag,
    ProgramItemDate
  },
  props: {
    event: Object,
    overview: Boolean
  }
}
</script>

<style lang="scss">
.program__item {
  margin-top: 20px;

  &--left {
    grid-column-start: 2;
    grid-column-end: 3;
  }
  
  &--right {
    grid-column-start: 3;
    grid-column-end: 5;

    padding-bottom: 20px;
    border-bottom: 2px solid $black;
  }

  &__title {
    color: $black;
    margin: 10px 0 15px 0;
  }

  &__image {
    position: relative;
    margin-top: 20px;
    
    img {
      vertical-align: middle;
      width: 100%;
    }
  }

  &:last-child {
    .program__item--right {
      border: 0;
    }
  }
}

</style>