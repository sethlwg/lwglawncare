/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      height: {
        "viewport-height": "calc(min(100vh))",
      },
      colors: {
        logogreen: "#5CC85B",
        titles: "bg-gradient-to-r from-green-400 to-blue-500",
      },
      backgroundImage: {
        leaves:
          "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/df12a0af-baa6-42e2-8e6a-ce542256371b/dcgpyyq-98000165-074d-4653-9218-8323a528bea0.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RmMTJhMGFmLWJhYTYtNDJlMi04ZTZhLWNlNTQyMjU2MzcxYlwvZGNncHl5cS05ODAwMDE2NS0wNzRkLTQ2NTMtOTIxOC04MzIzYTUyOGJlYTAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.opkUPUDcjEH57GveqxN0INhdFzsWaaNudidPxzF_1hg')",
        lawn: "url('https://images.unsplash.com/photo-1530333968383-25e00ca4573f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGF3bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
        mower:
          "url('https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGF3bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
        landscape:
          "url('https://images.unsplash.com/photo-1592722212832-f7219ea510da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
      },
    },
  },
  plugins: [],
};
