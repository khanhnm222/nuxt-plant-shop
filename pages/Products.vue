<script>
import ProductCard from '~/components/ProductCard.vue'
export default {
  name: 'AppProducts',
  components: { ProductCard },
  data () {
    return {
      cards: [{
        id: 1,
        name: 'Monstera Deliciosa',
        rattings: 6,
        price: '20000',
        description: 'This is a description of the product',
        image: 'https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?t=st=1654448894~exp=1654449494~hmac=f841a1da12858103773cee76f4f44699c044e95cf7f3eb2dd595a87adcdcbb14&w=740'
      },
      {
        id: 2,
        name: 'Bird\'s Nest Fern',
        rattings: 6,
        price: '20000',
        description: 'This is a description of the product',
        image: 'https://img.freepik.com/free-photo/plant-terracotta-pot-birds-nest-fern-plant_53876-146303.jpg?t=st=1654449434~exp=1654450034~hmac=1532ddbbb6b90488e0839b4e8042843be18c15e931828599872f1744db6303fc&w=740'
      },
      {
        id: 3,
        name: 'Peace Lily',
        rattings: 6,
        price: '20000',
        description: 'This is a description of the product',
        image: 'https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?t=st=1654448894~exp=1654449494~hmac=f841a1da12858103773cee76f4f44699c044e95cf7f3eb2dd595a87adcdcbb14&w=740'
      },
      {
        id: 4,
        name: 'Bird\'s Nest Fern',
        rattings: 6,
        price: '20000',
        description: 'This is a description of the product',
        image: 'https://img.freepik.com/free-photo/plant-terracotta-pot-birds-nest-fern-plant_53876-146303.jpg?t=st=1654449434~exp=1654450034~hmac=1532ddbbb6b90488e0839b4e8042843be18c15e931828599872f1744db6303fc&w=740'
      },
      {
        id: 5,
        name: 'Peace Lily',
        rattings: 6,
        price: '20000',
        description: 'This is a description of the product',
        image: 'https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?t=st=1654448894~exp=1654449494~hmac=f841a1da12858103773cee76f4f44699c044e95cf7f3eb2dd595a87adcdcbb14&w=740'
      },
      {
        id: 6,
        name: 'Bird\'s Nest Fern',
        rattings: 6,
        price: '20000',
        description: 'This is a description of the product',
        image: 'https://img.freepik.com/free-photo/plant-terracotta-pot-birds-nest-fern-plant_53876-146303.jpg?t=st=1654449434~exp=1654450034~hmac=1532ddbbb6b90488e0839b4e8042843be18c15e931828599872f1744db6303fc&w=740'
      },
      {
        id: 7,
        name: 'Peace Lily',
        rattings: 6,
        price: '20000',
        description: 'This is a description of the product',
        image: 'https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?t=st=1654448894~exp=1654449494~hmac=f841a1da12858103773cee76f4f44699c044e95cf7f3eb2dd595a87adcdcbb14&w=740'
      },
      {
        id: 8,
        name: 'Bird\'s Nest Fern',
        rattings: 6,
        price: '20000',
        description: 'This is a description of the product',
        image: 'https://img.freepik.com/free-photo/plant-terracotta-pot-birds-nest-fern-plant_53876-146303.jpg?t=st=1654449434~exp=1654450034~hmac=1532ddbbb6b90488e0839b4e8042843be18c15e931828599872f1744db6303fc&w=740'
      },
      {
        id: 9,
        name: 'Peace Lily',
        rattings: 6,
        price: '20000',
        description: 'This is a description of the product',
        image: 'https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?t=st=1654448894~exp=1654449494~hmac=f841a1da12858103773cee76f4f44699c044e95cf7f3eb2dd595a87adcdcbb14&w=740'
      },
      {
        id: 10,
        name: 'Bird\'s Nest Fern',
        rattings: 6,
        price: '20000',
        description: 'This is a description of the product',
        image: 'https://img.freepik.com/free-photo/plant-terracotta-pot-birds-nest-fern-plant_53876-146303.jpg?t=st=1654449434~exp=1654450034~hmac=1532ddbbb6b90488e0839b4e8042843be18c15e931828599872f1744db6303fc&w=740'
      },
      {
        id: 11,
        name: 'Peace Lily',
        rattings: 6,
        price: '20000',
        description: 'This is a description of the product',
        image: 'https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?t=st=1654448894~exp=1654449494~hmac=f841a1da12858103773cee76f4f44699c044e95cf7f3eb2dd595a87adcdcbb14&w=740'
      },
      {
        id: 12,
        name: 'Robber',
        rattings: 6,
        price: '20000',
        description: 'This is a description of the product',
        image: 'https://img.freepik.com/free-photo/plant-terracotta-pot-birds-nest-fern-plant_53876-146303.jpg?t=st=1654449434~exp=1654450034~hmac=1532ddbbb6b90488e0839b4e8042843be18c15e931828599872f1744db6303fc&w=740'
      }]
    }
  }
}
</script>
<template>
  <div>
    <div class="main-content">
      <div class="app-color flex justify-center font-semibold underline text-3xl mb-6">
        Products
      </div>
      <div class="flex flex-wrap justify-center">
        <div v-for="(card, index) in cards" :key="index">
          <ProductCard :data-source="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
