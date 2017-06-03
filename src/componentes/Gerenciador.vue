<template>
	<div>
		<sg-card :titulo="perguntaatual" :valor="porcentagem">
			<div>
				<p>
					{{pergunta.titulo}}
				</p>

				<div>
					<sg-form-radio v-model="resposta" :items="pergunta.alternativas" stacked returnObject ref="radio"/>
				</div>

				<b-button size="sm" variant="success" @click="responder">
					Responder!
				</b-button>
			</div>
		</sg-card>
	</div>
</template>
<script>
import SgCard from './Card.vue'
import SgFormRadio from './FormRadio.vue'

export default{
	name: 'sg-gerenciador',
	components: {SgCard, SgFormRadio},
	data() {
		return {
			pergunta: {},
			resposta: {},
			porcentagem: 0,
			quantidade : 0,
			etapa: 0
		}
	},
	created() {
		this.resposta = {text: '', value: ''}
		this.pergunta = this.$store.state.perguntas[0]
		this.quantidade = this.$store.state.perguntas.length
		this.etapa = parseFloat((100 / this.quantidade).toFixed(2))
	},
	computed: {
		perguntaatual() {
			return `${this.$store.state.atual}ª pergunta de ${this.quantidade}`
		}
	},
	methods: {
		responder() {

			if(this.resposta.value != '') {
				this.$store.commit(
					'responde',
					this.resposta.value
				)
				this.$refs['radio'].desmarcar();
				
				this.proxima()
			}
		},
		proxima() {

			if(this.$store.state.atual > this.quantidade)
				this.$router.replace('/resultado')
			else {
				this.pergunta = this.$store.state.perguntas[ this.$store.state.atual - 1 ]
				this.porcentagem += this.etapa
				this.porcentagem = parseFloat(this.porcentagem.toFixed(2))
			}
		}
	}
}
</script>
<style></style>