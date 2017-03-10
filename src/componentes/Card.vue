<template>
	<div class="card text-center">
		<div class="card-header">
			{{ titulo }}
		</div>

		<div class="card-block">
			<h4 class="card-title">
			{{ pergunta }}
			</h4>

			<div class="card-text">
				<slot></slot>
			</div>
		</div>

		<div class="card-footer text-muted">
			<div class="progress">
			  <div class="progress-bar bg-success" role="progressbar" :style="valorlargura" :aria-valuenow="valor" aria-valuemin="0" aria-valuemax="100">{{ valor }}%</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'sg-card',
		props: ['titulo', 'pergunta', 'valor'],
		computed: {
			valorlargura() {
				return `width: ${this.valor}%;`;
			}
		}
	}
</script>
<style>
	div.card {
		margin-left: 50px;
		margin-right: 50px;
		text-align: justify;
	}
</style>