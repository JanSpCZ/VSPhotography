import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

//Import used icons here
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faInstagram, faFacebook)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)

app.mount('#app')
