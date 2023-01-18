<template>
  <header :class="$style.global_header">
    <ShadowBox>
      <div :class="$style.contents">
        <slot />
      </div>
    </ShadowBox>
  </header>
</template>

<script setup lang="ts">
defineComponent({
  name: 'GlobalHeader',
})
</script>

<style lang="scss" module>
.global_header {
  width: 100vw;
  
  .contents {
    padding: var(--bv);
  }
}
</style>
