<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useServerRequestStore } from "@/stores/server-request";
import RenderCopy from "@/components/misc/RenderCopy.vue";
import TextView from "@/components/misc/TextView.vue";

const serverRequestStore = useServerRequestStore();
const { form } = storeToRefs(serverRequestStore);

onMounted(() => {
	serverRequestStore.loadDraft();
});
</script>

<template>
	<v-row justify="center">
		<v-col cols="12" md="8">
			<render-copy title="Solicitud de Ambiente" sub-title="Server Request">
				<template v-slot:form>
					<v-text-field
						v-model="form.clickUP"
						label="ClickUP"
						prepend-inner-icon="link"
					/>

					<v-text-field
						v-model="form.from"
						label="Front"
						prepend-inner-icon="link"
					/>

					<v-text-field
						v-model="form.back"
						label="Back"
						prepend-inner-icon="link"
					/>
				</template>

				<template v-slot:copiying>
					Buenos días <br>

					: <br><br>
					
					Solicitud de ambiente: <br>
					<text-view title="ClickUP" :text="form.clickUP" default-text="example.com" />
					<text-view title="Front" :text="form.from" default-text="CU-XXXXXXX_XXXXX-XXXX" />
					<text-view title="Back" :text="form.back" default-text="v100.example" />
				</template>

				<template v-slot:secondary-actions>
					<v-btn
						class="text-grey-darken-3"
						color="grey-lighten-2"
						variant="elevated"
						prepend-icon="save_as"
						@click="serverRequestStore.saveDraft"
					>
						Guardar borrador
					</v-btn>
				</template>

				<template v-slot:actions>
					<v-btn
						color="red"
						variant="elevated"
						prepend-icon="close"
						@click="serverRequestStore.reset"
					>
						Limpiar
					</v-btn>
				</template>
			</render-copy>
		</v-col>
	</v-row>
</template>