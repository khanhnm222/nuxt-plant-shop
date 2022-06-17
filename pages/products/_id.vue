<template>
  <div class="main-content">
    <div class="app-color flex justify-center font-semibold underline text-3xl">
      Product Details
    </div>
    <div>
      <v-row class="justify-center app-color mt-4">
        <v-col cols="11" md="7">
          <h2 class="text-center text-md-h4 font-weight-bold">
            {{ product.name }}
          </h2>
          <div class="mt-2 text-center">
            <v-rating
              readonly
              half-increments
              class="mb-2"
              color="yellow"
              :value="product.ratings"
              dense
              size="20"
            />
            <v-chip
              v-for="(t, i) in product.tags"
              :key="`prod${product.id}-${i}`"
              small
              label
              outlined
              class="mr-1 app-color"
            >
              {{ t }}
            </v-chip>
          </div>
          <br>
          <v-img
            width="100%"
            class="el rounded-lg"
            height="50vh"
            :src="product.image"
          />
          <p class="mt-5 mb-7">
            {{ product.description }}
          </p>
          <v-btn
            min-width="150"
            class="text-capitalize action_btn_light mb-6 font-extrabold"
            min-height="45"
            @click="$store.commit('cart/AddToCart', product)"
          >
            Add To Cart
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      product: null,
      cards: [{
        id: 1,
        name: 'Monstera Deliciosa',
        rattings: 6,
        price: '20000',
        tags: ['Conifers'],
        description: 'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk.',
        image: 'https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?t=st=1654448894~exp=1654449494~hmac=f841a1da12858103773cee76f4f44699c044e95cf7f3eb2dd595a87adcdcbb14&w=740'
      },
      {
        id: 2,
        name: 'Bird\'s Nest Fern',
        rattings: 6,
        price: '20000',
        tags: ['Conifers'],
        description: 'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ',
        image: 'https://img.freepik.com/free-photo/plant-terracotta-pot-birds-nest-fern-plant_53876-146303.jpg?t=st=1654449434~exp=1654450034~hmac=1532ddbbb6b90488e0839b4e8042843be18c15e931828599872f1744db6303fc&w=740'
      },
      {
        id: 3,
        name: 'Peace Lily',
        rattings: 6,
        price: '20000',
        tags: ['Conifers'],
        description: 'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ',
        image: 'https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?t=st=1654448894~exp=1654449494~hmac=f841a1da12858103773cee76f4f44699c044e95cf7f3eb2dd595a87adcdcbb14&w=740'
      },
      {
        id: 4,
        name: 'Bird\'s Nest Fern',
        rattings: 6,
        price: '20000',
        tags: ['Conifers'],
        description: 'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ',
        image: 'https://img.freepik.com/free-photo/plant-terracotta-pot-birds-nest-fern-plant_53876-146303.jpg?t=st=1654449434~exp=1654450034~hmac=1532ddbbb6b90488e0839b4e8042843be18c15e931828599872f1744db6303fc&w=740'
      },
      {
        id: 5,
        name: 'Peace Lily',
        rattings: 6,
        price: '20000',
        tags: ['Conifers'],
        description: 'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ',
        image: 'https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?t=st=1654448894~exp=1654449494~hmac=f841a1da12858103773cee76f4f44699c044e95cf7f3eb2dd595a87adcdcbb14&w=740'
      },
      {
        id: 6,
        name: 'Bird\'s Nest Fern',
        rattings: 6,
        price: '20000',
        tags: ['Conifers'],
        description: 'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ',
        image: 'https://img.freepik.com/free-photo/plant-terracotta-pot-birds-nest-fern-plant_53876-146303.jpg?t=st=1654449434~exp=1654450034~hmac=1532ddbbb6b90488e0839b4e8042843be18c15e931828599872f1744db6303fc&w=740'
      },
      {
        id: 7,
        name: 'Peace Lily',
        rattings: 6,
        price: '20000',
        tags: ['Conifers'],
        description: 'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ',
        image: 'https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?t=st=1654448894~exp=1654449494~hmac=f841a1da12858103773cee76f4f44699c044e95cf7f3eb2dd595a87adcdcbb14&w=740'
      },
      {
        id: 8,
        name: 'Bird\'s Nest Fern',
        rattings: 6,
        price: '20000',
        tags: ['Conifers'],
        description: 'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ',
        image: 'https://img.freepik.com/free-photo/plant-terracotta-pot-birds-nest-fern-plant_53876-146303.jpg?t=st=1654449434~exp=1654450034~hmac=1532ddbbb6b90488e0839b4e8042843be18c15e931828599872f1744db6303fc&w=740'
      },
      {
        id: 9,
        name: 'Peace Lily',
        rattings: 6,
        price: '20000',
        tags: ['Conifers'],
        description: 'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ',
        image: 'https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?t=st=1654448894~exp=1654449494~hmac=f841a1da12858103773cee76f4f44699c044e95cf7f3eb2dd595a87adcdcbb14&w=740'
      },
      {
        id: 10,
        name: 'Bird\'s Nest Fern',
        rattings: 6,
        price: '20000',
        tags: ['Conifers'],
        description: 'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ',
        image: 'https://img.freepik.com/free-photo/plant-terracotta-pot-birds-nest-fern-plant_53876-146303.jpg?t=st=1654449434~exp=1654450034~hmac=1532ddbbb6b90488e0839b4e8042843be18c15e931828599872f1744db6303fc&w=740'
      },
      {
        id: 11,
        name: 'Peace Lily',
        rattings: 6,
        price: '20000',
        tags: ['Conifers'],
        description: 'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ',
        image: 'https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?t=st=1654448894~exp=1654449494~hmac=f841a1da12858103773cee76f4f44699c044e95cf7f3eb2dd595a87adcdcbb14&w=740'
      },
      {
        id: 12,
        name: 'Robber',
        rattings: 6,
        price: '20000',
        tags: ['Conifers'],
        description: 'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ',
        image: 'https://img.freepik.com/free-photo/plant-terracotta-pot-birds-nest-fern-plant_53876-146303.jpg?t=st=1654449434~exp=1654450034~hmac=1532ddbbb6b90488e0839b4e8042843be18c15e931828599872f1744db6303fc&w=740'
      }]
    }
  },
  created () {
    // const d = this.$content('products')
    //   .where({ id: parseInt(this.$route.params.id) })
    //   .limit(1)
    //   .fetch()
    this.product = this.cards.filter(product => product.id.toString() === this.$route.params.id)[0]
  },
  methods: {
    addToCartAndNavigate () {
      if (this.product) {
        this.$store.commit('cart/AddToCart', this.product)
      }
    }
  }
}
</script>

<style></style>
