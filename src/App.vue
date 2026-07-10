<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useConfigStore } from "@/stores/config";
import Notify from "@/components/misc/Notify.vue";

const configStore = useConfigStore();

const items = [
	{
		title: 'Inicio',
		value: '/',
		icon: 'home',
	},
	{
		title: 'Solicitud de Ambiente',
		value: '/server-request',
		icon: 'cloud_alert',
	},
	{
		title: 'Solicitud de Revisión',
		value: '/review-request',
		icon: 'add_chart',
	},
	{
		title: 'Componer Reporte',
		value: '/report-compose',
		icon: 'checklist_rtl',
	},
	{
		title: 'Configuración',
		value: '/config',
		icon: 'settings',
	},
];

onMounted(() => {
	configStore.loadConfig();
});
</script>

<template>
	<v-app id="reports-app">
		<v-app-bar color="primary" elevation="2">
			<v-app-bar-title>Reports App</v-app-bar-title>
		</v-app-bar>

		<v-navigation-drawer>
			<v-list>
				<v-list-item
					v-for="(item, key) in items"
					:title="item.title"
					:to="item.value"
					:prepend-icon="item.icon"
					:key="`report-item-${key}`"
				/>
			</v-list>
		</v-navigation-drawer>

		<v-main class="bg-grey-lighten-3">
			<v-container class="mt-5" fluid>
				<RouterView />
			</v-container>
		</v-main>

		<notify />
	</v-app>
</template>