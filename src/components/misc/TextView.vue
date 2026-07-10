<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
	title: {
		type: String,
		default: "",
	},
	text: {
		type: String,
		default: "",
	},
	defaultText: {
		type: String,
		default: "",
	},
});

const { title, text, defaultText } = toRefs(props);

const viewText = computed(() => {
	return text.value.trim() ? text.value : defaultText.value;
});
</script>

<template>
	<div>
		<b>{{ title }}: </b>
		<span :class="{ 'text-grey': !text.trim() }">
			{{ viewText }}
		</span>
	</div>
</template>