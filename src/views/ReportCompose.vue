<script setup>
import { computed, onMounted, ref } from 'vue';
import { DateTime } from "luxon";
import { storeToRefs } from 'pinia';
import { useConfigStore } from "@/stores/config";
import { useReportComposeStore } from "@/stores/report-compose";
import RenderCopy from "@/components/misc/RenderCopy.vue";

const configStore = useConfigStore();
const reportComposeStore = useReportComposeStore();

const { form: formConfig } = storeToRefs(configStore);
const { form: formReport } = storeToRefs(reportComposeStore);

const date = computed(() => {
	const date = DateTime.now();

	return date.toFormat(formConfig.value.format_date);
});

const statusIcons = ref(["🟢", "🔴", "🟠"]);
const phases = ref(["🏗️ In progress", "🏗️ Pending", "🏗️ Closed", "🏗️ Testing", "🏗️ Ready for QA"]);

onMounted(() => {
	reportComposeStore.loadDraft();
});
</script>

<template>
	<v-row justify="center">
		<v-col cols="12" md="12">
			<render-copy>
				<template v-slot:form>
					<div class="form-report-compose pr-4">
						<v-expansion-panels rounded>
							<v-expansion-panel height="15">
								<v-expansion-panel-title color="primary">
									<template v-slot:default="{ expanded }">
										Tareas
										<v-spacer />

										<v-btn
											v-if="expanded"
											icon="add"
											@click.stop="reportComposeStore.addTask"
										/>
									 </template>
								</v-expansion-panel-title>

								<v-expansion-panel-text class="pt-4">
									<div v-if="formReport.tasks.length === 0">
										No se ha añadido una tarea
									</div>

									<fieldset
										v-for="(task, index) in formReport.tasks"
										:key="`task-key-${index}`"
										class="pa-4 mt-4 rounded-lg position-relative"
									>
										<legend>Información de la Tarea</legend>

										<v-btn
											class="position-absolute remove-task"
											icon
											density="compact"
											variant="flat"
											color="red"
											@click="reportComposeStore.removeTask(index)"
										>
											<v-icon size="16px">close</v-icon>
										</v-btn>

										<v-row class="row">
											<v-col cols="4">
												<v-text-field
													v-model="task.code"
													label="Código"
													prepend-inner-icon="tag"
													hide-details
												/>
											</v-col>

											<v-col cols="4">
												<v-select
													v-model="task.phase"
													label="Fase"
													:items="phases"
													hide-details
												/>
											</v-col>

											<v-col cols="2">
												<v-text-field
													v-model="task.progress"
													label="Progreso (%)"
													prepend-inner-icon="percent"
													hide-details
												/>
											</v-col>

											<v-col cols="2">
												<v-select
													v-model="task.status"
													label="Status"
													:items="statusIcons"
													hide-details
												/>
											</v-col>

											<v-col cols="12">
												<v-textarea
													v-model="task.comment"
													label="Comentarios"
													prepend-inner-icon="comment"
													hide-details
												/>
											</v-col>
										</v-row>
										<v-divider class="mt-3" />
									</fieldset>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel height="15">
								<v-expansion-panel-title color="primary">
									<template v-slot:default="{ expanded }">
										Reuniones
										<v-spacer></v-spacer>

										<v-btn v-if="expanded" icon="add" @click.stop="reportComposeStore.addMeeting" />
									 </template>
								</v-expansion-panel-title>

								<v-expansion-panel-text class="pt-4">
									<div v-if="formReport.meetings.length === 0">
										No se ha añadido una reunión
									</div>

									<fieldset
										v-for="(meet, index) in formReport.meetings"
										:key="`meet-key-${index}`"
										class="pa-4 mt-4 rounded-lg position-relative"
									>
										<legend>Información de la Reunión</legend>

										<v-btn
											class="position-absolute remove-task"
											icon
											density="compact"
											variant="flat"
											color="red"
											@click="reportComposeStore.removeMeeting(index)"
										>
											<v-icon size="16px">close</v-icon>
										</v-btn>

										<v-row>
											<v-col cols="12">
												<v-text-field
													v-model="meet.reason"
													label="Razón"
													prepend-inner-icon="person"
													hide-details
												/>
											</v-col>

											<v-col cols="12">
												<v-textarea
													v-model="meet.comment"
													label="Comentario"
													prepend-inner-icon="comment"
													hide-details
												/>
											</v-col>
										</v-row>
									</fieldset>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel height="15">
								<v-expansion-panel-title color="primary">
									<template v-slot:default="{ expanded }">
										Contactos
										<v-spacer></v-spacer>

										<v-btn v-if="expanded" icon="add" @click.stop="reportComposeStore.addCommunication" />
									 </template>
								</v-expansion-panel-title>

								<v-expansion-panel-text class="pt-4">
									<div v-if="formReport.communications.length === 0">
										No se ha añadido una comunicación
									</div>

									<fieldset
										v-for="(communication, index) in formReport.communications"
										:key="`communication-key-${index}`"
										class="pa-4 mt-4 rounded-lg position-relative"
									>
										<legend>Información de la Comunicación</legend>

										<v-btn
											class="position-absolute remove-task"
											icon
											density="compact"
											variant="flat"
											color="red"
											@click="reportComposeStore.removeCommunication(index)"
										>
											<v-icon size="16px">close</v-icon>
										</v-btn>

										<v-row>
											<v-col cols="12">
												<v-text-field
													v-model="communication.reason"
													label="Razón"
													prepend-inner-icon="person"
													hide-details
												/>
											</v-col>

											<v-col cols="12">
												<v-textarea
													v-model="communication.comment"
													label="Comentario"
													prepend-inner-icon="comment"
													hide-details
												/>
											</v-col>
										</v-row>
									</fieldset>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel height="15">
								<v-expansion-panel-title color="primary">
									PR's revisados hoy
								</v-expansion-panel-title>

								<v-expansion-panel-text class="pt-4">
									<v-text-field
										v-model="formReport.pr_today"
										label="PR's revisados hoy"
										prepend-inner-icon="event"
										hide-details
									/>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel height="15">
								<v-expansion-panel-title color="primary">
									PR's revisados del mes
								</v-expansion-panel-title>

								<v-expansion-panel-text class="pt-4">
									<v-text-field
										v-model="formReport.pr_month"
										label="Número de PR's del mes"
										prepend-inner-icon="tag"
										hide-details
									/>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel height="15">
								<v-expansion-panel-title color="primary">
									Comentarios
								</v-expansion-panel-title>

								<v-expansion-panel-text class="pt-4">
									<v-textarea
										v-model="formReport.comment"
										label="Comentarios"
										prepend-inner-icon="comment"
										hide-details
									/>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>
					</div>
				</template>

				<template v-slot:copiying>
					<strong>Developer Daily Log</strong> 💻 <strong v-if="formConfig.user.trim()">{{ formConfig.user }}</strong><strong v-else class="text-grey">John Doe</strong> - {{ date }}<br><br>

					<template v-if="formReport.tasks.length > 0">
						<div>
							<strong>TAREA:</strong>
							<div v-for="(task, index) in formReport.tasks" :key="`task-div-${index}`">
								- {{ task.code }} ➡️ Fase: {{ task.phase }} {{ task.progress }}% {{ task.status }} <span v-if="task.comment.trim()">| {{ task.comment }}</span>
							</div>
						</div><br>
					</template>
					
					<template v-if="formReport.meetings.length > 0">
						<div>
							<strong>REUNIÓN:</strong>
							<div v-for="(meet, index) in formReport.meetings" :key="`meet-div-${index}`">
								- 🤝 {{ meet.reason }} <span v-if="meet.comment.trim()">| {{ meet.comment }}</span>
							</div>
						</div><br>
					</template>

					<template v-if="formReport.communications.length > 0">
						<div>
							<strong>CONTACTO:</strong>
							<div v-for="(communication, index) in formReport.communications" :key="`communication-div-${index}`">
								- 📞 {{ communication.reason }} <span v-if="communication.comment.trim()">| {{ communication.comment }}</span>
							</div>
						</div><br>
					</template>

					<template v-if="formReport.pr_today.trim()">
						<div>
							<strong>PR's revisados hoy:</strong>
							<div>- {{ formReport.pr_today }}</div>
						</div><br>
					</template>

					<template v-if="formReport.pr_month.trim()">
						<div>
							<strong>PR's revisados del mes:</strong> {{ formReport.pr_month }}
						</div><br>
					</template>

					<template v-if="formReport.comment.trim()">
						<div>
							<strong>Comentarios:</strong> {{ formReport.comment }}
						</div>
					</template>
				</template>

				<template v-slot:secondary-actions>
					<v-btn
						class="text-grey-darken-3"
						color="grey-lighten-2"
						variant="elevated"
						prepend-icon="save_as"
						@click="reportComposeStore.saveDraft"
					>
						Guardar borrador
					</v-btn>
				</template>

				<template v-slot:actions>
					<v-btn
						color="red"
						variant="elevated"
						prepend-icon="close"
						@click="reportComposeStore.reset"
					>
						Limpiar
					</v-btn>
				</template>
			</render-copy>
		</v-col>
	</v-row>
</template>

<style>
.form-report-compose {
	height: calc(100vh - 280px);
	overflow-y: auto;
}

.remove-task {
	top: -24px;
	right: -14px;
}
</style>