<script>
export default {
  name: 'ProductCard',
  props: {
    dataSource: { type: Object, required: true, default: () => {} }
  }
}
</script>
<template>
  <v-card class="mr-10 mb-10">
    <v-img
      :src="dataSource.src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-title v-text="dataSource.title" />
    </v-img>

    <v-card-actions>
      <v-btn class="ml-2" outlined rounded small>
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
}
</style>
