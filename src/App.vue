<script setup>
import { RouterView } from 'vue-router';

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
]
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
			<v-container class="mt-5">
				<RouterView />
			</v-container>
		</v-main>
	</v-app>
</template>