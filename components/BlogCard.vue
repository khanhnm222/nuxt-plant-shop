<script>
export default {
  name: 'BlogCard',
  props: {
    dataSource: { type: Object, required: true, default: () => {} }
  }
}
</script>
<template>
  <v-card class="mr-10 mb-10" min-width="500">
    <nuxt-link :to="`/blogs/${dataSource.id}`">
      <v-img
        class="white--text align-end cursor-pointer"
        height="200px"
        :src="dataSource.src"
      >
        <v-card-title v-text="dataSource.title" />
      </v-img>
      <v-card-subtitle class="main-color pb-0" v-text="dataSource.author" />
    </nuxt-link>

    <v-card-text class="text--primary">
      <div>{{ dataSource.shortContent }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text>
        Share
      </v-btn>

      <v-btn color="orange" text>
        Explore
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
