import {http} from './config'

export default {
	enviar: ({ email, nome, msg }) => {
		return http.post('mail.php', {email, nome, msg});
	},
}