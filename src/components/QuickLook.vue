<template>
  <div class="quicklook content">
    <p class="quicklook__title text--subline">Alles auf einen Bilck</p>
    <div class="quicklook__container frame-br">
      <p>
        <span v-if="event.date">
          <strong>Datum</strong> <span>{{event.date.full}}</span>
        </span><br />
        <span v-if="event.entry">
          <strong>Einlass</strong> <span>{{event.entry}}</span>
        </span><br />
        <span v-if="event.start">
          <strong>Beginn</strong> <span>{{event.start}}</span>
        </span><br />
        <span v-if="event.end">
          <strong>Ende</strong> <span>{{event.end}}</span>
        </span><br />
      </p>
      <p>
        <span v-if="event.vvk">
          <strong>Preis Vorverkauf</strong> <span>€ {{event.vvk}}</span>
        </span><br />
        <span v-if="event.ak">
          <strong>Preis Abendkasse</strong> <span>€ {{event.ak}}</span>
        </span><br />
      </p>
      <template v-if="event.quick && event.tickets">
        <Tag v-if="event.quick.includes('vvk_address')" content="Tickets bestellen" :url="event.tickets" />
        <Tag v-if="event.quick.includes('partypass')" content="Partypass" url="https://www.partypass.de/" />
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
  padding: var(--containerSpacingHeight) var(--textSpacingWidth);
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
}
</style>