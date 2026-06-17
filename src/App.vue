<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app id="reports-app">
    <v-app-bar color="primary" elevation="2">
      <v-app-bar-title>Reports App</v-app-bar-title>

      <v-btn to="/server-request" icon>
        <v-icon>cloud_alert</v-icon>
      </v-btn>
    </v-app-bar>

		<v-main class="bg-grey-lighten-3">
      <v-container class="mt-5">
        <RouterView />
      </v-container>
		</v-main>
	</v-app>
</template>