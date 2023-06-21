/** @type {import('tailwindcss').Config} */
export default {
 content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}

module.exports = {

  content: [
      // ...
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ]

}

