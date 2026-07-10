<script setup>
import { storeToRefs } from 'pinia';
import { useNotifyStore } from "@/stores/notify";

const notifyStore = useNotifyStore();

const { notify } = storeToRefs(notifyStore);
</script>

<template>
	<v-snackbar
		v-model="notify.show"
		color="primary"
		location="right"
	>
		{{ notify.text }}

		<template v-slot:actions>
			<v-btn
				color="white"
				variant="text"
				@click="notify.show = false"
			>
				<v-icon icon="close" />
			</v-btn>
		</template>
	</v-snackbar>
</template>
