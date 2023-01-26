<template>
  <main :class="$style.page_container">
    <slot />
  </main>
</template>

<style lang="scss" module>
.page_container {
  display       : flex;
  flex-direction: column;
}
</style>
