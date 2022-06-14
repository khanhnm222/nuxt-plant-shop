<script>
export default {
  name: 'ProductCard',
  props: {
    dataSource: { type: Object, required: true, default: () => {} },
    to: { type: Function, required: false, default: () => {} }
  }
}
</script>
<template>
  <v-card class="mr-10 mb-10">
    <nuxt-link :to="`/products/${dataSource.id}`">
      <v-img
        :src="dataSource.image"
        class="cursor-pointer white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-card-title v-text="dataSource.name" />
      </v-img>
    </nuxt-link>

    <v-card-actions>
      <v-btn class="ml-2" outlined rounded small @click="$store.commit('cart/AddToCart', dataSource)">
        ADD TO CARD
      </v-btn>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<style scoped>
.v-card {
  max-width: 250px;
  border-radius: 5px !important;
}
</style>
<style>
.v-responsive__content {
  color: white;
  align-self: flex-end;
  flex: auto;
}
</style>
