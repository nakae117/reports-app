<template>
	<v-row justify="center">
		<v-col cols="12" md="8">
			<render-copy>
				<template v-slot:form>
					<v-text-field
						v-model="form.comment"
						label="Comentario"
						prepend-inner-icon="comment"
					/>

					<v-text-field
						v-model="form.task"
						label="Tarea"
						prepend-inner-icon="checklist"
					/>

					<v-text-field
						v-model="form.branch"
						label="Rama"
						prepend-inner-icon="commit"
					/>

					<v-text-field
						v-model="form.pr"
						label="PR"
						prepend-inner-icon="published_with_changes"
					/>

					<v-textarea
						v-model="form.note"
						label="Note"
						prepend-inner-icon="notes"
					/>

					<v-autocomplete
						v-model="form.priority"
						label="Autocomplete"
						:items="priorityOptions"
						item-title="text"
						return-object
					>
						<template #selection="{ item }">
							<span class="me-2">{{ item.icon }}</span>
							<span>{{ item.text }}</span>
						</template>

						<template #item="{ props, item }">
							<v-list-item v-bind="props">
								<template #prepend>
									<span class="me-2">{{ item.icon }}</span>
								</template>
							</v-list-item>
						</template>
					</v-autocomplete>
				</template>

				<template v-slot:copiying>
					<div>Buenas</div>
					-<br>
					
					<div><b>Comentario:</b> <span :class="validateRequest.comment.class">{{ validateRequest.comment.text }}</span></div>
					<div><b>Tarea:</b> <span :class="validateRequest.task.class">{{ validateRequest.task.text }}</span></div>
					<div><b>Rama:</b> <span :class="validateRequest.branch.class">{{ validateRequest.branch.text }}</span></div>
					<div><b>PR:</b> <span :class="validateRequest.pr.class">{{ validateRequest.pr.text }}</span></div>
					<div v-if="form.note.trim()"><b>Note:</b> {{ form.note }}</div><br>
					
					<div>{{ form.priority.icon }} {{ form.priority.text }}</div>
				</template>
			</render-copy>
		</v-col>
	</v-row>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useReviewRequestStore } from "@/stores/review-request";
import RenderCopy from "@/components/misc/RenderCopy.vue";
import { ref } from 'vue';

const reviewRequestStore = useReviewRequestStore();
const { form, validateRequest } = storeToRefs(reviewRequestStore);

const priorityOptions = ref([
	{ text: "Baja", icon: "🟢" },
	{ text: "Media", icon: "🟡" },
	{ text: "Alta", icon: "🟠" },
	{ text: "Urgente", icon: "🚨" }
]);
</script>