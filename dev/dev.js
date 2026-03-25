import { createApp, h } from 'vue'
import DevApp from './DevApp.vue'

createApp({
	render: () => h(DevApp),
}).mount('#app')
