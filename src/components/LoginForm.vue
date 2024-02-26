<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 my-52"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="../assets/mol_logo.svg"
        alt="Your Company"
      />
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        class="space-y-6 bg-white shadow-lg rounded-lg px-5 pt-3 pb-5 mb-2"
        action="#"
        method="POST"
      >
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email</label
          >
          <div>
            <label
              class="block font-medium text-sm text-gray-700"
              for="email"
              value="Email"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="w-full rounded-md py-2.5 px-4 border text-sm outline-red-600"
            />
          </div>
        </div>

        <div class="mt-4">
          <!-- <label class="block font-medium text-sm text-gray-700" for="password" value="Password" /> -->

          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Password</label
          >
          <div class="relative">
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

            <div
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              <button
                type="button"
                id="togglePassword"
                @click="togglePasswordVisibility"
                class="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600"
              >
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293 2.293 3.707l3.315 3.316c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 3.678 1.414-1.414-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316-.105-.316c-.022-.068-2.316-6.686-9.949-6.686zM4.074 12c.103-.236.274-.586.521-.989l5.867 5.867C6.249 16.23 4.523 13.035 4.074 12zm9.247 4.907-7.48-7.481a8.138 8.138 0 0 1 1.188-.982l8.055 8.054a8.835 8.835 0 0 1-1.763.409zm3.648-1.352-1.541-1.541c.354-.596.572-1.28.572-2.015 0-.474-.099-.924-.255-1.349A.983.983 0 0 1 15 11a1 1 0 0 1-1-1c0-.439.288-.802.682-.936A3.97 3.97 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-1.07-1.07A9.292 9.292 0 0 1 12 6.998c5.351 0 7.425 3.847 7.926 5a8.573 8.573 0 0 1-2.957 3.557z"></path></svg>                         -->
                Show
              </button>
            </div>
          </div>
        </div>

        <div class="block mt-4">
          <label for="remember_me" class="flex items-center">
            <input
              type="checkbox"
              id="remember_me"
              name="remember"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
            />
            <span class="ms-2 text-sm text-gray-600">Remember Me</span>
          </label>
        </div>

        <div class="flex items-center justify-end mt-4">
          <a
            class="hover:underline underline underline-offset-2 text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none"
            href="{{ route('password.request') }}"
          >
            Forgot your password?
          </a>

          <button
            class="ms-4 inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 active:bg-gray-900 transition ease-in-out duration-150"
          >
            LOG IN
          </button>
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
      showPassword: false,
    };
  },

  computed: {
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },
  },
  methods: {
    login() {
      // Perform login logic here
      console.log(
        "Logging in with username:",
        this.username,
        "and password:",
        this.password
      );
    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style>
/* Add custom styles here if needed */
</style>
