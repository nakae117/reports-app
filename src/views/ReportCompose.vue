<template>
	<v-row justify="center">
		<v-col cols="12" md="8">
			<render-copy>
				<template v-slot:form>
					Construcción
				</template>

				<template v-slot:copiying>
					💻 John Doe - 18/06/2026<br><br>
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

<script setup>
import RenderCopy from "@/components/misc/RenderCopy.vue";
</script>