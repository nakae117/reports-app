import { defineStore } from 'pinia';

const formDefault = {
	tasks: [],
}

export const useReportComposeStore = defineStore('report-compose', {
	state: () => ({
		form: {
			tasks: [],
		},
	}),

	actions: {
		addTask() {
			this.form.tasks.push({
				code: "",
				phase: "🏗️ In progress",
				progress: "0",
				status: "🟢",
				comment: "",
			});
		},
	},
});