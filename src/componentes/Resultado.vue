<template>
	<div>
		<sg-card titulo="Resultado do questionário" valor="100">
			<div>
				<p>
					{{ resultado.titulo }}
				</p>

				<div>
					{{ resultado.descricao }}

					<hr>

					<div class="formulario">
						<small><strong>Registre seu resultado para nos ajudar:</strong></small>

						<b-form-input v-model="nome" :state="nome.length?'success':'warning'"
							type="text" placeholder="Digite seu nome">
						</b-form-input>
						<br>
						<b-form-input v-model="email" :state="email.length?'success':'warning'"
							type="email" placeholder="Digite seu email">
						</b-form-input>
						<br>
					</div>
				</div>

				<b-button size="sm" variant="success" @click="enviar">
					Enviar resultado
				</b-button>
				<b-button size="sm" variant="success" @click="reiniciar">
					Reiniciar teste
				</b-button>
			</div>
		</sg-card>
	</div>
</template>
<script>
import SgCard from './Card.vue'

export default{
	name: 'sg-resultado',
	components: {SgCard},
	data() {
		return {
			resultado: {},
			nome: "",
			email: ""
		}
	},
	created() {
		let respostas = this.$store.state.respostas

		if(respostas.A > respostas.B && respostas.A > respostas.C) {
			this.resultado.titulo = "Voce é o aluno A"
			this.resultado.descricao = "Porque você respondeu a maioria A"
		}
		else if(respostas.B > respostas.A && respostas.B > respostas.C) {
			this.resultado.titulo = "Voce é o aluno B"
			this.resultado.descricao = "Porque você respondeu a maioria B"
		}
		else if(respostas.C > respostas.A && respostas.C > respostas.B) {
			this.resultado.titulo = "Voce é o aluno C"
			this.resultado.descricao = "Porque você respondeu a maioria C"
		}
		else if(respostas.A == respostas.B && respostas.A > respostas.C) {
			this.resultado.titulo = "Voce é o aluno AB"
			this.resultado.descricao = "Porque você respondeu a maioria AB"
		}
		else if(respostas.B == respostas.C && respostas.B > respostas.A) {
			this.resultado.titulo = "Voce é o aluno BC"
			this.resultado.descricao = "Porque você respondeu a maioria BC"
		}
		else if(respostas.A == respostas.C && respostas.A > respostas.B) {
			this.resultado.titulo = "Voce é o aluno AC"
			this.resultado.descricao = "Porque você respondeu a maioria AC"
		}
		else {
			this.resultado.titulo = "Voce é o aluno ABC"
			this.resultado.descricao = "Porque você respondeu a maioria ABC"
		}

		localStorage.setItem('resultado', this.resultado.titulo)
	},
	methods: {
		reiniciar() {
			this.$router.replace('/')
		},
		enviar() {
			if(this.nome != '' && this.email != '') {
				let corpo = `${this.nome} com o email ${this.email} fez o teste e foi captado o resultado: ${this.resultado.titulo}`
				window.open(`mailto:reane@iftm.edu.br?subject=Resultado Questionário - Perfil Aluno&body=${corpo}`);
			}
		}
	}
}

</script>
<style>
	div.formulario {
		margin-left: auto;
		margin-right: auto;
		width: 80%;
	}
</style>