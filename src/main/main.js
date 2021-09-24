import {createApp} from "vue"
import App from "@app/App.vue"
import router from "@app/router"
import store from "@app/store"

//Import bulma
import "bulma/css/bulma.min.css"

createApp(App).use(store)
    .use(router)
    .mount("#app")
