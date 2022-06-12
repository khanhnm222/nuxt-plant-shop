<template>
  <div>
    <div class="main-content">
      <div class="app-color flex justify-center font-semibold underline text-3xl">
        Sign In
      </div>
      <div class="flex">
        <v-container fluid>
          <v-layout class="justify-center" row wrap>
            <v-flex class="form-contain xs12 sm6 offset-sm3 mt-3">
              <form class="form-info w-full">
                <v-layout column>
                  <v-flex>
                    <v-text-field
                      id="email"
                      v-model="email"
                      name="email"
                      label="Email"
                      type="email"
                      required
                    />
                  </v-flex>
                  <v-flex>
                    <v-text-field
                      id="password"
                      v-model="password"
                      name="password"
                      label="Password"
                      required
                      :type="password ? 'password' : 'text'"
                      :append-icon="password ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                      @click:append="() => (password = !password)"
                    />
                  </v-flex>
                  <v-flex class="text-xs-center" mt-5>
                    <v-btn class="action_btn" type="submit" @click="handleSubmit">
                      Sign In
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SingIn',
  data () {
    return {
      email: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit (e) {
      debugger
      console.log('submit login', e)
      this.submitted = true
      const { email, password } = this
      if (email && password) {
        this.login({ email, password })
      }
    }
  }
}
</script>
<style>
.form-info {
  border: 2px solid #284139;
  padding: 30px;
  border-radius: 10px;
}

.form-contain {
  margin: 0 auto;
}
</style>
