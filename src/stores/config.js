import { defineStore } from 'pinia';

const formDefault = {
	user: "",
	format_date: "dd/LL/yyyy",
}

export const useConfigStore = defineStore('config', {
	state: () => ({
		form: {
			user: "",
			format_date: "dd/LL/yyyy",
		},
	}),

	actions: {
		saveConfig() {
			localStorage.setItem("config", JSON.stringify(this.form));
			console.log("guardado")
		},

		loadConfig() {
			const config = JSON.parse(localStorage.getItem("config"));

			Object.assign(this.form, config);
		},

		resetConfig() {
			localStorage.removeItem("config");
			Object.assign(this.form, formDefault);
		},
	},
});