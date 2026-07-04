<script setup>
import { computed } from 'vue';
import { DateTime } from "luxon";
import { storeToRefs } from 'pinia';
import { useConfigStore } from "@/stores/config";
import RenderCopy from "@/components/misc/RenderCopy.vue";

const configStore = useConfigStore();

const { form } = storeToRefs(configStore);

const date = computed(() => {
	const date = DateTime.now();

	return date.toFormat(form.value.format_date);
});
</script>

<template>
	<v-row justify="center">
		<v-col cols="12" md="12">
			<render-copy>
				<template v-slot:form>
					Construcción
				</template>

				<template v-slot:copiying>
					💻 <strong v-if="form.user.trim()">{{ form.user }}</strong><strong v-else class="text-grey">John Doe</strong> - {{ date }}<br><br>
					TAREA:<br>
					- #X0000 ➡️ Fase: 🏗️ In progress 40% ESTADO: [🟢] | Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br><br>
					
					REUNIÓN:<br>
					- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum quia nobis consectetur fuga.<br><br>
					
					COMUNICACIÓN:<br>
					- John, Doe | Comment #X0000<br><br>
					
					PR revisados del mes: 1
				</template>
			</render-copy>
		</v-col>
	</v-row>
</template>