<script setup lang="ts">
type Emits = {
  (e: string): void
}

type Props = {
  text    : string,
  iconName: string,
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()
const onButtonClick = () => emit('onClick')
</script>

<template>
  <button
    :class="$style.button"
    @click.prevent="onButtonClick"
    type="button"
  >
    <i :class="['bi', iconName]"></i>
    <span>
      {{ text }}
    </span>
  </button>
</template>

<style lang="scss" module>
.button {
  display         : inline-flex;
  align-items     : center;
  gap             : var(--bv);
  padding         : var(--bv);
  background-color: transparent;
  border-radius   : calc(var(--bv) / 2);
  color           : var(--link-color);
  font-weight     : bold;
  transition      : background-color .1s linear;

  > i {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: var(--hover-color);
  }
}
</style>