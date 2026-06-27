import { defineStore } from 'pinia';

export const serverRequestStore = defineStore('server-request', {
	state: () => ({
		form: {
			clickUP: "",
			from: "",
			back: "v100",
		},
	}),

	getters: {
		validateServerRequest: (state) => {
			const DEFAULTS = { clickUP: "example.com", from: "CU-XXXXXXX_XXXXX-XXXX", back: "v100.example" };
			const clickUP = state.form.clickUP.trim() || DEFAULTS.clickUP;
			const from    = state.form.from.trim() || DEFAULTS.from;
			const back    = state.form.back.trim() || DEFAULTS.back;

			return {
				clickUP: { url: clickUP, clase: { 'text-grey': clickUP === DEFAULTS.clickUP } },
				from: { url: from, clase: { 'text-grey': from === DEFAULTS.from } },
				back: { url: back, clase: { 'text-grey': back === DEFAULTS.back } },
			};
		}
	}
});