import { defineStore } from 'pinia';
import { useDraftStore } from "./draft";
import { useNotifyStore } from "./notify";

const formDefault = {
	comment: "",
	task: "",
	branch: "",
	pr: "",
	note: "",
	priority: "",
}

export const useReviewRequestStore = defineStore('review-request', {
	state: () => {
		return {
			store: "review-request",
			form: {
				comment: "",
				task: "",
				branch: "",
				pr: "",
				note: "",
				priority: "",
			},
		};
	},

	actions: {
		saveDraft() {
			const draftStore = useDraftStore();

			draftStore.save({
				store: this.store,
				form: this.form,
				msg: "Borrador guardado con éxito",
			});
		},

		loadDraft() {
			const draftStore = useDraftStore();

			const reviewRequest = draftStore.load(this.store);

			if(reviewRequest) {
				Object.assign(this.form, reviewRequest);
			}
		},

		reset() {
			const draftStore = useDraftStore();
			draftStore.reset(this.store);

			Object.assign(this.form, formDefault);
			
			const notifyStore = useNotifyStore();
			notifyStore.showNotify("Formulario limpio");
		},
	},
});
