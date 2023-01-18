<template>
  <button
    :class="[$style.select_button, isSelected ? $style.selected : '']"
    @click.prevent="onButtonClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SelectButton',
  props: {
    isSelected: {
      required: true,
      type    : Boolean,
    },
  },
  methods: {
    onButtonClick() {
      this.$emit('onClick')
    },
  },
})
</script>

<style lang="scss" module>
.select_button {
  box-shadow: 0 0 2px 1px var(--shadow-color);
  position  : relative;
  overflow  : hidden;

  > * {
    color   : var(--main-color);
    position: relative;
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
      color: var(--white-color);
    }

    &::before {
      width        : 200%;
      height       : auto;
      border-radius: 50%;
    }
  }
}
</style>
