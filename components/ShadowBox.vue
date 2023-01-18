<template>
  <div
    :class="$style.shadow_box"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineComponent({
  name: 'ShadowBox',
})
</script>

<style lang="scss" module>
.shadow_box {
  background-color: var(--white-color);
  box-shadow      : 0 0 2px 1px var(--shadow-color);
}
</style>
