<template>
  <div
    :class="$style.contents_header"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
.contents_header {
  display: flex;
  padding: var(--bv);
}
</style>