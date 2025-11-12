<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog as="div" class="relative z-50" @close="handleClose">
      <!-- Backdrop -->
      <TransitionChild
        as="template"
        enter="transition duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black/80 backdrop-blur-sm"
          aria-hidden="true"
        />
      </TransitionChild>

      <!-- Dialog container -->
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <TransitionChild
          as="template"
          enter="transition duration-300 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="transition duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel
            class="relative w-full bg-zinc-900 rounded-3xl border-2 border-zinc-800 shadow-2xl overflow-hidden"
            :class="sizeClass"
          >
            <!-- Close Button (optional) -->
            <button
              v-if="showClose"
              type="button"
              @click="handleClose"
              class="absolute top-6 right-6 z-10 p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-zinc-800/80 transition-all duration-300 hover:rotate-90 group"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <!-- Content slot -->
            <div class="relative">
              <slot />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'

interface Props {
  isOpen: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  showClose?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  showClose: false,
})

const emit = defineEmits<{
  close: []
}>()

const sizeClass = computed(() => {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-7xl',
  }
  return sizes[props.size]
})

const handleClose = () => {
  emit('close')
}
</script>
