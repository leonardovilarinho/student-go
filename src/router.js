import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicial from './componentes/Inicial.vue'
import Pergunta from './componentes/Pergunta.vue'
import Resultado from './componentes/Resultado.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{path: '/', component: Inicial},
		{path: '/pergunta', component: Pergunta},
		{path: '/resultado', component: Resultado}
	],
	history: true
});