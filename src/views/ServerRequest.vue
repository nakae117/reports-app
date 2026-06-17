<template>
	<v-row justify="center">
		<v-col cols="12" md="8">
			<v-card class="mx-auto" elevation="4">
				<v-card-item>
					<v-card-title class="text-headline">Solicitud de Ambiente</v-card-title>
					<v-card-subtitle>Server Request</v-card-subtitle>
				</v-card-item>

				<v-card-text class="py-4">
					<v-row>
						<v-col cols="6">
							<v-text-field v-model="clickUP" label="ClickUP" density="compact" variant="outlined" prepend-inner-icon="link" />

							<v-text-field v-model="from" label="Front" density="compact" variant="outlined" prepend-inner-icon="link" />

							<v-text-field v-model="back" label="Back" density="compact" variant="outlined" prepend-inner-icon="link" />
						</v-col>

						<v-col ref="copyTextContainer" cols="6">
							Buenos días <br>

							: <br><br>
							
							Solicitud de ambiente: <br>
							ClickUP: <span :class="colorClickUP">{{ urlClickUP }}</span> <br>
							Front: <span :class="colorFrom">{{ urlFrom }}</span> <br>
							Back: <span :class="colorBack">{{ urlBack }}</span>
						</v-col>

						<v-col cols="12" v-if="copied">
							<v-alert
								type="success"
								title="¡Copiado!"
							/>
						</v-col>
					</v-row>
				</v-card-text>

				<v-card-actions>
					<v-spacer />
					<v-btn 
						color="primary" 
						variant="elevated" 
						prepend-icon="add"
						@click="copyText"
					>
						Copiar
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
import { ref, computed } from 'vue';

const copyTextContainer = ref(null);
const clickUP = ref("");
const from = ref("");
const back = ref("v100");
const copied = ref(false);

const urlClickUP = computed(() => clickUP.value !== "" ? clickUP.value : "example.com");
const urlFrom = computed(() => from.value !== "" ? from.value : "CU-XXXXXXX_XXXXX-XXXX");
const urlBack = computed(() => back.value !== "" ? back.value : "v100.example");

const colorClickUP = computed(() => {
	return { 'text-grey': urlClickUP.value === "example.com" };
})

const colorFrom = computed(() => {
	return { 'text-grey': urlFrom.value === "CU-XXXXXXX_XXXXX-XXXX" };
})

const colorBack = computed(() => {
	return { 'text-grey': urlBack.value === "v100.example" };
})

const copyText = async () => {
	if (copyTextContainer.value) {
		try {
			const text = copyTextContainer.value.$el.innerText;
			await navigator.clipboard.writeText(text);
			copied.value = true;
			
			setTimeout(() => {
			copied.value = false;
			}, 2000)
		} catch (err) {
			console.error('Error al copiar el texto: ', err);
		}
	}
}
</script>