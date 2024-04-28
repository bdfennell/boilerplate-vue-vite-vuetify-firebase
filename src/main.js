import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Service worker
import { registerSW } from 'virtual:pwa-register'
registerSW({ immediate: true });

// Firebase
import { auth } from './plugins/firebase.js'
import { onAuthStateChanged } from "firebase/auth";


// Vuetify
import vuetify from './plugins/vuetify'
import router from './plugins/router'

let app = null


onAuthStateChanged(auth, async () => {
    if(!app) {
        app = createApp(App)
            .use(vuetify)
            .use(router)
            .mount('#app')
    }

})