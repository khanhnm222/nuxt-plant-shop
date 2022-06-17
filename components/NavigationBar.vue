<template>
  <v-app>
    <div>
      <v-app-bar app class="bg-main-color h-screen">
        <!-- Add this class to show menu icon only on small screen -->
        <v-app-bar-nav-icon
          class="d-flex d-md-none"
          @click="drawer = true"
        />
        <div class="flex items-center">
          <nuxt-link to="/" class="cursor-pointer app-logo">
            ❤ PLANT SHOP
          </nuxt-link>
          <div class="hidden lg:flex lg:items-center uppercase">
            <div class="hidden flex-grow items-center justify-center lg:flex text-sm font-medium">
              <v-btn
                v-for="menu in menuItems"
                :key="menu.id"
                :to="menu.path"
                :exact="true"
                rounded
                text
                class="header-color my-2"
              >
                {{ menu.title }}
              </v-btn>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end">
          <div class="hidden lg:flex">
            <div class="inline-block relative text-left">
              <v-btn
                class="account_btn user inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-600"
                type="button"
                to="/signin"
                :exact="true"
              >
                Sign In
              </v-btn>
            </div>
            <div class="relative inline-block text-left">
              <div>
                <v-btn
                  class="account_btn user inline-flex justify-center w-full px-4 py-2 text-sm font-medium"
                  type="button"
                  to="/signup"
                  :exact="true"
                >
                  Sign Up
                </v-btn>
              </div>
            </div>
          </div><div class="relative inline-block text-left">
            <div>
              <nuxt-link
                class="cart inline-flex items-center justify-center w-full"
                to="/cart"
              >
                <!-- <v-icon size="20">
                  mdi-cart-outline
                </v-icon>
                <span class="ml-2">0</span> -->
                <v-badge
                  overlap
                  :content="`${$store.state.cart.cart.length ? $store.state.cart.cart.length : '0'}`"
                >
                  <v-btn nuxt to="/cart" icon>
                    <v-icon size="20">
                      mdi-cart-outline
                    </v-icon>
                  </v-btn>
                </v-badge>
              </nuxt-link>
            </div>
          </div>
        </div>
      </v-app-bar>

      <!-- Add a navigation bar -->
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        class="bg-main-color"
      >
        <div class="flex items-center justify-end mt-4">
          <div class="lg:flex">
            <div class="inline-block relative text-left">
              <v-btn
                class="account_btn user inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-600"
                type="button"
                to="/signin"
                :exact="true"
              >
                Sign In
              </v-btn>
            </div>
            <div class="relative inline-block text-left">
              <div>
                <v-btn
                  class="account_btn user inline-flex justify-center w-full px-4 py-2 text-sm font-medium"
                  type="button"
                  to="/signup"
                  :exact="true"
                >
                  Sign Up
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <v-list
          nav
          dense
          class="mt-6"
        >
          <v-list-item-group>
            <v-list-item v-for="(item, index) in menuItems" :key="index" :to="item.path" exact>
              <v-icon class="mr-4">
                {{ item.icon }}
              </v-icon>
              {{ item.title }}
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <Nuxt />
      <Footer />
    </div>
  </v-app>
</template>
<script>
export default {
  name: 'AppNavigationBar',
  data () {
    return {
      drawer: false,
      menuItems: [
        { id: 1, path: '/', title: 'Home', icon: 'mdi-home' },
        { id: 2, path: '/products', title: 'Products', icon: 'mdi-sprout' },
        { id: 3, path: '/blogs', title: 'Blogs', icon: 'mdi-post-outline' },
        { id: 4, path: '/contact', title: 'Contact', icon: 'mdi-account-box-outline' }
      ]
    }
  },
  computed: {
    appTitle () {
      return this.$store.state.appTitle
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('userSignOut')
    }
  }
}
</script>
<style>
.v-toolbar__content {
  margin: 0 30px;
}

.cart a {
  height: 40px !important;
  width: 40px !important;
}

.v-badge .v-badge__wrapper .v-badge__badge {
  background-color: #c09763 !important;
  color: #284139 !important;
}
</style>
