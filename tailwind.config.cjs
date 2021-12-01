const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors: {
      white: '#FFFFFF',
      'gray-1': '#333333',
      'gray-2': '#4F4F4F',
      'gray-3': '#BDBDBD',
    },
    fontFamily: {
      inconsolata: 'Inconsolata, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      'space-mono': '"Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      montserrat: 'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {},
  },

  plugins: [],
};

module.exports = config;
