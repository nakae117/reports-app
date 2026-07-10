import { defineStore } from 'pinia';

export const useServerRequestStore = defineStore('server-request', {
	state: () => ({
		form: {
			clickUP: "",
			from: "",
			back: "v100",
		},
	}),
});