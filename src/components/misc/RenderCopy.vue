<script setup>
import { ref } from 'vue';
import { useNotifyStore } from "@/stores/notify";

import { toRefs } from 'vue';

const props = defineProps({
	title: {
		type: String,
		default: "",
	},
	subTitle: {
		type: String,
		default: "",
	},
});

const { title, subTitle } = toRefs(props);

const notifyStore = useNotifyStore();

const copyTextContainer = ref(null);

const copyText = async () => {
	if (copyTextContainer.value) {
		try {
			const text = copyTextContainer.value.$el;
			const htmlBlob = new Blob([text.innerHTML], { type: "text/html" });
			const textBlob = new Blob([text.innerText], { type: "text/plain" });
			const data = [new ClipboardItem({
				"text/html": htmlBlob,
				"text/plain": textBlob,
			})];

			await navigator.clipboard.write(data);

			notifyStore.showNotify("¡Copiado!");
		} catch (err) {
			console.error('Error al copiar el texto: ', err);
		}
	}
}
</script>

<template>
	<v-card class="mx-auto">
		<v-card-item>
			<v-card-title class="text-headline">{{ title }}</v-card-title>
			<v-card-subtitle>{{ subTitle }}</v-card-subtitle>
		</v-card-item>

		<v-card-text class="py-4">
			<v-row>
				<v-col cols="6">
					<slot name="form" />
				</v-col>

				<v-col ref="copyTextContainer" cols="6">
					<slot name="copiying" />
				</v-col>
			</v-row>
		</v-card-text>

		<v-card-actions>
			<slot name="secondary-actions" />

			<v-spacer />

			<v-btn 
				color="primary" 
				variant="elevated" 
				prepend-icon="copy_all"
				@click="copyText"
			>
				Copiar
			</v-btn>

			<slot name="actions" />
		</v-card-actions>
	</v-card>
</template>