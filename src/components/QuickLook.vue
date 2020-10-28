<template>
  <div class="quicklook content">
    <p class="quicklook__title text--subline">Alles auf einen Bilck:</p>
    <div class="quicklook__container frame-br">
      <p>
        <span v-if="event.entry">
          <strong>Einlass:</strong> {{event.entry}}
        </span><br />
        <span v-if="event.start">
          <strong>Beginn:</strong> {{event.start}}
        </span><br />
        <span v-if="event.end">
          <strong>Ende:</strong> {{event.end}}
        </span><br />
      </p>
      <p>
        <span v-if="event.vvk">
          <strong>VVK:</strong> € {{event.vvk}}
        </span><br />
        <span v-if="event.ak">
          <strong>AK:</strong> € {{event.ak}}
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
  padding: 10px var(--contentSpacingWidth) 30px var(--contentSpacingWidth);
  border-bottom: 2px solid var(--black);

  &__title {
    text-decoration: underline;
  }

  &__container {
    padding: 20px;
    background-color: var(--white);

    p {
      margin-top: 0;
      margin-bottom: 20px;
    }
  }
}
</style>