module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      // theme.extend.backgroundImage: link css classes to background images
      backgroundImage: (theme) => ({
        // CSS class: bg-curvy-dark-mode
        'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
        // CSS class: bg-curvy-light-mode
        'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')",
        // CSS class: bg-logo-dark-mode
        'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
        // CSS class: bg-logo-light-mode
        'logo-light-mode': "url('../images/logo-light-mode.svg')",
      }),
      colors: {
        'accent-blue': 'hsl(198, 60%, 50%)',
        'accent-cyan': 'hsl(176, 68%, 64%)',
        'dark-blue': 'hsl(217, 28%, 15%)',
        'dark-blue-1': 'hsl(218, 28%, 13%)',
        'dark-blue-2': 'hsl(216, 53%, 9%)',
        'dark-blue-3': 'hsl(219, 30%, 18%)',
        'light-red': 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        sans: ['Raleway', 'sans-serif'],
      },
    },
  },
  // variants: control variables that allow to override specific CSS properties;
  // example: class="bg-white hover:bg-black";
  // the "hover:" variant is a variant linked to the "backgroundColor" CSS property
  // that allows us to override its value;
  variants: {
    // variants.extend: enables extra variants for a CSS property in addition to the defaults;
    // any variants under this key are automatically sorted using a default variant order;
    // we can customize this default order with the "variantOrder" key;
    extend: {
      // variants.extend.backgroundImage: enable extra variants for the "backgroundImage" CSS property;
      // since we are enabling the "dark" variant for this CSS property, this means we can do something like
      // class="bg-logo-light-mode dark:bg-logo-dark-mode"
      backgroundImage: ['dark'],
    },
  },
};
