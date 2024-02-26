<template>
    <div
      class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 my-52"
    >
    
      <div class="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img
          class="mx-auto h-10 w-auto"
          src="../assets/mol_logo.svg"
          alt="Your Company"
        />
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6 bg-white shadow-lg rounded-lg px-5 pt-3 pb-5 mb-2" action="" method="">
            <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Name</label
            >
            <div class="mt-2">
              <input
              type="text"
              name="text"
              placeholder="Name"
              class="w-full rounded-md py-2.5 px-4 border text-sm outline-red-600"
            />
            </div>
          </div>  
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email</label
            >
            <div>
              <input
              type="email"
              name="email"
              placeholder="Email"
              class="w-full rounded-md py-2.5 px-4 border text-sm outline-red-600"
            />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
            </div>
            <div>
              <input
              id="password"
              v-model="password"
              :type="passwordFieldType"
              name="password"
              placeholder="Password"
              required
              autocomplete="current-password"
              class="w-full rounded-md py-2.5 px-4 border text-sm outline-red-600"
            />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Confirm Password</label
              >
            </div>
            <div>
              <input
              id="password"
              v-model="password"
              :type="passwordFieldType"
              name="password"
              placeholder="Password"
              required
              autocomplete="current-password"
              class="w-full rounded-md py-2.5 px-4 border text-sm outline-red-600"
            />
            </div>
          </div>
  
          <div class="flex items-center justify-end mt-4">
          <a :href="componentRoute"
            class="hover:underline underline underline-offset-2 text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none"
           
          >
            Already registered?
          </a>

          <a >
          <button @click="goToLogin"
            class="ms-4 inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 active:bg-gray-900 transition ease-in-out duration-150"
          >
            REGISTER
          </button>
        </a>
        </div>
  
        </form>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },

    methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  }
    // methods: {
    //   login() {
    //     // Perform login logic here
    //     console.log(
    //       "Logging in with username:",
    //       this.username,
    //       "and password:",
    //       this.password
    //     );
    //   },
    // },

    // computed: {
    //   componentRoute() {
    //     // Replace 'ComponentName' with the path to your component
    //     return `/components/LoginForm}`;
    //   }
    // },
  };
  </script>
  
  <style>
  /* Add custom styles here if needed */
  </style>
  