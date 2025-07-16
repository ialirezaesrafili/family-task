export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    
    theme: {
      extend: {
        colors: {
          primary: 'rgb(var(--color-primary))',
          secondary: 'rgb(var(--color-secondary))',
          accent: 'rgb(var(--color-accent))',
          error: 'rgb(var(--color-error))',
          success: 'rgb(var(--color-success))',
        },
        borderRadius: {
          custom: 'var(--border-radius)',
        }
      },
    },
    
    plugins: [],
  }