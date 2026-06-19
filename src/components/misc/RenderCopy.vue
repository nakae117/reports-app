<template>
	<v-card class="mx-auto" elevation="4">
		<v-card-item>
			<v-card-title class="text-headline">Solicitud de Revisión</v-card-title>
			<v-card-subtitle>Review Request</v-card-subtitle>
		</v-card-item>

		<v-card-text class="py-4">
			<v-row>
				<v-col cols="6">
					<slot name="form" />
				</v-col>

				<v-col ref="copyTextContainer" cols="6">
					<slot name="copiying" />
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
</template>

<script setup>
import { ref } from 'vue';

const copyTextContainer = ref(null);
const copied = ref(false);

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