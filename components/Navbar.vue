<template>
  <div class="w-full top-0 z-20">
    <header>
      <nav class="bg-main-color px-4 sm:px-6 lg:px-8 border-b border-ui-medium flex items-center justify-between">
        <div class="flex items-center">
          <nuxt-link to="/" class="cursor-pointer app-logo">
            PLANT SHOP
          </nuxt-link>
          <div class="hidden lg:flex lg:items-center uppercase">
            <div class="hidden flex-grow items-center justify-center lg:flex text-sm font-medium">
              <!-- <nuxt-link
                v-for="navbar in navbarMenu"
                :key="navbar.id"
                :to="navbar.link"
                class="header-color block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-600 last:mr-0"
              >
                {{ navbar.label }}
              </nuxt-link> -->
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
              <button
                class="cart inline-flex items-center justify-center w-full py-2 bg-white text-sm font-medium hover:opacity-1/2"
                type="button"
              >
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.9968 16.2273C14.9921 16.1189 14.9888 16.0004 14.9877 15.8734C14.9826 15.2497 15.0333 14.4053 15.2648 13.551C15.4962 12.6975 15.9164 11.8043 16.6719 11.123C17.4366 10.4333 18.5016 10 19.9419 10C21.3822 10 22.4472 10.4333 23.212 11.123C23.9674 11.8043 24.3877 12.6975 24.619 13.551C24.8506 14.4053 24.9012 15.2497 24.8961 15.8734C24.8951 16.0004 24.8917 16.1189 24.887 16.2273H27.8836C29.0776 16.2273 30.0056 17.2667 29.8708 18.4531L28.7344 28.4531C28.6196 29.4638 27.7644 30.2273 26.7472 30.2273H13.1366C12.1194 30.2273 11.2643 29.4638 11.1494 28.4531L10.013 18.4531C9.87822 17.2667 10.8062 16.2273 12.0002 16.2273H14.9968ZM23.8859 16.2273C23.8912 16.1186 23.8951 15.9971 23.8962 15.8652C23.9008 15.2957 23.8535 14.5493 23.6538 13.8126C23.454 13.0752 23.1098 12.3775 22.5422 11.8656C21.984 11.3622 21.1673 11 19.9419 11C18.7165 11 17.8999 11.3622 17.3416 11.8656C16.774 12.3775 16.4299 13.0752 16.23 13.8126C16.0303 14.5493 15.983 15.2957 15.9877 15.8652C15.9888 15.9971 15.9926 16.1186 15.9979 16.2273H23.8859ZM12.0002 17.2273H27.8836C28.4806 17.2273 28.9446 17.747 28.8772 18.3402L27.7408 28.3402C27.6834 28.8455 27.2558 29.2273 26.7472 29.2273H13.1366C12.628 29.2273 12.2004 28.8455 12.143 28.3402L11.0066 18.3402C10.9392 17.747 11.4032 17.2273 12.0002 17.2273ZM15.4874 20.0455C15.8388 20.0455 16.1237 19.7605 16.1237 19.4091C16.1237 19.0576 15.8388 18.7727 15.4874 18.7727C15.1359 18.7727 14.851 19.0576 14.851 19.4091C14.851 19.7605 15.1359 20.0455 15.4874 20.0455ZM25.0328 19.4091C25.0328 19.7605 24.7479 20.0455 24.3965 20.0455C24.045 20.0455 23.7601 19.7605 23.7601 19.4091C23.7601 19.0576 24.045 18.7727 24.3965 18.7727C24.7479 18.7727 25.0328 19.0576 25.0328 19.4091Z"
                    fill="white"
                  />
                </svg>
                <span>0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data () {
    return {
      menuItems: [
        { id: 1, path: '/', title: 'Home', icon: 'home' },
        { id: 2, path: '/products', title: 'Products', icon: 'chevron-right' },
        { id: 3, path: '/blogs', title: 'Blogs', icon: 'chevron-right' },
        { id: 4, path: '/contact', title: 'Contact', icon: 'chevron-right' }
      ]
    }
  }
}
</script>
<style>
header nav {
  position: fixed;
  z-index: 99;
  background-color: #284139;
  width: 100%;
}
a,
a:visited,
button,
button:visited {
  color: white !important;
}
a:hover,
button:hover {
  color: #c09763 !important;
}
a.nuxt-link-active {
  -webkit-text-decoration-color: white;
  text-decoration-color: white;
}
.cart {
  color: white;
  background-color: #284139;
}
.svg:hover {
  fill: #c09763
}
.user {
  color: white;
}

.app-logo {
  margin-right: 50px;
  font-weight: 600;
}
.app-logo:visited {
  color: #c09763 !important;
}

.v-application {
  position: unset;
}

.account_btn {
  background-color: #284139 !important;
  color: #c09763 !important;
  border-radius: 0%;
  box-shadow: none;
}
.account_btn:hover {
  background-color: #c09763 !important;
  color: #284139 !important;
}

</style>
