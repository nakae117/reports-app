import { defineStore } from 'pinia';

export const useReviewRequestStore = defineStore('review-request', {
	state: () => {
		return {
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
});
