<template>
  <div class="main-content app-color">
    <div v-if="$store.state.cart.cart.length == 0" class="text-center">
      <v-img class="d-block mx-auto" src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png" width="500" />
      <p>No Items Just Yet</p>
    </div>
    <v-container>
      <div v-if="$store.state.cart.cart.length > 0" class="mb-3">
        <v-btn
          class="action-btn"
          to="/cart/confirm"
        >
          Checkout
        </v-btn>
      </div>
      <v-row>
        <template v-for="(c, i) in $store.state.cart.cart">
          <v-col :key="`cartItem${i}`">
            <v-card class="checkout-cart" flat>
              <v-btn
                absolute
                top
                right
                icon
                @click="$store.commit('cart/RemoveCartItem', i)"
              >
                <v-icon size="18">
                  mdi-delete
                </v-icon>
              </v-btn>

              <v-row dense>
                <v-col md="3">
                  <v-img
                    class="rounded-lg"
                    height="220"
                    :src="c.product.image"
                  />
                </v-col>
                <v-col class="pl-5 pt-2" md="9">
                  <h2 class="text-md-h6 font-weight-bold">
                    {{ c.product.name }} x {{ c.quantity }}
                  </h2>
                  <p class="primary--text mt-2">
                    {{ $formatMoney(c.product.price * c.quantity) }}
                  </p>
                  <v-btn
                    icon
                    @click="$store.commit('cart/IncreaseItemCount', i)"
                  >
                    <v-icon size="20">
                      mdi-plus-circle
                    </v-icon>
                  </v-btn>
                  <span class="mx-2">{{ c.quantity }}</span>
                  <v-btn
                    icon
                    @click="$store.commit('cart/DecreaseItemCount', i)"
                  >
                    <v-icon size="20">
                      mdi-minus-circle
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
    <br>
  </div>
</template>

<script>
export default {
  name: 'AppCart'
}
</script>

<style>
.checkout-cart {
  border-radius: 10px !important;
}
</style>
