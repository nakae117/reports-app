import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { createVuetify } from 'vuetify';
import { aliases, md } from 'vuetify/iconsets/md';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const VBtn = {
	variant: "elevated",
	color: 'primary',
};

const VTextField = {
	variant: "outlined",
	density: "compact",
};

const VChip = {
	color: "primary",
	density: "compact",
}

const VSelect = {
	variant: "outlined",
	density: 'compact',
};

const VAutocomplete = {
	variant: "outlined",
	density: 'compact',
};

export default createVuetify({
	components,
	directives,
	defaults: {
		global: {
			elevation: 0,
		},
		VBtn,
		VTextField,
		VChip,
		VSelect,
		VAutocomplete,
		VCardActions: {
			VBtn,
		},
	},
	icons: {
		defaultSet: 'md',
		aliases,
		sets: {
			md,
		},
	},
	theme: {
		defaultTheme: 'mainTheme',
		themes: {
			mainTheme: {
				dark: false,
				colors: {
					primary: '#1ca78d',
					elements: '#c1c1c1',
					background: '#fafafa',
				},
			},
		},
	},
});
