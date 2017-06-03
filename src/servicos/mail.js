import {http} from './config'

export default {
	enviar: (email, nome, msg) => {
		return http.get(`mail.php?email=${email}&nome=${nome}&msg=${msg}`);
	},
}