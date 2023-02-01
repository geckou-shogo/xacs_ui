<template>
  <div
    :class="$style.modal_box"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
.modal_box {
  background-color: var(--white-color);
  filter          : drop-shadow(0 0 6px var(--shadow-color));
}
</style>
