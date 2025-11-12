<script setup lang="ts">
interface Props {
  items: any;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  onClick: [any];
}>();
</script>

<template>
  <div class="relative">
    <HeadlessMenu as="div" class="relative inline-block text-left">
      <div>
        <HeadlessMenuButton
          class="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 transition-colors"
        >
          <slot name="name"></slot>
        </HeadlessMenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <HeadlessMenuItems
          class="absolute right-0 mt-2 origin-top-right divide-y divide-white/10 rounded-xl bg-white/10 backdrop-blur-md shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <HeadlessMenuItem
              v-for="(item, index) in items"
              :key="index"
              v-slot="{ active }"
            >
              <button
                :class="[
                  active ? 'bg-white/20 text-white' : 'text-white/90',
                  'group flex w-full items-center rounded-lg px-3 py-2 text-sm transition-colors',
                ]"
                @click="$emit('onClick', item)"
              >
                {{ item.name }}
              </button>
            </HeadlessMenuItem>
          </div>
        </HeadlessMenuItems>
      </transition>
    </HeadlessMenu>
  </div>
</template>
