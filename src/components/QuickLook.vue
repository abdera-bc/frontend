<template>
  <div class="quicklook content">
    <p class="quicklook__title text--subline">Alles auf einen Bilck</p>
    <div class="quicklook__container frame-br">
      <p>
        <span v-if="event.date">
          <strong>Datum</strong> <span>
            {{ event.date.weekday }}, 
            {{ event.date.day }}. 
            {{ event.date.month }} 
            {{ event.date.year }} 
            </span>
        </span><br />
        <span v-if="event.entry_tba">
          <strong>Einlass</strong> <span>TBA</span>
        </span>
        <span v-else-if="event.entry">
          <strong>Einlass</strong> <span>{{event.entry}}</span>
        </span>
        <br />
        <span v-if="event.start">
          <strong>Beginn</strong> <span>{{event.start}}</span>
        </span><br />
        <span v-if="event.end">
          <strong>Ende</strong> <span>{{event.end}}</span>
        </span><br />
      </p>
      <p v-if="event.price_tba">
        <span>
          <strong>Preis</strong> <span>TBA</span>
        </span><br />
      </p>
      <p v-else>
        <span v-if="event.vvk">
          <strong>Preis Vorverkauf</strong> <span>€{{event.vvk}}{{ event.vvkDisc ? `/€${event.vvkDisc}` : '' }}</span>
        </span><br />
        <span v-if="event.ak">
          <strong>Preis Abendkasse</strong> <span>€{{event.ak}}{{ event.akDisc ? `/€${event.akDisc}` : '' }}</span>
        </span><br />
      </p>
      <template v-if="event.quick && event.tickets">
        <div v-if="event.quick.includes('vvk_address')" class="quicklook__button">
          <Tag content="Tickets bestellen" :url="event.tickets" />
        </div>
        <div v-if="event.quick.includes('partypass')" class="quicklook__button">
          <Tag content="Partypass" url="https://www.partypass.de/" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Tag from './Tag'

export default {
  name: 'QuickLook',
  components: {
    Tag
  },
  props: {
    event: Object
  }
}
</script>

<style lang="scss">
.quicklook {
  padding: var(--containerSpacingHeight) var(--contentSpacingWidth);
  border-top: 2px solid var(--black);
  border-bottom: 2px solid var(--black);

  &__title {
    text-decoration: underline;
    margin-bottom: 30px;
  }

  &__container {
    padding: var(--paddingSmall);
    background-color: var(--white);

    p {
      margin-top: 0;
      margin-bottom: 20px;
      display: block;
      width: 100%;

      > span:not(:last-child) {
        display: block;
        padding-bottom: 10px;
        border-bottom: 2px solid var(--black);

        > span {
          float: right;
        }
      }
    }
  }

  &__button {
    margin-top: 20px;
  }
}
</style>