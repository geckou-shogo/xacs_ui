<template>
  <div
    :class="$style.shadow_box"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
.shadow_box {
  background-color: var(--white-color);
  filter          : drop-shadow(0 0 2px var(--shadow-color));
}
</style>
