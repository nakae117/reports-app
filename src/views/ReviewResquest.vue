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

					<text-view title="Comentario" :text="form.comment" default-text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
					<text-view title="Tarea" :text="form.task" default-text="https://app.website.com/H1232" />
					<text-view title="Rama" :text="form.branch" default-text="CU-John-Doe-X0000" />
					<text-view title="PR" :text="form.pr" default-text="https://github.com/repo/sitorio/pull/1" />
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
import TextView from "@/components/misc/TextView.vue";
import { ref } from 'vue';

const reviewRequestStore = useReviewRequestStore();
const { form } = storeToRefs(reviewRequestStore);

const priorityOptions = ref([
	{ text: "Baja", icon: "🟢" },
	{ text: "Media", icon: "🟡" },
	{ text: "Alta", icon: "🟠" },
	{ text: "Urgente", icon: "🚨" }
]);
</script>