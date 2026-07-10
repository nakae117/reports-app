import { defineStore } from 'pinia';

export const useNotifyStore = defineStore('notify', {
	state: () => ({
		notify: {
			show: false,
			text: "",
		},
	}),

	actions: {
		showNotify(text) {
			Object.assign(this.notify, {
				show: true,
				text: text,
			});
		},
	},
});