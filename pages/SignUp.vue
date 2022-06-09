<template>
  <div class="main-content">
    <div class="flex justify-center font-semibold underline mb-6 text-3xl">
      Sign Up
    </div>
    <div class="flex">
      <v-container fluid>
        <v-layout class="justify-center" row wrap>
          <v-flex xs12 sm6 offset-sm3 mt-3>
            <form class="w-full">
              <v-layout column>
                <v-flex>
                  <v-text-field
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    required
                  />
                </v-flex>
                <v-flex>
                  <v-text-field
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    required
                  />
                </v-flex>
                <v-flex>
                  <v-text-field
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    required
                  />
                </v-flex>
                <v-flex class="text-xs-center" mt-5>
                  <v-btn class="action_btn" type="submit">
                    Sign Up
                  </v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingUp'
}
</script>
