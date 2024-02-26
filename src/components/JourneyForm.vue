<template>
  <TransitionRoot as="template" :show="open" class="bg-pink-100">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto md:w-full">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 md:w-full"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative w-10/12 2xl:w-1/2 lg:w-11/12 sm:w-full md:w-11/12 h-1/2 md:h-3/4 bg-pink-100 rounded shadow-lg"
            >
              <!-- <div class="bg-pink-100 px-4 pb-4 pt-5 sm:p-6 sm:pb-4"> -->
              <!-- component -->

              <div class="bg-pink-100 shadow-md rounded px-10 pt-12 pb-8 flex flex-col">
                <DialogTitle
                  as="h3"
                  class="text-left text-lg font-bold text-gray-900 mb-3"
                  >Journey Management Form</DialogTitle
                >
                <div class="-mx-3 md:flex mb-2">
                  <div class="md:w-2/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Travel Purpose
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded-lg py-3 px-4 mb-3 shadow-md outline-red-600"
                      id="travel-purpose"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div class="md:w-1/3 px-3 mb-3">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      From
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 shadow-md outline-red-600"
                      id="travel-from"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div class="md:w-3/3 px-3">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      To(Destination)
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 shadow-md outline-red-600"
                      id="destination"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="-mx-3 md:flex mb-2">
                  <div class="md:1/4 px-3">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Departure Date
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3 shadow-md outline-red-600"
                      id="date"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div class="md:1/4 px-3">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Departure Time
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3 shadow-md outline-red-600"
                      id="time"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div class="md:1/4 px-3">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Arrival Date
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3 shadow-md outline-red-600"
                      id="arrival-date"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div class="md:1/4 px-3">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Arrival Time
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3 shadow-md outline-red-600"
                      id="arrival-time"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="-mx-3 md:flex mb-2">
                  <div class="md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Return Date
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded-lg py-3 px-4 mb-3 shadow-md outline-red-600"
                      id="return-date"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div class="md:w-2/3 px-3 mb-3">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Passenger Name
                    </label>
                    <input
                      class="appearance-none block text-left w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 shadow-md outline-red-600"
                      id="name"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div class="md:w-3/3 px-3">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Department
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 shadow-md outline-red-600"
                      id="department"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="-mx-3 md:flex mb-2">
                  <div class="md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Pickup Location or Number
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded-lg py-3 px-4 mb-3 shadow-md outline-red-600"
                      id="location"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div class="md:w-1/3 px-3 mb-3">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      HDF Submitted to Field
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 shadow-md outline-red-600"
                      id="hdf"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div class="md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      PCR Test
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 shadow-md outline-red-600"
                      id="pcr"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="-mx-3 md:flex mb-2">
                  <div class="md:w-2/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Remark / Instruction
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded-lg py-3 px-4 mb-3 shadow-md outline-red-600"
                      id="remark"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div class="md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Charge Code
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 shadow-md outline-red-600"
                      id="charge"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="-mx-3 md:flex mb-2">
                  <div class="md:w-2/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Line Manager Signature
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded-lg py-3 px-4 mb-3 shadow-md outline-red-600"
                      id="signature"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div class="md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-left text-grey-darker text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Charge Code Verification By Finance
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 shadow-md outline-red-600"
                      id="verification"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div
                  class="bg-pink-100 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-start"
                >
                  <button
                    type="button"
                    class="mt-3 w-full sm:w-auto lg:px-5 md:w-32 justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:mt-0 sm:mr-3"
                    @click="open = false"
                    ref="cancelButtonRef"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="w-full sm:w-auto mt-3 sm:mt-0 md:mr-3 md:w-32 justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                    @click="open = false"
                  >
                    Submit
                  </button>
                </div>
              </div>

              <!-- <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-gray-900 mb-3"
                    >Journey Management Form</DialogTitle
                >
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-2 w-full">
                    <div class="col-span-2 sm:grid-cols-1">
                        <label
                            for="travel"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Travel Purpose</label
                        >
                        <div class="mt-2">
                            <input
                                id="travel-purpose"
                                name="travel-purpose"
                                type="text"
                                autocomplete="text"
                                required=""
                                placeholder="Text Here"
                                class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div class="grid sm:grid-cols-1">
                        <label
                            for="from"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >From</label
                        >
                        <div class="mt-2">
                            <input
                                id="from"
                                name="from"
                                type="text"
                                autocomplete="text"
                                required=""
                                placeholder="Text Here"
                                class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div class="grid sm:grid-cols-1">
                        <label
                            for="destination"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >To (Destination)</label
                        >
                        <div class="mt-2">
                            <input
                                id="destination"
                                name="destination"
                                type="text"
                                autocomplete="text"
                                required=""
                                placeholder="Text Here"
                                class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div class="grid sm:grid-cols-1">
                        <label
                            for="destination"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Departure Date</label
                        >
                        <div class="mt-2">
                            <input
                                id="Departure-Date"
                                name="Departure-Date"
                                type="text"
                                autocomplete="text"
                                required=""
                                placeholder="Text Here"
                                class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div class="grid sm:grid-cols-1">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Departure Time</label
                      >
                      <div class="mt-2">
                        <input
                          id="Departure-Time"
                          name="Departure-Time"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div class="...">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Arrival Date</label
                      >
                      <div class="mt-2">
                        <input
                          id="arrival-date"
                          name="Arrival-Date"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                   
                    </div>
                    <div class="...">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Arrival Time</label
                      >
                      <div class="mt-2">
                        <input
                          id="arrival-time"
                          name="arrival-time"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div class="...">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Return Date</label
                      >
                      <div class="mt-2">
                        <input
                          id="return-date"
                          name="return-date"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div class="col-span-2 ...">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Passenger Name</label
                      >
                      <div class="mt-2">
                        <input
                          id="pass-name"
                          name="pass-name"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div class="...">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Department</label
                      >
                      <div class="mt-2">
                        <input
                          id="department"
                          name="Department"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div class="...">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Pickup Location or Number</label
                      >
                      <div class="mt-2">
                        <input
                          id="pickup-location"
                          name="pickup-location"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div class="...">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >HDF Submitted to Field</label
                      >
                      <div class="mt-2">
                        <input
                          id="hdf-submit"
                          name="hdf-submit"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div class="col-span-2...">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >PCR Test</label
                      >
                      <div class="mt-2">
                        <input
                          id="pcr-test"
                          name="pcr-test"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div class="col-span-2 ...">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Remark/Instruction</label
                      >
                      <div class="mt-2">
                        <input
                          id="remark"
                          name="remark"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div class="...">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Charge Code</label
                      >
                      <div class="mt-2">
                        <input
                          id="charge"
                          name="charge"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div class="col-span-2 ...">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Line Manager Signature</label
                      >
                      <div class="mt-2">
                        <input
                          id="line-manager"
                          name="line-manager"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div class="col-span-2 ...">
                      <label
                        for="destination"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Line Manager Signature</label
                      >
                      <div class="mt-2">
                        <input
                          id="line-manager"
                          name="line-manager"
                          type="text"
                          autocomplete="text"
                          required=""
                          placeholder="Text Here"
                          class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div> -->
              <!-- </div> -->
              <!-- </div> -->
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
//   import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const open = ref(true);
</script>
