<template>
  <div class="main-content app-color">
    <div v-if="$store.state.cart.cart.length == 0" class="text-center">
      <v-img class="d-block mx-auto" src="/emptycart.svg" width="500" />
      <p>No Items Just Yet</p>
    </div>
    <v-container v-else>
      <div v-if="$store.state.cart.cart.length > 0" class="mb-3">
        <v-btn nuxt to="/cart" min-width="150" min-height="45" depressed>
          Back
        </v-btn>
        <v-btn min-width="150" min-height="45" @click="proccess">
          Complete
        </v-btn>
      </div>
      <v-form ref="form" lazy-validation class="mt-10">
        <p class="font-weight-bold">
          Personal & Delivery
        </p>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="Email"
              type="email"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="name"
              :rules="[rules.required]"
              label="Full Name"
              type="text"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="phone"
              label="Phone"
              type="tel"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="address"
              :rules="[rules.required]"
              label="Address"
              type="text"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="city"
              :rules="[rules.required]"
              label="City"
              type="text"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="country"
              :rules="[rules.required]"
              label="Country"
              type="text"
            />
          </v-col>
        </v-row>
        <p class="font-weight-bold">
          Credit card
        </p>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="cc"
              :rules="[rules.required]"
              label="Credit Card Number"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="expdate"
              :rules="[rules.required]"
              label="Exp date"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="cvv"
              :rules="[rules.required]"
              label="Security code/CVV"
            />
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import FM from '~/mixins/FormMixinx'
export default {
  name: 'AppConfirm',
  mixins: [FM],
  data () {
    return {
      email: null,
      name: null,
      phone: null,
      address: null,
      city: null,
      country: null,
      cc: '424242424242',
      expdate: '06/15',
      cvv: '123'
    }
  },
  methods: {
    async proccess () {
      if (!this.$refs.form.validate()) { return }

      await this.$swal({
        title: 'Proceessing your order',
        icon: 'info',
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 3000,
        timerProgressBar: true,
        text: 'Please Wait',
        showConfirmButton: false
      })
      await this.$swal({
        title: 'Order Complete',
        icon: 'success',
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 4000,
        timerProgressBar: true,
        text: 'Thank You So Much ❤',
        showConfirmButton: false
      })
      // Remove items from cart
      this.$store.commit('cart/ClearCart')
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
