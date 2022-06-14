<template>
  <v-app class="main-content">
    <v-main>
      <section>
        <v-parallax :src="imageLink.main" height="600" class="object-cover">
          <v-layout column align-center justify-center class="white--text">
            <h1
              class="white--text mb-2 display-1 text-xs-center"
              style="font-weight: 900; text-shadow: 3px 2px #000000"
            >
              Plants for the people
            </h1>
            <div
              class="white--text subheading mb-3 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000"
            >
              We offer a curated selection of indoor and outdoor plants, hand crafted home goods, and living art.
            </div>
            <v-btn class="action_btn" large>
              Shop now
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="app-color my-3">
            <div class="text-xs-center">
              <h2 class="headline font-extrabold flex justify-center mb-3">
                Outside In
              </h2>
              <span class="subheading flex justify-center">
                We’re here to help re-connect people with the natural world, and to inspire them to build and maintain more beautiful spaces.
                <br>
                Whether you know nothing about owning plants or are an experienced green-thumb, we hope to see you in the shop soon.
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="flex justify-center text-xs-center">
                      <v-icon x-large class="app-color">mdi-earth</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="flex justify-center headline text-xs-center">
                        Reach the world
                      </div>
                    </v-card-title>
                    <v-card-text class="flex justify-center min-h-[150px]">
                      We want our visitors to be inspired to get their hands dirty. We have a passionate and knowledgeable team at your disposal with helpful tips and tricks, and all the supplies you need to get creative at home.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="flex justify-center text-xs-center">
                      <v-icon x-large class="app-color">mdi-message-alert</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="flex justify-center layout">
                      <div class="headline">Fast feedback</div>
                    </v-card-title>
                    <v-card-text class="flex justify-center min-h-[150px]">
                      We offer a carefully curated selection of indoor and outdoor plants, hand crafted home goods that put quality ahead of quantity, and living art made right here in the shop: terrariums, landscapes, arrangements, vessels, and holders.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="flex justify-center text-xs-center">
                      <v-icon x-large class="app-color">mdi-share-variant</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="flex layout justify-center">
                      <div class="headline text-xs-center">
                        Connections
                      </div>
                    </v-card-title>
                    <v-card-text class="flex justify-center min-h-[150px]">
                      We’re here to help re-connect people with the natural world, and to inspire them to build and maintain more beautiful spaces.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
      title: 'Endorfine',
      imageLink: {
        main: 'https://cdn.shopify.com/s/files/1/0508/5147/9723/files/Homepage_Slider_AUG2016_Welcome6_1512x.jpg?v=1604934411',
        // main: 'https://cdn.shopify.com/s/files/1/0508/5147/9723/files/Homepage_Slider_AUG2016_Welcome12_1512x.jpg?v=1604934411',
        // main: 'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea',
        sub_main:
          'https://img.freepik.com/free-photo/green-wall-mockup-with-green-plant-shelf3d-rendering_41470-4114.jpg?w=1380&t=st=1654439870~exp=1654440470~hmac=ff4d20770ede510a0b14ec572dac0b987eafd1a782f282b35f052e0d396604d2',
        logo: 'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df',
        social_cover:
          'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4'
      },
      subscribed: false
    }
  },
  computed: {
    imgHeight () {
      const offset = 320
      console.log('new image height is ' + (this.pageHeight - offset))
      return this.pageHeight - offset
    }
  },

  mounted () {
    // this.calculateHeight();
  }
}
</script>

<style scoped>
.v-card__text, .v-card__title {
  color: #284139 !important;
}
</style>
