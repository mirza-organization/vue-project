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

              <div
                class="bg-pink-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
              >
                <DialogTitle
                  as="h3"
                  class="text-left font-bold text-gray-900 mb-3"
                  >Journey Request</DialogTitle
                >
                <!-- component -->
                <div class="overflow-x-auto">
                  <table class="table-auto w-full bg-white rounded-lg">
                    <tbody></tbody>

                    <tbody>
                      <tr class="">
                        <th class="border px-4 py-2">Travel Purpose</th>
                        <td class="border px-4 py-2">Study Tour</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">From</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">To ( Destination )</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">Departure Date</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">Departure Time</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">Arrival Date</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">Arrival Time</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">Return Date</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">Passenger Name</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">Department</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">
                          Pickup Location or Number
                        </th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">HDF Submitted to Field</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">PCR Test</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">Remark / Instruction</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">Charge Code</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">Line Manager Signature</th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                      <tr>
                        <th class="border px-4 py-2">
                          Charge Code VErification By Finance
                        </th>
                        <td class="border px-4 py-2">Rawalpindi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class="bg-pink-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                >
                  <button
                    type="button"
                    class="mt-3 w-full sm:w-auto lg:px-5 lg:w-40 justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:mt-0 sm:mr-3"
                    @click="open = false"
                    ref="cancelButtonRef"
                  >
                    Decline
                  </button>

                  <button
                    type="button"
                    class="w-full sm:w-auto mt-3 sm:mt-0 md:mr-3 lg:w-40 justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                    @click="open = false"
                  >
                    Approve
                  </button>
                </div>
                <textarea class="resize rounded-md h-20 p-3" placeholder="Write Remarks"></textarea>
                <button
                  type="button"
                  class="w-full sm:w-auto mt-3 sm:mt-0 md:mr-3 lg:w-100 md:mt-4 justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                  @click="open = false"
                >
                  Submit
                </button>
              </div>
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
