export default {
	responde (state, letra) {
      state.respostas[letra] ++
      state.atual ++
    },
    limpar (state) {
		state.respostas = {
			A: 0,
			B: 0,
			C: 0
		}

		state.atual = 1
    }
}