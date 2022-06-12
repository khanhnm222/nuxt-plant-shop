<template>
  <v-app class="main-content">
    <v-main>
      <section>
        <v-parallax :src="imageLink.sub_main" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1
              class="white--text mb-2 display-1 text-xs-center"
              style="font-weight: 900; text-shadow: 3px 2px #000000"
            >
              The social network for epic content
            </h1>
            <div
              class="white--text subheading mb-3 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000"
            >
              Unlesh your creativity without limitations
            </div>
            <v-btn class="blue lighten-2 mt-5" large> Get Started </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="app-color my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to share your amazing stuff</h2>
              <span class="subheading">
                No more restrictions, no more limits
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="flex justify-center text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-earth</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="flex justify-center headline text-xs-center">Reach the world</div>
                    </v-card-title>
                    <v-card-text class="flex justify-center">
                      Show your stuff to the whole community of Endorfine not
                      only to your mum or your friends. We love making good
                      content viral. In this moment Endorfine is used by artists
                      who are not famous but that want to share their works to
                      the world. Unfortunately with other social networks this
                      is hard, slow and sometime expensive.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="flex justify-center text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-message-alert</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="flex justify-center layout">
                      <div class="headline">Fast feedback</div>
                    </v-card-title>
                    <v-card-text class="flex justify-center">
                      Time is important, we don't want you to waste it. Here you
                      can get a massive feedback from real users in minutes. And
                      if your stuff is appreciated you won't only get positive
                      feedback but also lovely and sincere fans
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="flex justify-center text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-share-variant</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="flex layout justify-center">
                      <div class="headline text-xs-center">
                        Create new connections
                      </div>
                    </v-card-title>
                    <v-card-text class="flex justify-center">
                      Imagine if you can directly speak with the world's
                      population. Don't you think it would be easier to find
                      nice people to interact with? Endorfine is both local and
                      global and help you to connect without limitations with
                      people from your city, your state and your universe!
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
  data () {
    return {
      title: 'Endorfine',
      imageLink: {
        main: 'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea',
        sub_main:
          'https://img.freepik.com/free-photo/green-wall-mockup-with-green-plant-shelf3d-rendering_41470-4114.jpg?w=1380&t=st=1654439870~exp=1654440470~hmac=ff4d20770ede510a0b14ec572dac0b987eafd1a782f282b35f052e0d396604d2',
        logo: 'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df',
        social_cover:
          'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4',
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
