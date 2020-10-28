<template>
  <div class="program__item base-grid">

    <div v-if="event.image" class="program__item__image content">
      <router-link :to="/event/ + event.id"><img :src="event.image" :alt="'Bald im Abdera Biberach: ' + event.title" /></router-link>
    </div>

    <div class="program__item--left">
      <ProgramItemDate v-if="overview" :weekday="event.date.weekday" :day="event.date.day" :month="event.date.month" />
      <ProgramItemDate v-else :weekday="event.date.weekday" :day="event.date.day" />
    </div>

    <div class="program__item--right">
      <div class="program__item__type text--subline">
        <span v-for="type in event.types" :key="type[2]"> 
          {{ type[0] + ' ' }}
        </span>
      </div>
      
      <router-link :to="/event/ + event.id"> 
        <h1 class="program__item__title" v-html="event.title"></h1>
      </router-link>

      <div class="program__item__info text--subline">
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

      <Tag v-if="event.quick.includes('vvk_address')" content="VVK" :url="event.tickets" />
      <Tag v-if="event.quick.includes('partypass')" content="Partypass" url="https://www.partypass.de/" />
      
      <Tag v-for="tag in event.tags" :key="tag" :content="tag" />
      
    </div>

    <div class="program__item__border content"></div>
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
  margin-top: 40px;

  &--left {
    grid-column-start: 2;
    grid-column-end: 3;
  }
  
  &--right {
    grid-column-start: 3;
    grid-column-end: 6;
  }

  &__type {
    text-decoration: underline !important;
  }

  &__title {
    color: $black;
    margin: 10px 0;
  }

  &__info {
    margin-bottom: 20px;
  }

  &__image {
    position: relative;
    margin-bottom: 20px;
    
    img {
      vertical-align: middle;
      width: 100%;
    }
  }

  &__border {
    border-bottom: 2px solid $black;
    margin-top: 40px;
  }

  &:last-child {
    .program__item--right {
      border: 0;
    }
  }
}

</style>