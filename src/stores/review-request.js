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

	getters: {
		validateRequest: (state) => {
			const DEFAULTS = {
				comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
				task: "https://app.website.com/H1232",
				branch: "CU-John-Doe-X0000",
				pr: "https://github.com/repo/sitorio/pull/1",
			};
			const comment = state.form.comment.trim() || DEFAULTS.comment;
			const task = state.form.task.trim() || DEFAULTS.task;
			const branch = state.form.branch.trim() || DEFAULTS.branch;
			const pr = state.form.pr.trim() || DEFAULTS.pr;

			return {
				comment: { text: comment, class: { 'text-grey': comment === DEFAULTS.comment }, },
				task: { text: task, class: { 'text-grey': task === DEFAULTS.task }, },
				branch: { text: branch, class: { 'text-grey': branch === DEFAULTS.branch }, },
				pr: { text: pr, class: { 'text-grey': pr === DEFAULTS.pr }, },
			};
		},
	},
});
