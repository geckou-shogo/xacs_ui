<script setup lang="ts">
type Emits = {
  (e: string): void
}

type Props = {
  text       : string,
  iconName   : string,
  buttonType?: string,
}

const emit = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
  buttonType: 'standard',
})
const onButtonClick = () => {
  emit('onClick')
}
</script>

<template>
  <button
    :class="[$style.button, $style[buttonType]]"
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
  --button-color  : var(--link-color);
  display         : inline-flex;
  align-items     : center;
  gap             : var(--bv);
  padding         : var(--bv);
  background-color: var(--white-color);
  border-radius   : calc(var(--bv) / 2);
  border          : 1px solid var(--button-color);
  color           : var(--button-color);
  transition      : all .1s linear;

  > i {
    font-size: 1rem;
  }

  &:hover {
    background-color: var(--button-color);
    color           : var(--white-color);
  }

  &.standard {
    --button-color: var(--link-color);
  }

  &.disabled {
    --button-color: var(--disable-text-color);
    pointer-events: none;
  }

  &.decision {
    --button-color: var(--decision-color);
  }

  &.alert {
    --button-color  : var(--alert-color);
  }
}
</style>