<template>
	<div>
		<sg-card titulo="Resultado do questionário" valor="100">
			<div>
				<h3>
					Seu resultado foi '{{ resultado }}'
				</h3>

				<div>
					<span class="txt">
						<div>Primeiramente, agradecemos a você pela disposição e cooperação ao participar da nossa pesquisa, através da sua avaliação vem sendo possível melhorar o trabalho desenvolvido. Diante do estudo desenvolvido conclui que é de suma importância para o aprendizado, que o indivíduo possua informações suficientes para elaborar sua própria maneira de estudo, tais características ficam explicitas nos seguintes perfis de aprendizagem: Auditivo, Sinestésico e/ou Visual, que foram identificados com a participação do público alvo de discentes no IFTM – Campus Ituiutaba, visando o melhor desempenho destes buscamos trazer dicas de estudo presentes em cada personalidade específica.</div>
						<div> De acordo com o questionário respondido, o perfil que prevalece em você é o de aluno: <strong>{{resultado}}</strong>. Propomos que você siga as orientações citadas a seguir para que assim consiga explorar ao máximo sua própria capacidade.</div>
						<div>É interessante destacar que todas as pessoas possui os três tipos de percepção, no entanto apenas um prevalece, sendo assim, fica nítida a necessidade do conhecimento sobre os três meios.</div>
						<div>
							<strong>Alunos auditivos</strong> processam o conteúdo facilmente associando-o a recursos sonoros, algumas dicas podem facilitar no processo de compreensão, como:
							<ul>
								<li>Estudar em voz alta;</li>
								<li>Atribuir palavras chaves ao conteúdo;</li>
								<li>Associar o estudo a letras de músicas, ou mesmo paródias;</li>
								<li>Explorar gravações de áudio que lhe façam pensar sobre a matéria;</li>
								<li>Participar debates poderá ser extremante produtivo;</li>
							</ul>
						</div>

						<div>
							<strong>Alunos sinestésicos</strong> se desenvolvem melhor através de uma abordagem mais dinâmica. Se movimentando, tocando e fazendo... Algumas sugestões de estudos podem ser válidas:
							<ul>
								<li>Aulas proativas são ótimas para estudantes com esse perfil;</li>
								<li>Usar técnicas de memorização que envolva gestos;</li>
								<li>Realizar intervalos frequentes no decorrer do estudo;</li>
								<li>Sempre mudar o local e a posição em que se estuda;</li>
								<li>Explorar livros que tragam exemplos cotidianos;</li>
							</ul>
						</div>

						<div>
							Alunos Visuais se sentem mais confortáveis em aprender fazendo uso da visão e seus respectivos recursos. Para usufruírem de todo seu potencial, há algumas instruções:
							<ul>
								<li>Escrever informações que precisem se lembrar;</li>
								<li>Elaborar diagramas e infográficos pessoais, transformando-os em esquemas;</li>
								<li>Explorar os mapas mentais;</li>
								<li>Realizar leituras silenciosas sobre o conteúdo em questão;</li>
								<li>Ao estudar, destacar trechos importantes;</li>
							</ul>
						</div>

					</span>

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
					Enviar resultado para o IFTM
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

		if(respostas.A > respostas.B && respostas.A > respostas.C)
			this.resultado = "Auditivo"
		else if(respostas.B > respostas.A && respostas.B > respostas.C)
			this.resultado = "Sinestésico"
		else if(respostas.C > respostas.A && respostas.C > respostas.B)
			this.resultado = "Visual"
		else if(respostas.A == respostas.B && respostas.A > respostas.C)
			this.resultado = "Auditivo e Sinestésico"
		else if(respostas.B == respostas.C && respostas.B > respostas.A)
			this.resultado = "Sinestésico e Visual"
		else if(respostas.A == respostas.C && respostas.A > respostas.B)
			this.resultado = "Auditivo e Visual"
		else
			this.resultado = "Auditivo, Sinestésico e Visual"

		localStorage.setItem('resultado', this.resultado)
	},
	methods: {
		reiniciar() {
			this.$router.replace('/')
		},
		enviar() {
			if(this.nome != '' && this.email != '') {
				let corpo = `${this.nome} com o email ${this.email} fez o teste e foi captado o resultado: ${this.resultado}`
				window.location = 'mailto:pesquisaxextensao@gmail.com?subject=[Q.PERFIL] Nova resposta&body=' + corpo
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
	span.txt {
		text-align: justify;
	}
	span.txt div {
		padding: 10px;
	}
</style>