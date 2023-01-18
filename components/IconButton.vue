<template>
  <button
    :class="$style.icon_button"
    type="button"
    @click.prevent="onButtonClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Emits {
  (e: string): void
}

const emit = defineEmits<Emits>()
const onButtonClick = () => {
  emit('onClick')
}
</script>

<style lang="scss" module>
.icon_button {
  width    : calc(var(--bv) * 4);
  height   : calc(var(--bv) * 4);
  font-size: 32px;
  
  > i {
    color: var(--link-color);
  }
}
</style>
