<script setup>
import { computed } from 'vue';
import { DateTime } from "luxon";
import { storeToRefs } from 'pinia';
import { useConfigStore } from "@/stores/config";

const configStore = useConfigStore();
const { form } = storeToRefs(configStore);

const dateFormats = computed(() => {
	const date = DateTime.now();

	return [
		{
			name: "dd/mm/aaaa",
			value: "dd/LL/yyyy",
		},
		{
			name: "aaaa-mm-dd",
			value: "yyyy-LL-dd",
		},
		{
			name: "dd Mm aaaa",
			value: "dd LLL yyyy",
		},
		{
			name: "aaaa/mm/dd",
			value: "yyyy/LL/dd",
		},
	]
});

const dateNow = computed(() => {
	const date = DateTime.now();

	return date.toFormat(form.value.format_date);
});
</script>

<template>
	<v-row justify="center">
		<v-col cols="12" md="8">
			
			<v-card class="mx-auto" elevation="4">
				<v-card-item>
					<v-card-title class="text-headline">Configuración</v-card-title>
					<v-card-subtitle>En construcción</v-card-subtitle>
				</v-card-item>

				<v-card-text class="py-4">
					<v-row>
						<v-col cols="12">
							<v-text-field
								v-model="form.user"
								label="Usuario"
								prepend-inner-icon="person"
							/>

							<v-select
								v-model="form.format_date"
								label="Formato de fecha"
								:items="dateFormats"
								item-title="name"
								:messages="dateNow"
								prepend-inner-icon="date_range"
							/>
						</v-col>
					</v-row>
				</v-card-text>

				<v-card-actions>
					<v-spacer />

					<v-btn 
						color="primary" 
						variant="elevated" 
						prepend-icon="save"
						@click="configStore.saveConfig"
					>
						Guardar
					</v-btn>

					<v-btn 
						color="red" 
						variant="elevated" 
						prepend-icon="history"
						@click="configStore.resetConfig"
					>
						Reset
					</v-btn>

					<!-- <v-snackbar
						v-model="copied"
						color="primary"
						location="right"
					>
						¡Copiado!

						<template v-slot:actions>
							<v-btn
								color="white"
								variant="text"
								@click="copied = false"
							>
								<v-icon icon="close" />
							</v-btn>
						</template>
					</v-snackbar> -->
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>
</template>