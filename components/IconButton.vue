<script setup lang="ts">
type Emits = {
  (e: string): void
}

const emit = defineEmits<Emits>()
const onButtonClick = () => {
  emit('onClick')
}
</script>

<template>
  <button
    :class="$style.icon_button"
    type="button"
    @click.prevent="onButtonClick"
  >
    <slot />
  </button>
</template>

<style lang="scss" module>
.icon_button {
  display        : flex;
  justify-content: center;
  align-items    : center;
  width          : calc(var(--bv) * 4);
  height         : calc(var(--bv) * 4);
  transition     : background-color .1s linear;
  border-radius  : 50%;
  
  > i {
    font-size: 1.5rem;
    color    : var(--link-color);
  }

  &:hover {
    background-color: var(--hover-color);
  }
}
</style>
