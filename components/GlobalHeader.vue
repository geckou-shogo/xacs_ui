<template>
  <header :class="$style.global_header">
    <ShadowBox>
      <div :class="$style.contents">
        <slot />
      </div>
    </ShadowBox>
  </header>
</template>

<style lang="scss" module>
.global_header {
  width   : 100%;
  position: relative;
  z-index : var(--z-index-header);
  
  .contents {
    padding: var(--bv) calc(var(--bv) * 2);
  }
}
</style>
