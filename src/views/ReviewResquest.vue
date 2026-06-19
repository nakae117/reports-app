<template>
	<v-row justify="center">
		<v-col cols="12" md="8">
			<render-copy>
				<template v-slot:form>
					Construcción
				</template>

				<template v-slot:copiying>
					Buenas<br>
					-<br><br>
					
					Comentario: Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br>
					Tarea: https://app.clickup.com/t/123/abc<br>
					Rama: CU-John-Doe-X0000<br>
					PR: https://github.com/repo/sitorio/pull/1<br>
					No necesita ambiente<br><br>
					
					Urgente<br>
				</template>
			</render-copy>
		</v-col>
	</v-row>
</template>

<script setup>
import RenderCopy from "@/components/misc/RenderCopy.vue";
</script>