// 1. Update config.content
// 2. Add config.presets
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/theui-sveltekit/**/*.{html,js,svelte,ts}", // New line
  ],
  presets: [require("theui-sveltekit/preset")], // New line
  darkMode: 'class',
  theme: {
    extend: {},
  },

  plugins: [],
};

module.exports = config;