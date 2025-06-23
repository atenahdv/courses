import { createApp } from 'vue';
import ExampleComponent from './pages/main.vue';
import en from './lang/en'
import de from './lang/de'
import {createI18n} from "vue-i18n";
import naive from 'naive-ui'



const messages = {
    en,
    de
}

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'de',
    fallbackLocale: 'de',
    messages,
})

const app = createApp({
    components: { ExampleComponent }
})

app.use(i18n)
app.use(naive)
app.mount('#app')
