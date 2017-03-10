import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicial from './componentes/Inicial.vue'
import Gerenciador from './componentes/Gerenciador.vue'
import Resultado from './componentes/Resultado.vue'
import Sobre from './componentes/Sobre.vue'


Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{path: '/', component: Inicial},
		{path: '/perguntas', component: Gerenciador},
		{path: '/resultado', component: Resultado},
		{path: '/sobre', component: Sobre}
	],
	history: true
});