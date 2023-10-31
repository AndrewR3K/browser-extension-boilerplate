import { createApp } from 'vue'
import App from './App.vue'

const div = document.createElement("div")
div.setAttribute("id", 'extension-app');
document.body.insertBefore(div, document.body.firstChild);

createApp(App).mount('#extension-app')