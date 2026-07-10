import { defineStore } from 'pinia';
import { useNotifyStore } from "./notify";

const formDefault = {
	tasks: [],
	meetings: [],
	communications: [],
	pr_today: "",
	pr_month: "",
	comment: "",
}

export const useReportComposeStore = defineStore('report-compose', {
	state: () => ({
		form: {
			tasks: [],
			meetings: [],
			communications: [],
			pr_today: "",
			pr_month: "",
			comment: "",
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

		addMeeting() {
			this.form.meetings.push({
				reason: "",
				comment: "",
			});
		},

		addCommunication() {
			this.form.communications.push({
				reason: "",
				comment: "",
			});
		},

		removeTask(index) {
			this.form.tasks.splice(index, 1);
		},

		removeMeeting(index) {
			this.form.meetings.splice(index, 1);
		},

		removeCommunication(index) {
			this.form.communications.splice(index, 1);
		},

		saveDraft() {
			localStorage.setItem("report-compose", JSON.stringify(this.form));

			const notifyStore = useNotifyStore();
			notifyStore.showNotify("Borrador guardado exitósamente");
		},

		loadDraft() {
			const reportCompose = JSON.parse(localStorage.getItem("report-compose"));

			if(reportCompose) {
				Object.assign(this.form, reportCompose);
			}
		},

		reset() {
			localStorage.removeItem("report-compose");
			Object.assign(this.form, formDefault);

			const notifyStore = useNotifyStore();
			notifyStore.showNotify("Formulario limpio");
		},
	},
});