import Vue from 'vue'
import VueSwal from 'vue-swal'

Vue.use(VueSwal)

export default (ctx, inject) => {
  ctx.$swal = Vue.$swal
  inject('swal', Vue.$swal)
}
