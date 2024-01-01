<script setup lang="ts">

const { category, alias } = defineProps<{ category: string; alias?: string[] }>()

</script>

<template>
  <div class="grid grid-cols-[100px_auto] gap-2 text-sm mt-4 mb-8 items-start">
    <div opacity="50">
      Category
    </div>
    <div>{{ category }}</div>

    <template v-if="alias?.length">
      <div opacity="50">
        Alias
      </div>
      <div flex="~ gap-1 wrap">
        <code v-for="(a, idx) of alias" :key="idx" class="!py-0">{{ a }}</code>
      </div>
    </template>
  </div>
</template>