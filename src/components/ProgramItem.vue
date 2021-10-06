<template>
  <div class="program__item base-grid">
    <router-link :to="/event/ + event.id" class="program__item__link content" :aria-label="'Bald im Abdera Biberach:' + event.title"></router-link>

    <div v-if="event.image" class="program__item__image content">
      <img :src="event.image" :alt="'Bald im Abdera Biberach: ' + event.title" width="900" height="450" loading="lazy"/>
    </div>

    <div class="program__item--left">
        <ProgramItemDate v-if="overview" :weekday="event.date.weekday" :day="event.date.day" :month="event.date.month" />
        <ProgramItemDate v-else :weekday="event.date.weekday" :day="event.date.day" />
    </div>

    <div class="program__item--right">

        <div>
          <div class="program__item__type text--subline">
            <div v-for="type in event.types" :key="type[2]"> 
              <span>{{ type[0] }}</span>
            </div>
          </div>
          
          <router-link :to="/event/ + event.id"> 
            <h1 class="program__item__title" v-html="event.title"></h1>
          </router-link>

          <div class="program__item__info text--subline">
            <span v-if="event.entry">
              Ab {{ event.entry }} •
            </span>

            <span v-if="event.ak === '0' && (event.vvk === '0' || !event.vvk)">
              Eintritt frei
            </span>

            <span v-else-if="event.ak && event.vvk">
              AK €{{ event.ak }} • VVK €{{ event.vvk }}
            </span>

            <span v-else>
              €{{ event.ak }}
            </span>
          </div>
      </div>
      <div class="program__item__tags--container">
        <div v-if="event.tags" class="program__item__tags">
          <Tag v-for="tag in event.tags" :key="tag" :content="tag" />
        </div>

        <div class="program__item__tags">
          <Tag v-if="event.quick.includes('vvk_address')" content="VVK" :url="event.tickets" />
          <Tag v-if="event.quick.includes('partypass')" content="Partypass" url="https://www.partypass.de/" />
        </div>
      </div>
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
  position: relative;
  padding-top: 40px;
  z-index: 0;

  &--left {
    grid-column-start: 2;
    grid-column-end: 3;
    pointer-events: none;
  }
  
  &--right {
    grid-column-start: 3;
    grid-column-end: 6;
    pointer-events: none;

    @include breakpoint('medium') {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__type {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: -5px; // Neutralize spans top-margin
    
    > div:not(:last-child) {
      &:after {
        content: '\a0•\a0';
      }
    }

    span {
      display: inline-block;
      text-decoration: underline;
      margin-top: 5px;
    }
  }

  &__title {
    position: relative;
    color: var(--black);
    margin: 10px 0;
  }

  &__link {
    position: absolute;
    height: 100%;
    width: 100%;

    &:hover ~div .programm__item__date__container:before {
      background-color: var(--black);
    }
  }

  &__info {
    margin-bottom: 20px;
  }

  &__image {
    position: relative;
    margin-bottom: 20px;
    pointer-events: none;
    
    img {
      vertical-align: middle;
      width: 100%;
      height: auto;
    }
  }

  &__border {
    border-bottom: 2px solid var(--black);
    margin-top: 40px;
  }

  &__tags {
    display: inline-block;
    min-width: 130px;
    z-index: 1;
    
    &--container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex-shrink: 0;

      @include breakpoint('small') {
        flex-direction: row;
      }
    }

    @include breakpoint('medium') {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
    }

    a {
      pointer-events: all;
    }
  }

  &:last-child {
    .program__item--right {
      border: 0;
    }
  }
}

</style>