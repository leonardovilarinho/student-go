import {http} from './configuracao'

export default {
	enviar: ({ email, nome, msg }) => {
		return http.post('mail.php', {email, nome, msg});
	},
}