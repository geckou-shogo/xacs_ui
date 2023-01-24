<template>
  <main :class="$style.page_container">
    <slot />
  </main>
</template>

<style lang="scss" module>
.page_container {
  display       : flex;
  flex-direction: column;
  gap           : calc(var(--bv) * 2);
  padding       : calc(var(--bv) * 2) calc(var(--bv) * 4);
}
</style>
