<template>
  <span>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon small>fas fa-{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
          <v-icon>fas fa-bars</v-icon>
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title class="green--text">
        <router-link to="/" tag="span" style="cursor: pointer">{{ appTitle }}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">{{ item.title }}</v-btn>
      </v-toolbar-items>

      <div v-if="!isAuthenticated">
        <v-toolbar-items>
          <v-btn dark small icon color="black" to="/signup">
            <v-icon small>fas fa-user-plus</v-icon>
          </v-btn>

          <v-btn dark small icon color="green" to="/signin">
            <v-icon small>fas fa-sign-in-alt</v-icon>
          </v-btn>
        </v-toolbar-items>
      </div>
      <div v-else>
        <v-btn outline small icon color="green" to="/dashboard">
          <v-icon small>fas fa-user</v-icon>
        </v-btn>
        <v-btn dark small icon color="green" @click="logout" data-cy="logout">
          <v-icon small>fas fa-sign-out-alt</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
  </span>
</template>
<script>
export default {
  name: 'AppNavigationBar',
  data () {
    return {
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/', icon: 'home' },
        { title: 'About', path: '/about', icon: 'chevron-right' },
        { title: 'Product', path: '/product', icon: 'chevron-right' }
      ]
    };
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
};
</script>
<style>
</style>

