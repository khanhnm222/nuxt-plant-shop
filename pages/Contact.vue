<script>
export default {
  name: 'AppContact',
  data () {
    return {
      email: null
    }
  },
  methods: {
    async submit () {
      await this.$swal({
        title: 'Thank You For Subscribing.',
        icon: 'success',
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 4000,
        timerProgressBar: true,
        text: 'You will be notified when we have a deal or items on sale.',
        showConfirmButton: false
      })
    }
  }
}
</script>

<template>
  <div class="main-content">
    <div class="app-color flex justify-center font-semibold underline text-3xl">
      Contact
    </div>
    <div>
      <v-card rounded="lg" class="pa-md-10 pa-5 text-center">
        <h2 class="text-md-h3">
          Newsletter
        </h2>
        <p class="text-md-h6 mt-5">
          Subscrie to receive discounts & more!
        </p>
        <br>
        <v-sheet color="transparent" class="mx-auto" max-width="400">
          <v-text-field class="contact-input" v-model="email" color="white" label="Email" outlined />
          <v-btn outlined min-height="50" block>
            Subscribe
          </v-btn>
        </v-sheet>
      </v-card>
    </div>
  </div>
</template>
<style>

.contact-input .v-application--is-ltr .v-text-field .v-label {
  color: white !important;
}
</style>
