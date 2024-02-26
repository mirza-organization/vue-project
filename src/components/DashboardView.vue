<!-- <template>
    <div class="absolute inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0">

        <div class="relative w-10/12 md:w-1/2 h-1/2 md:h-3/4 bg-white rounded shadow-lg"></div>

    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div class="col-span-full md:col-start-2 md:col-span-4 ...">
    <label for="field01">Field 01</label>
    <input type="text" id="field01" name="field01">
  </div>
  <div class="col-span-full  md:col-end-7...">
    <label for="field02">Field 02</label>
    <input type="text" id="field02" name="field02">
  </div>
  <div class="col-span-full md:col-end-1 md:col-span-2 ...">
    <label for="field03">Field 03</label>
    <input type="text" id="field03" name="field03">
  </div>
  <div class="col-span-full md:col-start-1 md:col-end-7 ...">
    <label for="field04">Field 04</label>
    <input type="text" id="field04" name="field04">
  </div>
  <div class="col-span-full md:col-start-1 md:col-end-7 ...">
    <label for="field04">Field 5</label>
    <input type="text" id="field04" name="field04">
  </div>
</div>


</template> -->
<template>
  <div class="relative min-h-screen md:flex" data-dev-hint="container">
    <input type="checkbox" id="menu-open" class="hidden" />
    <!-- <header
      class="bg-white text-red-600 flex justify-between md:hidden "
      data-dev-hint="mobile menu bar"
    >
      <a
        href="#"
        class="block p-4 text-white font-bold whitespace-nowrap truncate"
      >
        <div class="flex items-center h-5 flex-shrink-0 px-4">
         
          <img
            class="mx-auto h-10 w-auto"
            src="../assets/mol_logo.svg"
            alt="Your Company"
          />
        </div>
      </a>

      <label
        for="menu-open"
        id="mobile-menu-button"
        class="m-2 p-2 focus:outline-none text-white bg-red-700 hover:text-white hover:bg-red-700 rounded-md"
      >
        <svg
          id="menu-open-icon"
          class="h-6 w-6 transition duration-200 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          id="menu-close-icon"
          class="h-6 w-6 transition duration-200 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </label>
    </header> -->

    <aside
      id="sidebar"
      class="bg-white md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out md:flex md:flex-col md:justify-between overflow-y-auto z-10"
      data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
    >
      <div
        class="flex flex-col space-y-6 z-10"
        data-dev-hint="optional div for having an extra footer navigation"
      >
        <a
          href="#"
          class="bg-white text-white flex items-center space-x-2 px-4"
          title=""
        >
          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg> -->
          <div class="flex items-center h-5">
            <!-- <span class="text-lg font-bold">Dashboard</span> -->
            <img
              class="mx-auto h-10 w-auto"
              src="../assets/mol_logo.svg"
              alt="Your Company"
            />
          </div>
        </a>

        <nav data-dev-hint="main navigation ">
          <a
            href="#"
            class="flex transition duration-200 bg-white hover:bg-gray-700 hover:text-white w-40 m-10 rounded-lg"
          >
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <span>About</span> -->
            <!-- Sidebar links -->
            <div
              class="flex-1 flex flex-col w-40 overflow-y-auto hover:bg-pink-200"
            >
              <router-link
                to="/"
                class="nav-link font-bold bg-pink-100 w-40 rounded hover:bg-pink-300 hover: text-black pl-6 py-2"
                >My Journeys</router-link
              >
            </div>
          </a>
        </nav>
      </div>

      <!-- <nav data-dev-hint="second-main-navigation or footer navigation">
            <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                asd
            </a>
            <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                asd
            </a>
            <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                asd
            </a>
        </nav> -->
    </aside>

    <main id="content" class="flex-1 bg-pink-100 h-screen">
      <!-- <div class="max-w-7xl mx-auto bg-pink-100"> -->
      <!-- Replace with your content -->
      <!-- <div class="px-4 py-6 sm:px-0"> -->
      <!-- <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"> -->
      <!-- <div class="flex-1 bg-pink-100"> -->
      <!-- <div id="app" class="bg-gray-200"> -->
      <nav class="h-16 text-white bg-red-600 flex items-center shadow">
        <div class="container mx-auto">
          <div class="flex justify-between items-center">
            <div class="flex">
              <h1 class="text-lg md:text-2xl md:ml-5 font-bold mb-4 pt-4 pl-3">
                MOLGROUP COMPANY
              </h1>
            </div>
            <div class="flex">
              <div class="relative">
                <button
                  class="rounded-full overflow-hidden bg-white text-red-500 border-2 ml-5 md:mr-5 w-10 h-10 flex justify-center items-center | focus:outline-none focus:border-white"
                  @click="isOpen1 = true"
                >
                  <i class="fa-solid fa-user"></i>
                </button>

                <div
                  v-if="isOpen1"
                  class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25"
                  @click="isOpen1 = false"
                ></div>
                <div
                  v-if="isOpen1"
                  class="absolute z-30 right-0 mt-2"
                  :class="{ hidden: !isOpen1 }"
                >
                  <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                    <a
                      href="#"
                      class="block text-red-600 font-semibold px-4 py-2 | hover:text-white hover:bg-red-500"
                    >
                      <i class="fa-regular fa-user"></i>
                      Your profile</a
                    >
                    <a
                      href="#"
                      class="block text-red-600 font-semibold px-4 py-2 | hover:text-white hover:bg-red-500"
                    >
                      <i class="fa-solid fa-gear"></i>
                      Settings</a
                    >
                    <a
                      href="#"
                      class="block text-red-600 font-semibold px-4 py-2 | hover:text-white hover:bg-red-500"
                    >
                      <i class="fa-solid fa-right-to-bracket"></i>
                      Sign out</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <label
              for="menu-open"
              class="shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden mr-2"
              data-dev-hint="floating action button"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
        </div>
      </nav>
      <!-- </div> -->
      <!-- component -->

      <!-- component -->
      <div class="relative text-gray-600 w-full mt-5 px-5 z-0">
        <!-- <form class="z-10"> -->
        <!-- <div class="flex space-x-1 items-center mb-2"></div> -->
        <div class="flex space-x-4 z-0">
          <div class="flex shadow-md rounded-full overflow-hidden w-full z-0">
            <input
              type="text"
              class="w-full rounded-md rounded-r-none focus:outline-none pl-4 z-0"
              placeholder="Search Here"
            />
            <button
              class="bg-white text-red-600 px-6 text-lg font-semibold py-4 rounded-r-md z-0"
            >
              <svg
                class="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>
          <a></a>
          <button @click="goToForm"
            class="inline-block bg-red-600 h-10 w-10 rounded-full text-white"
          >
            <i class="fa-regular fa-plus p-3"></i>
            <font-awesome-icon icon="coffee" />
          </button>
        </div>
        <!-- </form> -->
      </div>

      <!-- <div class="bg-white rounded-lg shadow-md p-4 m-4">
          Table
          <div class="overflow-x-auto">
            <table class="sm:overflow-scroll table-auto w-full">
              <thead>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="">ID</th>
                  <th class="">Travel Purpose</th>
                  <th class="">Charge Code</th>
                  <th class="">Status</th>
                  <th class="">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(user, index) in users"
                  :key="index"
                  class="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td class="">{{ user.id }}</td>
                  <td class="">{{ user.name }}</td>
                  <td class="">{{ user.email }}</td>
                  <td class="">
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500 text-white"
                    >
                      Pending
                    </span>
                  </td>
                  <td class="">
                    <button
                      class="inline-block bg-white h-10 w-10 rounded-full"
                    >
                      <i
                        class="fa-solid fa-pen-to-square text-red-600 h-10 w-10"
                      ></i>
                    </button>
                    <button
                      class="inline-block bg-white h-10 w-10 rounded-full"
                    >
                      <i class="fa-solid fa-eye text-red-600 h-10 w-10"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div> -->
      <div class="sm:mx-auto my-5 sm:px-8 w-full">
        <!-- <div class="w-full border-2 border-rose-600"> -->
        <!-- <div class="-mx-4 sm:-mx-4 px-4 sm:px-4 py-4 sm:min-w-full border-2 border-rose-600"> -->
        <div class="w-full shadow-md rounded-lg overflow-x-auto">
          <table class="min-w-full leading-normal text-center">
            <thead>
              <tr>
                <th
                  class="px-2 py-4 border-b-2 border-gray-200 bg-white text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  class="px-2 py-4 border-b-2 border-gray-200 bg-white text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Travel Purpose
                </th>
                <th
                  class="px-2 py-4 border-b-2 border-gray-200 bg-white text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Charge Code
                </th>
                <th
                  class="px-2 py-4 border-b-2 border-gray-200 bg-white text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  class="px-2 py-4 border-b-2 border-gray-200 bg-white text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr class="text-center">
                <td
                  class="px-2 py-2 border-b border-gray-200 bg-white text-sm text-center"
                >
                  <p class="text-gray-900 whitespace-no-wrap">01</p>
                </td>
                <td class="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Text Here</p>
                </td>
                <td class="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Text Here</p>
                </td>
                <td class="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <span
                    class="relative inline-block px-3 py-1 font-bold leading-tight"
                  >
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-yellow-500 text-white opacity-50 rounded-full"
                    ></span>
                    <span class="relative text-white">Pending</span>
                  </span>
                </td>
                <td
                  class="px-2 py-2 border-b border-gray-200 bg-white text-sm text-center"
                >
                  <button class="inline-block bg-white h-10 w-10 rounded-full">
                    <i
                      class="fa-solid fa-pen-to-square text-red-600 h-10 w-10"
                    ></i>
                  </button>
                  <button class="inline-block bg-white h-10 w-10 rounded-full">
                    <i class="fa-solid fa-eye text-red-600 h-10 w-10"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">02</p>
                </td>
                <td class="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Text Here</p>
                </td>
                <td class="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Text Here</p>
                </td>
                <td class="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Paid</span>
                  </span>
                </td>
                <td
                  class="px-2 py-2 border-b border-gray-200 bg-white text-sm text-center"
                >
                  <button class="inline-block bg-white h-10 w-10 rounded-full">
                    <i
                      class="fa-solid fa-pen-to-square text-red-600 h-10 w-10"
                    ></i>
                  </button>
                  <button class="inline-block bg-white h-10 w-10 rounded-full">
                    <i class="fa-solid fa-eye text-red-600 h-10 w-10"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen2: true,
      isOpen1: false,
      users: [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
      ],
    };
  },

  methods: {
    goToForm() {
      this.$router.push('/Journey-Form');
    }
  }
};
</script>

<style>
#sidebar {
  --tw-translate-x: -100%;
}
#menu-close-icon {
  display: none;
}

#menu-open:checked ~ #sidebar {
  --tw-translate-x: 0;
}
#menu-open:checked ~ * #mobile-menu-button {
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}
#menu-open:checked ~ * #menu-open-icon {
  display: none;
}
#menu-open:checked ~ * #menu-close-icon {
  display: block;
}

@media (min-width: 768px) {
  #sidebar {
    --tw-translate-x: 0;
  }
}
</style>
