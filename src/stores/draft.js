import { defineStore } from 'pinia';
import { useNotifyStore } from "./notify";

export const useDraftStore = defineStore('draft', {
	actions: {
		save({ store, form, msg }) {
			localStorage.setItem(store, JSON.stringify(form));

			const notifyStore = useNotifyStore();
			notifyStore.showNotify(msg);
		},

		load(store) {
			return JSON.parse(localStorage.getItem(store));
		},

		reset(store) {
			localStorage.removeItem(store);
		},
	},
});