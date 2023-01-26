<template>
  <main :class="$style.contents_container">
    <slot />
  </main>
</template>

<style lang="scss" module>
.contents_container {
  display       : flex;
  flex-direction: column;
  gap           : calc(var(--bv) * 2);
  padding       : calc(var(--bv) * 2) calc(var(--bv) * 4);
}
</style>
