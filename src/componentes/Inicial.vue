<template>
	<div>
		<b-alert :show="ultresultado != '' && ultresultado != null" state="success" dismissible>
		  Você já fez o teste, seu último resultado foi: {{ ultresultado }}
		</b-alert>
		<sg-card titulo="Bem-vindo ao Student GO" :valor="100">
			<div>
				<p style="font-size: 16pt">
					<strong>Student Go</strong> é um projeto avaliativo para discentes, onde o objetivo é elaborar um questionário com perguntas específicas sobre formas de aprendizagens e comportamentos durante os estudos, onde o resultado final em relação as respostas do aluno, implicará em um método de aprendizagem ao qual o mesmo se identifica. Podendo assim, passar a utilizar os métodos e técnicas resultantes do formulário, facilitando-o na sua aprendizagem durante as aulas e estudos autônomos.
				</p>

				<b-button size="sm" variant="success" @click="iniciar">
					Iniciar teste!
				</b-button>
			</div>
		</sg-card>
	</div>
</template>
<script>
import SgCard from './Card.vue'

export default {
	name: 'sg-inicial',
	components: {SgCard},
	data() {
		return { ultresultado: "" }
	},
	created() {
		this.$store.commit('limpar')
		console.log(localStorage.getItem('resultado'))
		this.ultresultado = localStorage.getItem('resultado')
	},
	methods: {
		iniciar() {
			this.$router.replace('perguntas')
		}
	}
}
</script>
<style></style>