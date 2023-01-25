/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
        colors:{
            logogreen:'#5CC85B'
        },
        backgroundImage:{
            lawn:"url('https://images.unsplash.com/photo-1530333968383-25e00ca4573f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGF3bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
            mower:"url('https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGF3bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')"
        }
    },
  },
  plugins: [],
};

