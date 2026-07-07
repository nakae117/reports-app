<script setup>
import { computed, ref } from 'vue';
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
const phases = ref(["🏗️ In progress"]);
</script>

<template>
	<v-row justify="center">
		<v-col cols="12" md="12">
			<render-copy>
				<template v-slot:form>
					<div class="form-report-compose pr-4">
						<v-toolbar density="compact" color="primary" class="rounded">
							<v-toolbar-title class="font-weight-medium">Tareas</v-toolbar-title>

							<template v-slot:append>
								<div class="d-flex ga-1">
									<v-btn
										color="white"
										icon="add"
										@click="reportComposeStore.addTask"
									/>
								</div>
							</template>
						</v-toolbar>
						<br>

						<v-divider />

						<!-- TODO: probar con fieldset -->

						<div
							v-for="(task, key) in formReport.tasks"
							:key="`task-key-${key}`"
							class="mt-4"
						>
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
						</div>

						<v-toolbar density="compact" color="primary" class="rounded">
							<v-toolbar-title class="font-weight-medium">Reuniones</v-toolbar-title>

							<template v-slot:append>
								<div class="d-flex ga-1">
									<v-btn
										color="white"
										icon="add"
										@click="reportComposeStore.addTask"
									/>
								</div>
							</template>
						</v-toolbar>
						<br>

						<v-toolbar density="compact" color="primary" class="rounded">
							<v-toolbar-title class="font-weight-medium">Comunicaciones</v-toolbar-title>

							<template v-slot:append>
								<div class="d-flex ga-1">
									<v-btn
										color="white"
										icon="add"
										@click="reportComposeStore.addTask"
									/>
								</div>
							</template>
						</v-toolbar>
						<br>

						<v-toolbar density="compact" color="primary" class="rounded">
							<v-toolbar-title class="font-weight-medium">PR's revisados hoy</v-toolbar-title>

							<template v-slot:append>
								<div class="d-flex ga-1">
									<v-btn
										color="white"
										icon="add"
										@click="reportComposeStore.addTask"
									/>
								</div>
							</template>
						</v-toolbar>
						<br>

						<v-toolbar density="compact" color="primary" class="rounded">
							<v-toolbar-title class="font-weight-medium">PR's revisados del mes</v-toolbar-title>

							<template v-slot:append>
								<div class="d-flex ga-1">
									<v-btn
										color="white"
										icon="add"
										@click="reportComposeStore.addTask"
									/>
								</div>
							</template>
						</v-toolbar>
					</div>
				</template>

				<template v-slot:copiying>
					💻 <strong v-if="formConfig.user.trim()">{{ formConfig.user }}</strong><strong v-else class="text-grey">John Doe</strong> - {{ date }}<br><br>

					<div v-if="formReport.tasks.length > 0">
						<strong>TAREA:</strong>
						<div v-for="(task, key) in formReport.tasks" :key="`task-div-${key}`">
							- {{ task.code }} ➡️ Fase: {{ task.phase }} {{ task.progress }}% {{ task.status }} <span v-if="task.comment.trim()">| {{ task.comment }}</span>
						</div>
					</div><br>
					
					<div>
						<strong>REUNIÓN:</strong>
						<div>- 🤝 John, Doe | Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum quia nobis consectetur fuga.</div>
					</div><br>
					
					<div>
						<strong>COMUNICACIÓN:</strong>
						<div>- 📞 John, Doe | Comment #X0000</div>
					</div><br>
					
					<div>
						<strong>PR's revisados de hoy:</strong> 1
					</div><br>

					<div>
						<strong>PR's revisados del mes:</strong> 1
					</div>
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
</style>