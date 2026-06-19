<template>
	<v-row justify="center">
		<v-col cols="12" md="8">
			<render-copy>
				<template v-slot:form>
					<v-text-field
						v-model="clickUP"
						label="ClickUP"
						prepend-inner-icon="link"
					/>

					<v-text-field
						v-model="from"
						label="Front"
						prepend-inner-icon="link"
					/>

					<v-text-field
						v-model="back"
						label="Back"
						prepend-inner-icon="link"
					/>
				</template>

				<template v-slot:copiying>
					Buenos días <br>

					: <br><br>
					
					Solicitud de ambiente: <br>
					ClickUP: <span :class="colorClickUP">{{ urlClickUP }}</span> <br>
					Front: <span :class="colorFrom">{{ urlFrom }}</span> <br>
					Back: <span :class="colorBack">{{ urlBack }}</span>
				</template>
			</render-copy>
		</v-col>
	</v-row>
</template>

<script setup>
import { ref, computed } from 'vue';
import RenderCopy from "@/components/misc/RenderCopy.vue";

const clickUP = ref("");
const from = ref("");
const back = ref("v100");

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
</script>