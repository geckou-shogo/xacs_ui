<template>
  <button
    :class="[$style.select_button, isSelected ? $style.selected : '']"
    @click.prevent="onButtonClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type Props = {
  isSelected: Boolean,
}

type Emits = {
  (e: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const onButtonClick = () => {
  emit('onClick')
}
</script>

<style lang="scss" module>
.select_button {
  display        : flex;
  justify-content: center;
  align-items    : center;
  position       : relative;
  overflow       : hidden;
  transition     : background-color .1s linear;

  > * {
    color     : var(--main-color);
    transition: color .3s linear;
    position  : relative;
  }

  &:hover {
    background-color: var(--hover-color);
  }

  &::before {
    content         : '';
    width           : 0;
    height          : 0;
    border-radius   : 50%;
    aspect-ratio    : 1 / 1;
    background-color: var(--main-color);
    transition      : all .3s ease-in;
    position        : absolute;
  }

  &.selected {
    > * {
      color      : var(--white-color);
      font-weight: bold;
    }

    &::before {
      width        : 200%;
      height       : auto;
      border-radius: 50%;
    }
  }
}
</style>
